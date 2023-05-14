import {ReactComponent as IconPlus} from "../../assets/icons/plus.svg";

const Card = () => {
	return (
		<a className="card" href="/">
			<img className="card__img" src="https://pizza.muhammadsalam.ml/img/pizzas/pizza-3.png" alt=""/>
			<p className="card__title">Чизбургер-пицца</p>
			<div className="card__choice" onClick={(e) => e.preventDefault()}>
				<ul className="card__selector">
					<li className="card__selector-option card__selector-option_active">тонкое</li>
					<li className="card__selector-option">традиционное</li>
					{/*<li className="card__selector-option" disabled>традиционное</li>*/}
				</ul>
				<ul className="card__selector">
					<li className="card__selector-option card__selector-option_active">26 см.</li>
					<li className="card__selector-option">30 см.</li>
					<li className="card__selector-option">40 см.</li>
				</ul>
			</div>
			<div className="card__bottom">
				<span className="card__price">от 395 ₽</span>
				<button className="card__btn-add">
					<IconPlus width={12} height={12} fill={"currentColor"} />
					Добавить
					<span className="count">2</span>
				</button>
			</div>
		</a>
	)
}

export default Card;