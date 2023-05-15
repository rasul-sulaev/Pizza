import Categories from "../components/Categories";
import Card from "../components/Card/Card";
import Sort from "../components/Sort";
import {useEffect, useState} from "react";
import axios from "axios";
import CardSkeleton from "../components/Card/CardSkeleton";

const Home = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		(async () => {
			try {
				await axios.get(`${process.env.REACT_APP_API_URL}/items`)
					.then(res => {
						setItems(prev => res.data)
						setIsLoading(false);
					})
			} catch (error) {
				alert(error);
				console.log(error);
			}
		})()
	}, [])

	return (
		<section className="home section">
			<div className="home__filter">
				<Categories/>
				<Sort/>
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