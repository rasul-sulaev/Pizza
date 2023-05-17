import {ReactComponent as IconBasket} from "../../assets/icons/basket.svg";
import {Link} from "react-router-dom";
import Search from "./Search";

const Header = () => {
	return (
		<header className="header">
			<Link className="header__logo" to="/">
				<img className="header__logo-img" src="./img/logo.png" width={38} height={38} alt="Logo"/>
				<div>
					<h1 className="header__logo-title">REACT PIZZA</h1>
					<span className="header__logo-description">самая вкусная пицца во вселенной</span>
				</div>
			</Link>
			<Search />
			<Link className="header__cart" to="/cart">
				<span className="header__cart-price">520 руб</span>
				<span className="header__cart-separator"></span>
				<span className="header__cart-count">
					<IconBasket
						width={16}
						height={16}
						stroke={"currentColor"}
						strokeWidth={2}
					/>
					0
				</span>
			</Link>
		</header>
	)
}

export default Header;