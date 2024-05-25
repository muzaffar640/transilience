import csv from "csvtojson";
import path from "path";
import { promises as fs } from "fs";

import { VulnerabilityData } from "../../types/VulnerabilityData";

export default async function handler(req: any, res: any) {
  const csvFilePath = path.join(process.cwd(), "vendor_advisories.csv");
  try {
    await fs.access(csvFilePath);

    // Parse CSV data and cast to VulnerabilityData[]
    const jsonArray: VulnerabilityData[] = (await csv().fromFile(
      csvFilePath
    )) as VulnerabilityData[];

    res.status(200).json(jsonArray);
  } catch (error) {
    res.status(500).json({ error: "File does not exist or cannot be read" });
  }
}
