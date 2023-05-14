import {ReactComponent as IconPlus} from "../../assets/icons/plus.svg";

const Card = ({
	title,
	img,
	price
}) => {
	return (
		<a className="card" href="/">
			<img className="card__img" width={img.width} height={img.height} src={img.url} alt={img.alt}/>
			<p className="card__title">{title}</p>
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
				<span className="card__price">от {price} ₽</span>
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