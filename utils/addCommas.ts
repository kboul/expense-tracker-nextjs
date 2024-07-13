export function addCommas(x: number | undefined): string {
  return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ?? "";
}
