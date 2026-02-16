import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yargSyncPlugin = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    description: "Base number for multiplication",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    description: "Limit number for multiplication",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    description: "Show the multiplication table in the console",
  })
  .option("n", {
    alias: "name",
    type: "string",
    description: "Name of the multiplication table",
    default: "table",
  })
  .option("d", {
    alias: "directory",
    type: "string",
    description: "Directory to save the multiplication table",
    default: "outputs",
  })
  .check((argv) => {
    if (isNaN(argv.b)) {
      throw new Error("Base must be a number");
    }
    if (isNaN(argv.l)) {
      throw new Error("Limit must be a number");
    }
    return true;
  })
  .parseSync();
