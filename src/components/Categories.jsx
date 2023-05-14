import {useState} from "react";

const categories = [
	{
		id: 1,
		name: 'Все'
	},
	{
		id: 2,
		name: 'Мясные'
	},
	{
		id: 3,
		name: 'Вегетарианская'
	},
	{
		id: 4,
		name: 'Гриль'
	},
	{
		id: 5,
		name: 'Острые'
	},
	{
		id: 6,
		name: 'Закрытые'
	}
];


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