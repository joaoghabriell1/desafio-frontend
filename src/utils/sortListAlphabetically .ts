import { User } from "../types/user";
import { Filter } from "../store/filter-context";

export const sortListAlphabetically = (
  list: User[],
  filter: Filter
): User[] => {
  let activeFilter = filter.sortBy;

  const sortedListByCity = list.sort((a, b) => {
    if (a.address.city > b.address.city) {
      return 1;
    }
    if (a.address.city < b.address.city) {
      return -1;
    }

    return 0;
  });

  const sortedList = list.sort((a, b) => {
    if (
      a[`${activeFilter as keyof User}`] > b[`${activeFilter as keyof User}`]
    ) {
      return 1;
    }
    if (
      a[`${activeFilter as keyof User}`] < b[`${activeFilter as keyof User}`]
    ) {
      return -1;
    }
    return 0;
  });

  return activeFilter === "city" ? sortedListByCity : sortedList;
};
