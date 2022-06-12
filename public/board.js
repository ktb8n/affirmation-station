function Board(props) {
	return (
		<>
			<article>
				<div className='section'>
					<h5>Truth goes here.</h5>

					{props.data.article}
				</div>
				<Data data={props.data} />
			</article>
		</>
	);
}
