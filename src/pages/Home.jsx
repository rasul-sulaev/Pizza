import {useEffect, useState} from "react";
import Categories from "../components/Categories";
import Card from "../components/Card/Card";
import Sort from "../components/Sort";
import CardSkeleton from "../components/Card/CardSkeleton";
import axios from "axios";
import categories from "../data/categories.json";
import sort from "../data/sort.json";

const Home = ({searchValue}) => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [selectedCategoryId, setSelectedCategoryId] = useState(1);
	const [selectOpen, setSelectOpen] = useState(false);
	const [selectedOptionSort, setSelectedOptionSort] = useState(sort[0]);
	const [sortBy, setSortBy] = useState('rating');
	const [sortOrder, setSortOrder] = useState('desc')


	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				const APIQuery = searchValue ?
					`${process.env.REACT_APP_API_URL}/items/?name=${searchValue}&category_id=${selectedCategoryId === 1 ? '' : selectedCategoryId}&sortBy=${sortBy}&order=${sortOrder}` :
					`${process.env.REACT_APP_API_URL}/items/?category_id=${selectedCategoryId === 1 ? '*' : selectedCategoryId}&sortBy=${sortBy}&order=${sortOrder}`;

				await axios.get(APIQuery)
					.then(res => {
						setItems(prev => res.data)
						setIsLoading(false);
					})
			} catch (error) {
				alert(error);
				console.log(error);
			}
		})()
	}, [selectedCategoryId, sortBy, sortOrder, searchValue]);


	/** Функция срабатывает при выборе варианта из выпадающего списка Сортировки
	 * @param sortItem - в этот параметр передается object выбраного варианта сортировки
	 * */
	const onSelectOption = (sortItem) => {
		if (sortItem.value === sortBy) {
			setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
		} else {
			setSortBy(sortItem.value);
			setSortOrder('desc');
		}

		setSelectedOptionSort(sortItem);
		setSelectOpen(false);
	}

	return (
		<section className="home section">
			<div className="home__filter">
				<Categories
					categories={categories}
					selectedCategoryId={selectedCategoryId}
					setSelectedCategoryId={setSelectedCategoryId}
				/>
				<Sort
					sort={sort}
					selectOpen={selectOpen}
					setSelectOpen={setSelectOpen}
					selectedOptionSort={selectedOptionSort}
					onSelectOption={onSelectOption}
					sortOrder={sortOrder}
				/>
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
		</section>
	)
}

export default Home;