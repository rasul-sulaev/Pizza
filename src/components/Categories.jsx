const Categories = ({
	categories,
	selectedCategoryId,
	setSelectedCategoryId
}) => {
	return (
		<nav className="categories">
			<ul className="categories__list">
				{categories.map((category) =>
					<li
						key={category.id}
						className={category.id === selectedCategoryId ? 'categories__list-item categories__list-item_active' : 'categories__list-item'}
						onClick={() => setSelectedCategoryId(category.id)}
					>{category.name}</li>
				)}
			</ul>
		</nav>
	)
}

export default Categories;