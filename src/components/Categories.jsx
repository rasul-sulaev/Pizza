import {useDispatch, useSelector} from "react-redux";
import {setSelectedCategoryId} from "../store/slices/filterSlice";

const Categories = () => {
	const {categories, selectedCategoryId} = useSelector(state => state.filter);
	const dispatch = useDispatch();

	const onSelectCategory = (categoryId) => {
		dispatch(setSelectedCategoryId(categoryId))
	}

	return (
		<nav className="categories">
			<ul className="categories__list">
				{categories.map((category) =>
					<li
						key={category.id}
						className={category.id === selectedCategoryId ? 'categories__list-item categories__list-item_active' : 'categories__list-item'}
						onClick={() => onSelectCategory(category.id)}
					>{category.name}</li>
				)}
			</ul>
		</nav>
	)
}

export default Categories;