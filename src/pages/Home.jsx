import {useEffect} from "react";
import Categories from "../components/Categories";
import Card from "../components/Card/Card";
import Sort from "../components/Sort";
import CardSkeleton from "../components/Card/CardSkeleton";
import Pagination from "../components/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoryItems, fetchItemsByParams} from "../store/slices/itemsSlice";
import {setPaginationCountPages} from "../store/slices/filterSlice";
import ContentInfo from "../components/ContentInfo";

const Home = () => {
	const {status, data, dataByParameters: items} = useSelector(state => state.items);
	const {selectedCategoryId, sortBy, sortOrder, searchValue, paginationCurrentPage} = useSelector(state => state.filter);
	const dispatch = useDispatch();

	console.log(Math.ceil(data.length / 4));

	useEffect(() => {
		const APIQuery = `${selectedCategoryId === 1 ? `${process.env.REACT_APP_API_URL}/items/` : `${process.env.REACT_APP_API_URL}/items/?category_id=${selectedCategoryId}`}`;

		dispatch(fetchCategoryItems(APIQuery));
	}, [dispatch, selectedCategoryId]);

	useEffect(() => {
		const APIQuery = searchValue ?
			`${process.env.REACT_APP_API_URL}/items/?name=${searchValue}&category_id=${selectedCategoryId === 1 ? '' : selectedCategoryId}&sortBy=${sortBy}&order=${sortOrder}` :
			`${process.env.REACT_APP_API_URL}/items/?category_id=${selectedCategoryId === 1 ? '*' : selectedCategoryId}&sortBy=${sortBy}&order=${sortOrder}&page=${paginationCurrentPage}&limit=4`;

		dispatch(fetchItemsByParams(APIQuery));
		dispatch(setPaginationCountPages(Math.ceil(data.length / 4)));
	}, [dispatch, data, selectedCategoryId, sortBy, sortOrder, searchValue, paginationCurrentPage]);


	return (
		<section className="home section">
			<div className="home__filter">
				<Categories />
				<Sort />
			</div>
			<div className="section__header">
				<h2 className="section__header-title">Все пиццы</h2>
			</div>
			<div className="cards-list">
				{status === 'pending' && (
					[...new Array(4)].map((_, index) => <CardSkeleton key={index} />)
				)}

				{status === 'fulfilled' && (
					items.map(item =>
						<Card
							key={item.id}
							{...item}
							img={{
								url: item.imgUrl,
								alt: item.imgAlt
							}}
						/>
					)
				)}
			</div>

			{(status === 'fulfilled' && !items.length) && (
				<div className="content">
					<ContentInfo
						title={'Питс не осталось :('}
						description={'Приходите в следующий раз, мы будем вас ждать...'}
					/>
				</div>
			)}
			<Pagination />
		</section>
	)
}

export default Home;