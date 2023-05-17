import ReactPaginate from "react-paginate";

const Pagination = ({
	paginationCountPage,
	setPaginationCurrentPage
}) => {
	return (
		<ReactPaginate
			className="pagination"
			previousLabel="<"
			breakLabel="..."
			nextLabel=">"
			pageCount={paginationCountPage}
			onPageChange={(e) => setPaginationCurrentPage(e.selected + 1)}
		/>
	)
}

export default Pagination;