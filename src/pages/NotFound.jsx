import ContentInfo from "../components/ContentInfo";
import {ReactComponent as IconArrowLeft} from "../assets/icons/arrow-left.svg";

const NotFound = () => {
	return (
		<section className="not-found">
			<ContentInfo
				title={'Ничего не найдено 😕'}
				description={'К сожалению данная страница осутсвует в нашем интернет-магазине'}
			/>
			<button className="not-found__btn btn btn_black">
				<IconArrowLeft
					width={6}
					height={12}
					stroke={"currentColor"}
				/>
				Вернуться назад
			</button>
		</section>
	)
}

export default NotFound;