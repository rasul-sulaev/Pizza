import {useState} from "react";
import categories from "../data/categories.json";

const Categories = () => {
	const [selectedCategory, setSelectedCategory] = useState(1);

	return (
		<nav className="categories">
			<ul className="categories__list">
				{categories.map((category) =>
					<li
						key={category.id}
						className={category.id === selectedCategory ? 'categories__list-item categories__list-item_active' : 'categories__list-item'}
						onClick={() => setSelectedCategory(category.id)}
					>{category.name}</li>
				)}
			</ul>
		</nav>
	)
}

export default Categories;