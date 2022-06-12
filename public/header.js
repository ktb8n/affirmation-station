function Header(props) {
	return (
		<>
			<header>
				<Logo section='logo_small' handle={props.handle} />
				<div className='section'>Affirmation Station{props.data.header}</div>
				<Data data={props.data} />
			</header>
		</>
	);
}
