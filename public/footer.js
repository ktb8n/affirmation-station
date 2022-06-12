function Footer(props) {
	return (
		<>
			<footer>
				<PlusMinus section='footer' handle={props.handle} />
				<div className='section'>Footer: I am doing my best.{props.data.footer}</div>
				<Data data={props.data} />
			</footer>
		</>
	);
}
