import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ReactComponent as IconBasket} from "../assets/icons/basket.svg";
import {ReactComponent as IconTrash} from "../assets/icons/trash.svg";
import {ReactComponent as IconArrowLeft} from "../assets/icons/arrow-left.svg";
import {ReactComponent as IconTimes} from "../assets/icons/times.svg";
import {ReactComponent as IconMinus} from "../assets/icons/minus.svg";
import {ReactComponent as IconPlus} from "../assets/icons/plus.svg";
import ContentInfo from "../components/ContentInfo";

const Cart = () => {
	const navigate = useNavigate();

	const [cartItems, setCartItems] = useState([1]);

	return (
		<section className="cart">
			{cartItems.length ? (
				<div className="cart__inner">
					<div className="cart__header">
						<h2 className="cart__header-title">
							<IconBasket
								width={29}
								height={29}
								stroke={"currentColor"}
								strokeWidth={1.8}
							/>
							Корзина
						</h2>
						<button className="cart__header-btn">
							<IconTrash
								width={20}
								height={20}
								stroke={"currentColor"}
							/>
							Очистить корзину
						</button>
					</div>
					<div className="cart__list">
						<div className="cart__item">
							<img className="cart__item-img" src="./img/items/pizza1.png" width={80} height={80} alt="Описание картинки" />
							<div className="cart__item-info">
								<p className="cart__item-title">Сырный цыпленок</p>
								<span className="cart__item-details">тонкое тесто, 26 см.</span>
							</div>
							<div className="cart__item-controls">
								<button className="cart__item-btn" title="Уменьшить">
									<IconMinus
										width={10}
										height={2}
										fill={"currentColor"}
									/>
								</button>
								<span className="cart__item-count">1</span>
								<button className="cart__item-btn" title="Увеличить">
									<IconPlus
										width={10}
										height={10}
										fill={"currentColor"}
									/>
								</button>
							</div>
							<span className="cart__item-price">770 ₽</span>
							<button className="cart__item-btn cart__item-btn_delete" title="Удалить">
								<IconTimes
									width={10}
									height={10}
									fill={"currentColor"}
								/>
							</button>
						</div>
						<div className="cart__item">
							<img className="cart__item-img" src="./img/items/pizza1.png" width={80} height={80} alt="Описание картинки" />
							<div className="cart__item-info">
								<p className="cart__item-title">Сырный цыпленок</p>
								<span className="cart__item-details">тонкое тесто, 26 см.</span>
							</div>
							<div className="cart__item-controls">
								<button className="cart__item-btn" title="Уменьшить">
									<IconMinus
										width={10}
										height={2}
										fill={"currentColor"}
									/>
								</button>
								<span className="cart__item-count">1</span>
								<button className="cart__item-btn" title="Увеличить">
									<IconPlus
										width={10}
										height={10}
										fill={"currentColor"}
									/>
								</button>
							</div>
							<span className="cart__item-price">770 ₽</span>
							<button className="cart__item-btn cart__item-btn_delete" title="Удалить">
								<IconTimes
									width={10}
									height={10}
									fill={"currentColor"}
								/>
							</button>
						</div>
						<div className="cart__item">
							<img className="cart__item-img" src="./img/items/pizza1.png" width={80} height={80} alt="Описание картинки" />
							<div className="cart__item-info">
								<p className="cart__item-title">Креветки по-азиатски</p>
								<span className="cart__item-details">тонкое тесто, 26 см.</span>
							</div>
							<div className="cart__item-controls">
								<button className="cart__item-btn" title="Уменьшить">
									<IconMinus
										width={10}
										height={2}
										fill={"currentColor"}
									/>
								</button>
								<span className="cart__item-count">1</span>
								<button className="cart__item-btn" title="Увеличить">
									<IconPlus
										width={10}
										height={10}
										fill={"currentColor"}
									/>
								</button>
							</div>
							<span className="cart__item-price">770 ₽</span>
							<button className="cart__item-btn cart__item-btn_delete" title="Удалить">
								<IconTimes
									width={10}
									height={10}
									fill={"currentColor"}
								/>
							</button>
						</div>
					</div>
					<div className="cart__bottom">
						<ul className="cart-total__list">
							<li className="cart-total__list-item">Всего пицц: <strong>3 шт.</strong></li>
							<li className="cart-total__list-item">Сумма заказа: <strong style={{color: 'var(--orange)'}}>900 ₽</strong></li>
						</ul>
						<div className="cart__bottom-btns-block">
							<button className="btn btn_gray-outline" onClick={() => navigate(-1)}>
								<IconArrowLeft
									width={6}
									height={12}
									stroke={"currentColor"}
								/>
								Вернуться назад
							</button>
							<button className="btn">Оплатить сейчас</button>
						</div>
					</div>
				</div>
			) : (
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
			)}
		</section>
	)
}

export default Cart;