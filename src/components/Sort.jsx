import sort from "../data/sort.json";
import {useState} from "react";

const Sort = () => {
	const [selectOpen, setSelectOpen] = useState(false);
	const [selected, setSelected] = useState(sort[0]);

	const onSelectOption = (optionName) => {
		setSelected(optionName);
		setSelectOpen(false);
	}

	return (
		<div className="sort">
			<p className="sort__title">Сортировака по: <span className="sort__current sort__current_desc" onClick={() => setSelectOpen(!selectOpen)}>{selected}</span></p>
			<div className={selectOpen ? 'sort__select sort__select_open' : 'sort__select'}>
				<ul className="sort__select-inner">
					{/*<li className="sort__select-option sort__select-option_desc">по алфавиту</li>*/}
					{sort.map(name => <li
						key={name}
						className={name === selected ? 'sort__select-option sort__select-option_selected' : 'sort__select-option'}
						onClick={() => onSelectOption(name)}
					>{name}</li>)}
				</ul>
			</div>
		</div>
	)
}

export default Sort;