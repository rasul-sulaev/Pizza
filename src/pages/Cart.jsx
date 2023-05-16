import ContentInfo from "../components/ContentInfo";

const Cart = () => {
	return (
		<section className="cart">
			<div className="cart-empty">
				<ContentInfo
					title={'Корзина пустая 😕'}
					description={<>Вероятней всего, вы не заказывали ещё пиццу. <br/>
						Для того, чтобы заказать пиццу, перейди на главную страницу.</>}
				/>
				<img className="cart-empty__img" src="./img/girl-with-basket.svg" width={300} height={255} alt="Женщина с корзиной"/>
				<button className="cart-empty__btn btn btn_black">Вернуться назад</button>
			</div>
		</section>
	)
}

export default Cart;