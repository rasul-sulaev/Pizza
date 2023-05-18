import {useDispatch, useSelector} from "react-redux";
import {setSelectedCategoryId} from "../store/slices/filterSlice";

const Categories = () => {
	const {categories, selectedCategoryId} = useSelector(state => state.filter);
	const dispatch = useDispatch();

	return (
		<nav className="categories">
			<ul className="categories__list">
				{categories.map((category) =>
					<li
						key={category.id}
						className={category.id === selectedCategoryId ? 'categories__list-item categories__list-item_active' : 'categories__list-item'}
						onClick={() => dispatch(setSelectedCategoryId(category.id))}
					>{category.name}</li>
				)}
			</ul>
		</nav>
	)
}

export default Categories;