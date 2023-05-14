import Categories from "../components/Categories";
import Card from "../components/Card/Card";
import items from "../data/items.json";

const Home = () => {
	return (
		<section className="home section">
			<div className="home__filter">
				<Categories />
			</div>
			<div className="section__header">
				<h2 className="section__header-title">Все пиццы</h2>
			</div>
			<div className="cards-list">
				{items.map(item => <Card
					key={item.id}
					{...item}
					img={{
						url: item.imgUrl,
						alt: item.imgAlt
					}}
				/> )}
			</div>
		</section>
	)
}

export default Home;