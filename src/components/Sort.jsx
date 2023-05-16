const Sort = ({
	sort,
	selected,
	selectOpen,
	setSelectOpen,
	onSelectOption,
	sortOrder
}) => {
	return (
		<div className="sort">
			<p className="sort__title">Сортировка: <span className="sort__current sort__current_desc" onClick={() => setSelectOpen(!selectOpen)}>{selected}</span></p>
			<div className={selectOpen ? 'sort__select sort__select_open' : 'sort__select'}>
				<ul className="sort__select-inner">
					{sort.map(item => <li
						key={item.id}
						className={item.value === selected ? 'sort__select-option sort__select-option_selected' : 'sort__select-option'}
						onClick={() => onSelectOption(item.value)}
					>{item.name}</li>)}
				</ul>
			</div>
		</div>
	)
}

export default Sort;