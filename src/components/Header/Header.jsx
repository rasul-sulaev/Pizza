import {ReactComponent as IconBasket} from "../../assets/icons/basket.svg";
import {ReactComponent as IconSearch} from "../../assets/icons/search.svg";

const Header = () => {
	return (
		<header className="header">
			<a className="header__logo" href="/">
				<img className="header__logo-img" src="./img/logo.png" width={38} height={38} alt="Logo"/>
				<div>
					<h1 className="header__logo-title">REACT PIZZA</h1>
					<span className="header__logo-description">самая вкусная пицца во вселенной</span>
				</div>
			</a>
			<div className="header__search">
				<IconSearch
					className="header__search-icon"
					width={22}
					heidth={22}
					stroke={"currentColor"}
				/>
				<input className="header__search-input" type="text" placeholder="Поиск пиццы..."/>
			</div>
			<a className="header__cart" href="/">
				<span className="header__cart-price">520 руб</span>
				<span className="header__cart-separator"></span>
				<span className="header__cart-count">
					<IconBasket />
					0
				</span>
			</a>
		</header>
	)
}

export default Header;