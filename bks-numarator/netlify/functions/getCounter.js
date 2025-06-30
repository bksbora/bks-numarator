import fs from "fs";

export async function handler() {
  const data = JSON.parse(fs.readFileSync("./counter.json", "utf8"));
  return {
    statusCode: 200,
    body: JSON.stringify({ count: data.count }),
  };
}
