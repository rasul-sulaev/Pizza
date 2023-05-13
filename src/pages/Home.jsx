import {Categories} from "../components/Categories";
import {Card} from "../components/Card/Card";

export const Home = () => {
	return (
		<section className="home section">
			<div className="home__filter">
				<Categories />
			</div>
			<div className="section__header">
				<h2 className="section__header-title">Все пиццы</h2>
			</div>
			<div className="cards-list">
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</section>
	)
}