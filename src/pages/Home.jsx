import {useEffect} from "react";
import Categories from "../components/Categories";
import Card from "../components/Card/Card";
import Sort from "../components/Sort";
import CardSkeleton from "../components/Card/CardSkeleton";
import Pagination from "../components/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategoryItems, fetchItemsByParams} from "../store/slices/itemsSlice";
import {setPaginationCountPages} from "../store/slices/filterSlice";

const Home = () => {
	const {isLoading, status, data, dataByParameters: items} = useSelector(state => state.items);
	const {selectedCategoryId, sortBy, sortOrder, paginationCurrentPage} = useSelector(state => state.filter);
	const dispatch = useDispatch();

	console.log(Math.ceil(data.length / 4));

	useEffect(() => {
		dispatch(fetchCategoryItems(selectedCategoryId));
	}, [selectedCategoryId]);

	useEffect(() => {
		dispatch(fetchItemsByParams());
		dispatch(setPaginationCountPages(Math.ceil(data.length / 4)));
	}, [data, selectedCategoryId, sortBy, sortOrder, paginationCurrentPage]);


	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			setIsLoading(true);
	//
	// 			/** Запрос для получаения количество "товаров" в зависимости от выбранной категории **/
	// 			await axios.get(`${selectedCategoryId === 1 ? `${process.env.REACT_APP_API_URL}/items/` : `${process.env.REACT_APP_API_URL}/items/?category_id=${selectedCategoryId}`}`)
	// 				.then(res => setPaginationCountPage(Math.ceil(res.data.length / 4)));
	//
	// 			/** Запрос для получения "товаров" в зависимсоти от картегрии, сортировки и выбранной страницы пагинации **/
	// 			const APIQuery = searchValue ?
	// 				`${process.env.REACT_APP_API_URL}/items/?name=${searchValue}&category_id=${selectedCategoryId === 1 ? '' : selectedCategoryId}&sortBy=${sortBy}&order=${sortOrder}` :
	// 				`${process.env.REACT_APP_API_URL}/items/?category_id=${selectedCategoryId === 1 ? '*' : selectedCategoryId}&sortBy=${sortBy}&order=${sortOrder}&page=${paginationCurrentPage}&limit=4`;
	//
	// 			await axios.get(APIQuery)
	// 				.then(res => {
	// 					setItems(prev => res.data)
	// 					setIsLoading(false);
	// 				})
	// 		} catch (error) {
	// 			alert(error);
	// 			console.log(error);
	// 		}
	// 	})()
	// }, [selectedCategoryId, sortBy, sortOrder, searchValue, paginationCurrentPage]);

	// useEffect(() => {
	// 	(async () => {
	// 		try {
	// 			setIsLoading(true);
	//
	// 			await axios.get(`${process.env.REACT_APP_API_URL}/items/`)
	// 				.then(res => {
	// 					setItems(prev => res.data)
	// 					setIsLoading(false);
	// 				})
	// 		} catch (error) {
	// 			alert(error);
	// 			console.log(error)
	// 		}}
	// 	)()
	//  }, []);


	return (
		<section className="home section">
			{/*<button onClick={() => useDispatch()}></button>*/}
			<div className="home__filter">
				<Categories />
				<Sort />
			</div>
			<div className="section__header">
				<h2 className="section__header-title">Все пиццы</h2>
			</div>
			<div className="cards-list">
				{/*{status === 'pending' ? (*/}
				{isLoading ? (
					[...new Array(4)].map((_, index) => <CardSkeleton key={index} />)
				) : (
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
			<Pagination />
		</section>
	)
}

export default Home;