import {ReactComponent as IconSearch} from "../../assets/icons/search.svg";

const Search = () => {
	return (
		<div className="header__search">
			<IconSearch
				className="header__search-icon"
				width={22}
				heidth={22}
				stroke={"currentColor"}
			/>
			<input className="header__search-input" type="text" placeholder="Поиск пиццы..."/>
		</div>
	)
}

export default Search;