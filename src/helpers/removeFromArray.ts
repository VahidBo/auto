export function removeFromArray(arr: any[], item: any): any[] {
  const result = [...arr];
  const index = result.indexOf(item);
  if (index > -1) {
    result.splice(index, 1);
  }
  return result;
}
