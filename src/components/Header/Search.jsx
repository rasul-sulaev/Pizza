import {ReactComponent as IconSearch} from "../../assets/icons/search.svg";
import {ReactComponent as IconTimes} from "../../assets/icons/times.svg";
import {useCallback, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../store/slices/filterSlice";
import debounce from "lodash.debounce";

const Search = () => {
	const [value, setValue] = useState('');
	const inputRef = useRef();
	const dispatch = useDispatch();

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const updateSearchValue = useCallback(
		debounce((value) => {
			dispatch(setSearchValue(value));
		}, 500),
		[]
	)

	const onChangeInputValue = (value) => {
		setValue(value);
		updateSearchValue(value);
	}

	const onClearInput = () => {
		setValue('');
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
				value={value}
				onChange={e => onChangeInputValue(e.target.value)}
				className="header__search-input"
				type="text"
				placeholder="Поиск пиццы..."
			/>
			{value && (
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