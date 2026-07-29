import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { personalInfo } from "@/lib/data";

export const runtime = "nodejs";

async function serveLocalResume(fileName: string) {
  try {
    const buffer = await readFile(
      path.join(process.cwd(), "public", "Ashish_Jadhav_Resume.pdf")
    );

    if (buffer.byteLength > 0) {
      return new NextResponse(buffer, {
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${fileName}"`,
          "Cache-Control": "no-cache",
        },
      });
    }
  } catch {
    return null;
  }

  return null;
}

export async function GET() {
  const fileId = personalInfo.resumeFileId;
  const fileName = personalInfo.resumeFileName;

  const downloadUrls = [
    `https://drive.usercontent.google.com/download?id=${fileId}&export=download&confirm=t`,
    `https://drive.google.com/uc?export=download&id=${fileId}`,
  ];

  for (const url of downloadUrls) {
    try {
      const response = await fetch(url, {
        redirect: "follow",
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; PortfolioBot/1.0)",
        },
      });

      const contentType = response.headers.get("content-type") ?? "";

      if (
        response.ok &&
        (contentType.includes("pdf") ||
          contentType.includes("octet-stream") ||
          contentType.includes("application/"))
      ) {
        const buffer = await response.arrayBuffer();

        if (buffer.byteLength > 1000) {
          return new NextResponse(buffer, {
            headers: {
              "Content-Type": "application/pdf",
              "Content-Disposition": `attachment; filename="${fileName}"`,
              "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
            },
          });
        }
      }
    } catch {
      continue;
    }
  }

  const localResume = await serveLocalResume(fileName);
  if (localResume) {
    return localResume;
  }

  return NextResponse.redirect(personalInfo.resumeViewUrl);
}
