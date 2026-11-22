"""
Generates the placeholder SVG artwork and the sample resume PDF used by the
portfolio. Run once with:  python3 scripts/generate-assets.py
All generated files are written into /public so Vite serves them as static files.
"""

from pathlib import Path

# Resolve the public folder relative to this script's parent (project root).
PUBLIC_DIR = Path(__file__).resolve().parent.parent / "public"
IMAGES_DIR = PUBLIC_DIR / "images"
IMAGES_DIR.mkdir(parents=True, exist_ok=True)


def write_svg(filename: str, svg_content: str) -> None:
    """Write a formatted SVG file into the images directory."""
    (IMAGES_DIR / filename).write_text(svg_content.strip() + "\n", encoding="utf-8")


# ---------- Custom site logo: rounded badge with LP monogram ----------
write_svg(
    "logo.svg",
    """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="LP logo">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#4f46e5"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="16" fill="url(#g)"/>
  <text x="32" y="40" font-family="Arial, sans-serif" font-size="26" font-weight="bold" fill="#fff" text-anchor="middle">LP</text>
</svg>
""",
)

# ---------- Hero illustration: a stylised developer workspace ----------
write_svg(
    "hero.svg",
    """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 360" role="img" aria-label="Developer workspace illustration">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#e0e7ff"/>
      <stop offset="100%" stop-color="#cffafe"/>
    </linearGradient>
  </defs>
  <rect width="520" height="360" rx="20" fill="url(#bg)"/>
  <!-- laptop screen -->
  <rect x="70" y="60" width="380" height="230" rx="12" fill="#0f172a"/>
  <rect x="82" y="72" width="356" height="206" rx="6" fill="#1e293b"/>
  <!-- window dots -->
  <circle cx="98" cy="88" r="5" fill="#f87171"/>
  <circle cx="114" cy="88" r="5" fill="#fbbf24"/>
  <circle cx="130" cy="88" r="5" fill="#34d399"/>
  <!-- code lines -->
  <rect x="100" y="112" width="120" height="9" rx="4" fill="#818cf8"/>
  <rect x="228" y="112" width="70" height="9" rx="4" fill="#22d3ee"/>
  <rect x="116" y="136" width="160" height="9" rx="4" fill="#64748b"/>
  <rect x="116" y="160" width="100" height="9" rx="4" fill="#a78bfa"/>
  <rect x="132" y="184" width="180" height="9" rx="4" fill="#64748b"/>
  <rect x="100" y="208" width="140" height="9" rx="4" fill="#34d399"/>
  <rect x="248" y="208" width="60" height="9" rx="4" fill="#818cf8"/>
  <!-- laptop base -->
  <path d="M40 290h440l-24 18H64z" fill="#334155"/>
  <rect x="210" y="300" width="100" height="6" rx="3" fill="#64748b"/>
  <!-- floating badge -->
  <rect x="330" y="250" width="120" height="44" rx="12" fill="#4f46e5"/>
  <text x="390" y="278" font-family="Arial, sans-serif" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">React</text>
</svg>
""",
)

# ---------- Portrait placeholder ----------
write_svg(
    "profile.svg",
    """
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 380" role="img" aria-label="Portrait placeholder">
  <defs>
    <linearGradient id="p" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e0e7ff"/>
      <stop offset="100%" stop-color="#a5f3fc"/>
    </linearGradient>
  </defs>
  <rect width="320" height="380" rx="16" fill="url(#p)"/>
  <!-- shoulders -->
  <path d="M60 380c0-78 45-120 100-120s100 42 100 120z" fill="#4f46e5"/>
  <!-- neck -->
  <rect x="140" y="228" width="40" height="45" rx="12" fill="#f1c7a5"/>
  <!-- head -->
  <circle cx="160" cy="170" r="68" fill="#f5d0b0"/>
  <!-- hair -->
  <path d="M92 170a68 68 0 0 1 136 0c0-10-8-18-14-24-10 8-30 12-54 12s-44-4-54-12c-6 6-14 14-14 24z" fill="#1f2937"/>
  <!-- face -->
  <circle cx="138" cy="168" r="5" fill="#1f2937"/>
  <circle cx="182" cy="168" r="5" fill="#1f2937"/>
  <path d="M144 198q16 14 32 0" stroke="#b45309" stroke-width="4" fill="none" stroke-linecap="round"/>
  <!-- placeholder label -->
  <text x="160" y="360" font-family="Arial, sans-serif" font-size="14" fill="#fff" text-anchor="middle" opacity="0.9">Your Photo</text>
</svg>
""",
)

# ---------- Project thumbnails ----------
project_palette = [
    ("project-taskflow.svg", "#4f46e5", "TaskFlow", "Dashboard"),
    ("project-recipe.svg", "#f59e0b", "Recipe", "Finder"),
    ("project-weather.svg", "#0ea5e9", "Weather", "Now"),
]
for filename, accent, line1, line2 in project_palette:
    write_svg(
        filename,
        f"""
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 190" role="img" aria-label="{line1} {line2} preview">
  <rect width="400" height="190" fill="#f8fafc"/>
  <rect width="400" height="34" fill="{accent}"/>
  <circle cx="18" cy="17" r="5" fill="#fff" opacity="0.8"/>
  <circle cx="34" cy="17" r="5" fill="#fff" opacity="0.6"/>
  <circle cx="50" cy="17" r="5" fill="#fff" opacity="0.4"/>
  <rect x="18" y="52" width="150" height="118" rx="8" fill="#fff" stroke="#e2e8f0"/>
  <rect x="182" y="52" width="200" height="52" rx="8" fill="#fff" stroke="#e2e8f0"/>
  <rect x="182" y="116" width="200" height="54" rx="8" fill="#fff" stroke="#e2e8f0"/>
  <rect x="32" y="66" width="80" height="9" rx="4" fill="{accent}"/>
  <rect x="32" y="86" width="120" height="7" rx="3" fill="#cbd5e1"/>
  <rect x="32" y="102" width="100" height="7" rx="3" fill="#cbd5e1"/>
  <rect x="32" y="118" width="110" height="7" rx="3" fill="#cbd5e1"/>
  <text x="282" y="160" font-family="Arial, sans-serif" font-size="20" fill="{accent}" text-anchor="middle" font-weight="bold">{line1} {line2}</text>
</svg>
""",
    )

