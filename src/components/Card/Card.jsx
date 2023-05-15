import {ReactComponent as IconPlus} from "../../assets/icons/plus.svg";
import {useState} from "react";

const Card = ({
	img,
	name,
	types,
	sizes,
	price
}) => {
	const [selectedType, setSelectedType] = useState(types.filter(type => type.stock)[0].name);
	const [selectedSize, setSelectedSize] = useState(sizes.filter(size => size.stock)[0].name);

	return (
		<a className="card" href="/">
			<img className="card__img" width={260} height={260} src={`./img/items/${img.url}`} alt={img.alt}/>
			<p className="card__title">{name}</p>
			<div className="card__choice" onClick={(e) => e.preventDefault()}>
				<ul className="card__selector">
					{types.map(type => <li
						key={type.name}
						className={type.name === selectedType ? 'card__selector-option card__selector-option_active' : 'card__selector-option'}
						onClick={() => setSelectedType(type.name)}
						disabled={!type.stock && 'disabled'}
					>{type.name}</li>)}
				</ul>
				<ul className="card__selector">
					{sizes.map(size => <li
						key={size.name}
						className={size.name === selectedSize ? 'card__selector-option card__selector-option_active' : 'card__selector-option'}
						onClick={() => setSelectedSize(size.name)}
						disabled={!size.stock && 'disabled'}
					>{size.name}</li>)}
				</ul>
			</div>
			<div className="card__bottom">
				<span className="card__price">от {price} ₽</span>
				<button className="card__btn-add">
					<IconPlus width={12} height={12} fill={"currentColor"} />
					Добавить
					{/*<span className="count">2</span>*/}
				</button>
			</div>
		</a>
	)
}

export default Card;