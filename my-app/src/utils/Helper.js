export function filterData(searchText, retaurants) {
    return retaurants.filter((retaurant) =>
      retaurant?.text?.toLowerCase()?.includes(searchText.toLowerCase())
    );
  }