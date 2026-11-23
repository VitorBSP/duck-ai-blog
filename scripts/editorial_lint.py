from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

EM_DASH = "\u2014"
EN_DASH_APPOSITIVE = " \u2013 "

AI_CLICHES_PT = [
    "no cenário atual",
    "no cenario atual",
    "no mundo atual",
    "vale ressaltar",
    "é fundamental destacar",
    "e fundamental destacar",
    "é importante salientar",
    "e importante salientar",
    "em suma",
    "por fim, mas não menos importante",
    "mergulhar fundo",
    "desvendar os segredos",
    "transformar dados em insights",
    "não é apenas",
    "nao e apenas",
    "não se trata apenas",
    "nao se trata apenas",
    "mudança de paradigma",
    "mudanca de paradigma",
    "alavancar",
    "disruptivo",
    "revolucionário",
    "revolucionario",
    "ecossistema vibrante",
]

URL_RE = re.compile(r"https?://\S+")


def strip_frontmatter(text: str) -> tuple[str, str, int]:
    lines = text.splitlines()
    if lines and lines[0].strip() == "---":
        for idx in range(1, len(lines)):
            if lines[idx].strip() == "---":
                return "\n".join(lines[1:idx]), "\n".join(lines[idx + 1 :]), idx + 1
    return "", text, 0


def lint_article(path: Path) -> dict[str, object]:
    raw = path.read_text(encoding="utf-8")
    all_lines = raw.splitlines()
    frontmatter, body, body_offset = strip_frontmatter(raw)

    errors: list[dict[str, object]] = []
    warnings: list[dict[str, object]] = []

    # 1. Hard ban on em-dash and appositive en-dash across entire file (including title/frontmatter)
    for idx, line in enumerate(all_lines, start=1):
        if EM_DASH in line:
            errors.append(
                {
                    "rule": "no_em_dash",
                    "line": idx,
                    "snippet": line.strip()[:140],
                    "fix": "Remova o travessao e use ponto final, virgula, dois pontos ou parenteses.",
                }
            )
        if EN_DASH_APPOSITIVE in line:
            errors.append(
                {
                    "rule": "no_en_dash_appositive",
                    "line": idx,
                    "snippet": line.strip()[:140],
                    "fix": "Evite meia-risca como aposto; prefira ponto final, virgula ou parenteses.",
                }
            )

    # 2. AI cliches check
    for idx, line in enumerate(all_lines, start=1):
        lower = line.casefold()
        for phrase in AI_CLICHES_PT:
            if phrase in lower:
                warnings.append(
                    {
                        "rule": "ai_cliche",
                        "line": idx,
                        "phrase": phrase,
                        "snippet": line.strip()[:140],
                    }
                )

    # 3. Readability: paragraph length and long sentences in body (skipping code fences)
    in_code = False
    para_lines: list[str] = []
    para_start = body_offset + 1
    word_count = 0

    def flush_paragraph(lines_buf: list[str], start_line: int) -> None:
        nonlocal word_count
        if not lines_buf:
            return
        text_block = " ".join(x.strip() for x in lines_buf).strip()
        if not text_block or text_block.startswith(("#", "|", "![", ">", "- ", "* ")):
            return
        words = text_block.split()
        word_count += len(words)
        if len(words) > 95:
            warnings.append(
                {
                    "rule": "long_paragraph",
                    "line": start_line,
                    "words": len(words),
                    "fix": "Quebre o paragrafo em blocos de 2 a 4 linhas para facilitar leitura web.",
                }
            )
        for sentence in re.split(r"[.!?]+", text_block):
            s_words = sentence.strip().split()
            if len(s_words) > 38:
                warnings.append(
                    {
                        "rule": "long_sentence",
                        "line": start_line,
                        "words": len(s_words),
                        "snippet": sentence.strip()[:120],
                    }
                )

    for offset, line in enumerate(body.splitlines(), start=body_offset + 1):
        stripped = line.strip()
        if stripped.startswith("```"):
            flush_paragraph(para_lines, para_start)
            para_lines = []
            in_code = not in_code
            continue
        if in_code:
            continue
        if not stripped:
            flush_paragraph(para_lines, para_start)
            para_lines = []
            para_start = offset + 1
        else:
            if not para_lines:
                para_start = offset
            para_lines.append(line)
    flush_paragraph(para_lines, para_start)

    # 4. Primary source links check for Radar Eleitoral
    urls = URL_RE.findall(body)
    is_radar = "radar eleitoral" in (frontmatter + "\n" + body).casefold()
    if is_radar and not urls:
        warnings.append(
            {
                "rule": "missing_primary_source_link",
                "line": 1,
                "fix": "Artigos do Radar Eleitoral devem conter links verificaveis para fontes primarias (TSE, IBGE, etc.).",
            }
        )

    reading_minutes = max(1, round(word_count / 200))
    return {
        "file": path.as_posix(),
        "valid": len(errors) == 0,
        "error_count": len(errors),
        "warning_count": len(warnings),
        "word_count": word_count,
        "estimated_reading_minutes": reading_minutes,
        "primary_links_found": len(urls),
        "errors": errors,
        "warnings": warnings[:25],
    }


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Duck AI Editorial Quality Gate (blocks em-dash, flags AI cliches and readability issues)"
    )
    parser.add_argument("target", type=Path, help="Markdown/MDX article path")
    args = parser.parse_args()

    result = lint_article(args.target)
    print(json.dumps(result, ensure_ascii=False, indent=2))
    if not result["valid"]:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
