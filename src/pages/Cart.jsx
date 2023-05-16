import ContentInfo from "../components/ContentInfo";
import {useNavigate} from "react-router-dom";
import {ReactComponent as IconArrowLeft} from "../assets/icons/arrow-left.svg";

const Cart = () => {
	const navigate = useNavigate();

	return (
		<section className="cart">
			<div className="cart-empty">
				<ContentInfo
					title={'Корзина пустая 😕'}
					description={<>Вероятней всего, вы не заказывали ещё пиццу. <br/>
						Для того, чтобы заказать пиццу, перейди на главную страницу.</>}
				/>
				<img className="cart-empty__img" src="./img/girl-with-basket.svg" width={300} height={255} alt="Женщина с корзиной"/>
				<button className="cart-empty__btn btn btn_black" onClick={() => navigate(-1)}>
					<IconArrowLeft
						width={6}
						height={12}
						stroke={"currentColor"}
					/>
					Вернуться назад
				</button>
			</div>
		</section>
	)
}

export default Cart;