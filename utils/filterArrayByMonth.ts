interface RequiredData {
  createdAt: Date;
}

interface DataObject extends Partial<Record<string, any>>, RequiredData {}

export function filterArrayByMonth(array: DataObject[], month: Date) {
  const now = new Date();

  const filteredArray = array.filter((obj: DataObject) => {
    const date = new Date(obj.createdAt);
    return date >= month && date <= now;
  });

  const sortedArray: DataObject[] = filteredArray.sort(
    (a: DataObject, b: DataObject) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return sortedArray;
}
