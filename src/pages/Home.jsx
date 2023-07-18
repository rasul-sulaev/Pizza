import {useEffect, useRef} from "react";
import Categories from "../components/Categories";
import Card from "../components/Card/Card";
import Sort from "../components/Sort";
import CardSkeleton from "../components/Card/CardSkeleton";
import {useDispatch, useSelector} from "react-redux";
import {fetchItemsByParams} from "../store/slices/itemsSlice";
import {setFilters} from "../store/slices/filterSlice";
// import ContentInfo from "../components/ContentInfo";
import {useSearchParams} from "react-router-dom";



const Home = () => {
	const isChangedFilters = useRef(false);
	const {status, dataByParameters: items} = useSelector(state => state.items);
	const {sort, selectedCategoryId, selectedOptionSort , sortOrder, searchValue} = useSelector(state => state.filter);
	const dispatch = useDispatch();
	const [searchParams, setSearchParams] = useSearchParams('');
	let APIQuery = useRef('');


	useEffect(() => {
		// Если изменили параметры
		if (isChangedFilters.current) {
			if (searchValue) {
				setSearchParams({
					name: searchValue,
					category_id: selectedCategoryId === 1 ? '*' : selectedCategoryId,
					sortBy: selectedOptionSort.value,
					order: sortOrder
				})
			} else {
				setSearchParams({
					category_id: selectedCategoryId === 1 ? '*' : selectedCategoryId,
					sortBy: selectedOptionSort.value,
					order: sortOrder,
				})
			}
		}


		// Если не были изменены фильтры
		if (!isChangedFilters.current && window.location.search) {
			let params = '';
			for (let param of searchParams) {
				params += `${param[0]}=${param[1]}&`;
			}

			dispatch(setFilters({
				name: searchParams.get('name') || '',
				category_id: searchParams.get('category_id') === '*' ? 1 : Number(searchParams.get('category_id')),
				selectedOptionSort: sort.find(item => item.value === searchParams.get('sortBy')),
				order: searchParams.get('order')
			}))

			APIQuery.current = `${process.env.REACT_APP_API_URL}/items/?${params}`;
		}
		// Если не были изменены фильтры и нет параметров в URL строке
		else if (!isChangedFilters.current && !window.location.search) {
			APIQuery.current = `${process.env.REACT_APP_API_URL}/items/`;
		}
		// Если были изменены фильтры и есть параметры в URL строке
		else {
			if (searchValue) {
				APIQuery.current = `${process.env.REACT_APP_API_URL}/items/?name=${searchValue}&category_id=${selectedCategoryId === 1 ? '*' : selectedCategoryId}&sortBy=${selectedOptionSort.value}&order=${sortOrder}`
			} else {
				APIQuery.current = `${process.env.REACT_APP_API_URL}/items/?category_id=${selectedCategoryId === 1 ? '*' : selectedCategoryId}&sortBy=${selectedOptionSort.value}&order=${sortOrder}`;
			}
		}

		isChangedFilters.current = true;
		dispatch(fetchItemsByParams(APIQuery.current));
	}, [selectedCategoryId, selectedOptionSort, sortOrder, searchValue])


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

			{/*{(status === 'fulfilled' && !items.length) && (*/}
			{/*	<div className="content">*/}
			{/*		<ContentInfo*/}
			{/*			title={'Питс не осталось :('}*/}
			{/*			description={'Приходите в следующий раз, мы будем вас ждать...'}*/}
			{/*		/>*/}
			{/*	</div>*/}
			{/*)}*/}
			{/*{items && <Pagination />}*/}

		</section>
	)
}

export default Home;