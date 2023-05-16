import ContentInfo from "../components/ContentInfo";
import {useNavigate} from "react-router-dom";
import {ReactComponent as IconArrowLeft} from "../assets/icons/arrow-left.svg";

const NotFound = () => {
	const navigate = useNavigate();

	return (
		<section className="not-found">
			<ContentInfo
				title={'Ничего не найдено 😕'}
				description={'К сожалению данная страница осутсвует в нашем интернет-магазине'}
			/>
			<button className="not-found__btn btn btn_black" onClick={() => navigate(-1)}>
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