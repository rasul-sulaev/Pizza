const ContentInfo = ({
	title,
	description
}) => {
	return (
		<div className="content__info">
			<h2 className="content__info-title">{title}</h2>
			<p className="content__info-description">{description}</p>
		</div>
	)
}

export default ContentInfo;