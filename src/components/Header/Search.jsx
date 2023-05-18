import {ReactComponent as IconSearch} from "../../assets/icons/search.svg";
import {ReactComponent as IconTimes} from "../../assets/icons/times.svg";
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setSearchValue} from "../../store/slices/filterSlice"

const Search = () => {
	const {searchValue} = useSelector(state => state.filter)
	const dispatch = useDispatch();
	const inputRef = useRef();

	const onClearInput = () => {
		dispatch(setSearchValue(''));
		inputRef.current.focus()
	}

	return (
		<div className="header__search">
			<IconSearch
				className="header__search-icon"
				width={22}
				heidth={22}
				stroke={"currentColor"}
			/>
			<input
				ref={inputRef}
				value={searchValue}
				onChange={(e) => dispatch(setSearchValue(e.target.value))}
				className="header__search-input"
				type="text"
				placeholder="Поиск пиццы..."
			/>
			{searchValue && (
				<button className="header__search-btn-clear" title="Стереть" onClick={() => onClearInput()}>
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