import React from "react";

export default function Sitemap() {
    const domain = "https://www.kykustoms.net";
    const urls = [
        "",
        "/portfolio",
        "/testimonials",
        "/contact"
    ];

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(
    path => `  <url>
    <loc>${domain}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === "" ? "1.0" : "0.8"}</priority>
  </url>`
).join("\n")}
</urlset>
`;

    // Download handler
    const handleDownload = () => {
        const blob = new Blob([xml], { type: "application/xml" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "sitemap.xml";
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div style={{
            maxWidth: 800,
            margin: "2rem auto",
            background: "#f8fafc",
            borderRadius: 10,
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            padding: "2rem",
            fontFamily: "monospace"
        }}>
            <h2 style={{fontFamily: "inherit", marginBottom: "1rem"}}>Sitemap XML</h2>
            <button
                onClick={handleDownload}
                style={{
                    marginBottom: "1rem",
                    padding: "0.5rem 1.2rem",
                    borderRadius: 5,
                    border: "none",
                    background: "#00b4d8",
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer"
                }}
            >
                Download sitemap.xml
            </button>
            <pre style={{
                background: "#232b3a",
                color: "#eafaff",
                padding: "1rem",
                borderRadius: 6,
                overflowX: "auto",
                fontSize: "1rem"
            }}>
                {xml}
            </pre>
            <p style={{marginTop: "1.5rem", color: "#333", fontSize: "0.97rem"}}>
                <strong>Note:</strong> For Google Search Console, upload a static <code>sitemap.xml</code> file to your public site root. This page is for human viewing and easy download.
            </p>
        </div>
    );
}