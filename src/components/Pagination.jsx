import ReactPaginate from "react-paginate";
import {useDispatch, useSelector} from "react-redux";
import {setPaginationCurrentPage} from "../store/slices/filterSlice";

const Pagination = () => {
	const {paginationCountPages} = useSelector(state => state.filter);
	const dispatch = useDispatch();

	return (
		<ReactPaginate
			className="pagination"
			previousLabel="<"
			breakLabel="..."
			nextLabel=">"
			pageCount={paginationCountPages}
			onPageChange={(e) => dispatch(setPaginationCurrentPage(e.selected + 1))}
		/>
	)
}

export default Pagination;