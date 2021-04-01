import Pagination from "react-js-pagination";

const PaginationNav = (props) => {
    const {currentPage, itemPerPage, totalItem, pageRangeDisplayed, onChange} = props
    return (
        <Pagination className="pagination-bar"
            itemClass="page-item"
            linkClass="page-link"
            Pagination
            activePage={currentPage}
            itemsCountPerPage={itemPerPage}
            totalItemsCount={totalItem}
            pageRangeDisplayed={pageRangeDisplayed}
            onChange={onChange}
        />
    )
}; export default PaginationNav