import {useDispatch, useSelector} from "react-redux";
import {setSort} from "../store/slices/filterSlice"
import {useState} from "react";

const Sort = () => {
	const [selectOpen, setSelectOpen] = useState(false);

	const {sort, selectedOptionSort, sortOrder} = useSelector(state => state.filter);
	const dispatch = useDispatch();

	/** Функция срабатывает при выборе варианта из сортировки **/
	const onSelectOption = (item) => {
		dispatch(setSort(item))
		setSelectOpen(false);
	}

	return (
		<div className="sort">
			<p className="sort__title">Сортировка: <span
				className={`sort__current ${sortOrder === 'desc' ? 'sort__current_desc' : 'sort__current_asc'}`}
				onClick={() => setSelectOpen(!selectOpen)}
			>{selectedOptionSort.name}</span></p>
			<div className={selectOpen ? 'sort__select sort__select_open' : 'sort__select'}>
				<ul className="sort__select-inner">
					{sort.map(item => <li
						key={item.id}
						className={`sort__select-option ${item.value === selectedOptionSort.value ? `sort__select-option_selected ${sortOrder === 'desc' ? 'sort__select-option_desc' : 'sort__select-option_asc'}` : ''}`}
						onClick={() => onSelectOption(item)}
					>{item.name}</li>)}
				</ul>
			</div>
		</div>
	)
}

export default Sort;