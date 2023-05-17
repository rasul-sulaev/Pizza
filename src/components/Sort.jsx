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
			<p className="sort__title">Сортировка: <span
				className={`sort__current ${sortOrder === 'desc' ? 'sort__current_desc' : 'sort__current_asc'}`}
				onClick={() => setSelectOpen(!selectOpen)}
			>{selected.name}</span></p>
			<div className={selectOpen ? 'sort__select sort__select_open' : 'sort__select'}>
				<ul className="sort__select-inner">
					{sort.map(item => <li
						key={item.id}
						className={`sort__select-option ${item.value === selected.value ? `sort__select-option_selected ${sortOrder === 'desc' ? 'sort__select-option_desc' : 'sort__select-option_asc'}` : ''}`}
						onClick={() => onSelectOption(item)}
					>{item.name}</li>)}
				</ul>
			</div>
		</div>
	)
}

export default Sort;