import fs from "fs";

export async function handler() {
  const file = "./counter.json";
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  data.count += 1;
  fs.writeFileSync(file, JSON.stringify(data));
  return {
    statusCode: 200,
    body: JSON.stringify({ count: data.count }),
  };
}
