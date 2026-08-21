import { PDFParse } from "pdf-parse";
import fs from "fs";

export async function extractTextFromPDF(pdfPath) {
  const dataBuffer = fs.readFileSync(pdfPath);

  const parser = new PDFParse({
    data: dataBuffer,
  });

  const result = await parser.getText();

  await parser.destroy();

  return result.text.trim();
}