
import type { MingguRPS } from "@/data/rps-data";
import { promises as fs } from "fs";
import path from "path";

export async function getDataRPS(): Promise<MingguRPS[]> {
  const filePath = path.join(
    process.cwd(),
    "public",
    "data",
    "minggu.json"
  );

  const fileContent = await fs.readFile(filePath, "utf8");

  return JSON.parse(fileContent) as MingguRPS[];
}
