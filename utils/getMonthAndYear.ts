// converts 2024-11 to November 2024
export const getMonthAndYear = (monthString: string) => {
  const date = new Date(monthString + "-01"); // Append a day to create a valid date
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long"
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};
