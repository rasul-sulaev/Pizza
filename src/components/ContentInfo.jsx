const ContentInfo = ({
	title,
	description
}) => {
	return (
		<div className="content-info">
			<h2 className="content-info__title">{title}</h2>
			<p className="content-info__description">{description}</p>
		</div>
	)
}

export default ContentInfo;