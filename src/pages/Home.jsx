import {useEffect, useState} from "react";
import Categories from "../components/Categories";
import Card from "../components/Card/Card";
import Sort from "../components/Sort";
import CardSkeleton from "../components/Card/CardSkeleton";
import axios from "axios";
import Pagination from "../components/Pagination";
import {useDispatch, useSelector} from "react-redux";

const Home = () => {
	// const {isLoading, items} = useSelector(state => state.items);
	// const dispatch = useDispatch();


	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);


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

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);

				await axios.get(`${process.env.REACT_APP_API_URL}/items/`)
					.then(res => {
						setItems(prev => res.data)
						setIsLoading(false);
					})
			} catch (error) {
				alert(error);
				console.log(error)
			}}
		)()
	 }, []);


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