# ---------- Service illustrations ----------
service_palette = [
    ("service-web.svg", "#4f46e5", "Web Development"),
    ("service-design.svg", "#db2777", "UI / UX Design"),
    ("service-mobile.svg", "#059669", "Mobile Apps"),
]
for filename, accent, label in service_palette:
    write_svg(
        filename,
        f"""
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180" role="img" aria-label="{label} illustration">
  <defs>
    <linearGradient id="s" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{accent}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="{accent}" stop-opacity="0.05"/>
    </linearGradient>
  </defs>
  <rect width="320" height="180" fill="url(#s)"/>
  <rect x="70" y="30" width="180" height="120" rx="12" fill="#fff" stroke="{accent}" stroke-width="2"/>
  <rect x="70" y="30" width="180" height="24" rx="12" fill="{accent}"/>
  <circle cx="86" cy="42" r="4" fill="#fff"/>
  <circle cx="100" cy="42" r="4" fill="#fff" opacity="0.7"/>
  <rect x="88" y="70" width="70" height="8" rx="4" fill="{accent}" opacity="0.7"/>
  <rect x="88" y="88" width="140" height="7" rx="3" fill="#cbd5e1"/>
  <rect x="88" y="104" width="120" height="7" rx="3" fill="#cbd5e1"/>
  <rect x="88" y="120" width="90" height="7" rx="3" fill="#cbd5e1"/>
  <text x="160" y="166" font-family="Arial, sans-serif" font-size="14" fill="{accent}" text-anchor="middle" font-weight="bold">{label}</text>
</svg>
""",
    )

# ---------- Sample resume PDF ----------
# A minimal but valid single-page PDF written from scratch (no external libs).
def build_resume_pdf() -> None:
    # Each tuple holds the text and its position on the page (points from bottom-left).
    lines = [
        ("LPoster", 60, 750, 22),
        ("Software Technology Student", 60, 728, 12),
        ("Suzhou, Jiangsu, China  |  1713227350@qq.com  |  15231569662", 60, 710, 10),
        ("", 0, 0, 10),
        ("PROFILE", 60, 680, 13),
        ("Software Technology student at Suzhou Centennial College, enrolled in 2024.", 60, 662, 10),
        ("Interested in web development and building practical applications that solve", 60, 648, 10),
        ("real problems. Eager to keep learning and take on new challenges.", 60, 634, 10),
        ("", 0, 0, 10),
        ("EDUCATION", 60, 604, 13),
        ("Software Technology", 60, 586, 10),
        ("Suzhou Centennial College  |  2024 - Present", 60, 572, 10),
        ("", 0, 0, 10),
        ("SKILLS", 60, 528, 13),
        ("Programming Fundamentals, Web Technologies, HTML, CSS, JavaScript, Databases", 60, 510, 10),
        ("", 0, 0, 10),
        ("PROJECTS", 60, 480, 13),
        ("TaskFlow - React productivity dashboard with drag-and-drop and local storage", 60, 462, 10),
        ("Recipe Finder - Responsive app consuming a public recipe API", 60, 448, 10),
        ("Weather Now - Live weather and 5-day forecast using geolocation", 60, 434, 10),
        ("", 0, 0, 10),
        ("This is a SAMPLE resume. Replace public/resume.pdf with your own PDF.", 60, 380, 9),
    ]

    def escape_pdf(text: str) -> str:
        return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")

    # Build the page content stream with text-drawing operators.
    stream_parts = []
    for text, x, y, size in lines:
        if not text:
            continue
        stream_parts.append(
            f"BT /F1 {size} Tf 1 0 0 1 {x} {y} Tm ({escape_pdf(text)}) Tj ET"
        )
    stream = "\n".join(stream_parts).encode("latin-1")

    # PDF objects. Object 4 is the page content stream.
    objects = [
        b"<< /Type /Catalog /Pages 2 0 R >>",
        b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
        b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] "
        b"/Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
        b"<< /Length " + str(len(stream)).encode() + b" >>\nstream\n" + stream + b"\nendstream",
        b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    ]

    # Assemble the PDF with a correct xref table and trailer.
    pdf = bytearray(b"%PDF-1.4\n")
    offsets = [0]
    for index, obj in enumerate(objects, start=1):
        offsets.append(len(pdf))
        pdf += f"{index} 0 obj\n".encode() + obj + b"\nendobj\n"

    xref_position = len(pdf)
    pdf += f"xref\n0 {len(objects) + 1}\n".encode()
    pdf += b"0000000000 65535 f \n"
    for offset in offsets[1:]:
        pdf += f"{offset:010d} 00000 n \n".encode()
    pdf += (
        f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref_position}\n%%EOF\n"
    ).encode()

    (PUBLIC_DIR / "resume.pdf").write_bytes(pdf)


build_resume_pdf()
print("Generated SVG artwork and sample resume.pdf in /public")
