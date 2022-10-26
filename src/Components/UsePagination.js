export const UsePagination = (props) => {
  console.log("props", props);
  const { currentPage, itemsPerPage, filterdData } = props;
  console.log("data", filterdData);
  if (filterdData) {
    const IndexofLastItem = currentPage * itemsPerPage;
    const indexOfFirstDish = IndexofLastItem - itemsPerPage;

    return filterdData.slice(indexOfFirstDish, IndexofLastItem);
  }
};
