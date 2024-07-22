export function numberWithTwoDecimals(number: number | undefined) {
  return Number(number?.toFixed(2));
}
