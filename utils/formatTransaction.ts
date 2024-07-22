import { addCommas } from "./addCommas";
import { numberWithTwoDecimals } from "./numberWithTwoDecimals";

export function formatTransaction(number: number | undefined): string {
  return addCommas(numberWithTwoDecimals(number));
}
