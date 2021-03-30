import Pagination from "react-js-pagination";

const PaginationNav = (currentPage, itemPerPage, totalItem, pageRangeDisplayed, onChange) => {

    return (
        <Pagination
            Pagination
            activePage={currentPage}
            itemsCountPerPage={itemPerPage}
            totalItemsCount={totalItem}
            pageRangeDisplayed={pageRangeDisplayed}
            onChange={onChange}
        />
    )
}; export default PaginationNav