import ContentLoader from "react-content-loader";

const CardSkeleton = () => {
	return (
		<div className="card">
			<ContentLoader
				speed={2}
				width={280}
				height={462}
				viewBox="0 0 280 462"
				backgroundColor="#f3f3f3"
				foregroundColor="#e6e6e6"
			>
				<circle cx="140" cy="124" r="124" />
				<rect x="0" y="268" rx="6" ry="6" width="280" height="28" />
				<rect x="0" y="314" rx="6" ry="6" width="280" height="85" />
				<rect x="155" y="417" rx="25" ry="25" width="125" height="44" />
				<rect x="0" y="417" rx="6" ry="6" width="120" height="44" />
			</ContentLoader>
		</div>
	)
}

export default CardSkeleton;