import Categories from "../components/Categories";
import Card from "../components/Card/Card";

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
				<Card
					title={"Название"}
					img={{
						weight: 260,
						height: 260,
						url: './img/items/pizza1.png',
						alt: 'Описание картинки'
					}}
					price={500}
				/>
			</div>
		</section>
	)
}

export default Home;