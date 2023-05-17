import {ReactComponent as IconSearch} from "../../assets/icons/search.svg";
import {ReactComponent as IconTimes} from "../../assets/icons/times.svg";

const Search = ({
	searchValue,
	setSearchValue
}) => {
	return (
		<div className="header__search">
			<IconSearch
				className="header__search-icon"
				width={22}
				heidth={22}
				stroke={"currentColor"}
			/>
			<input
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				className="header__search-input"
				type="text"
				placeholder="Поиск пиццы..."
			/>
			{searchValue && (
				<button className="header__search-btn-clear" title="Стереть" onClick={() => setSearchValue('')}>
					<IconTimes
						width={16}
						height={16}
						fill={"currentColor"}
					/>
				</button>
			)}
		</div>
	)
}

export default Search;