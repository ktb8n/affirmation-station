function Board(props) {
	return (
		<>
			<article>
				<StickerChart section='board' handle={props.handle} />
				<div className='section'>Sticker Board:{props.data.article}</div>
				<Data data={props.data} />
			</article>
		</>
	);
}
