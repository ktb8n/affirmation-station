// function PlusMinus(props) {
// 	function handle(e) {
// 		if (e.target.id.includes("minus")) {
// 			props.handle({ name: props.section, value: -1 });
// 			return;
// 		}
// 		props.handle({ name: props.section, value: 1 });
// 	};
// }

//const { set } = require("express/lib/application");
const affirmations = [
	"You're a magical beast",
	"YOU CAN DO ANYTHING",
	"HELL YEAH YOU BADASS SORCERER",
	"WTF ARE YOU EVEN SERIOUS YOURE ABSOLUTELY AMAZING",
	"WOWZA HOLY CRAP YOU HAVE LEARNED SO MUCH",
	"You're doing great thing!!",
	"OF COURSE IT'S HARD. EASY THINGS ARE BORING",
	"STUCK? Draw for 10 minutes. Works like a charm. BECAUSE YOURE FREAKIN AMAZING"
];

function getAffirmation() {
	let affirmation =
		affirmations[Math.floor(Math.random() * affirmations.length)];
	console.log("AFFIRMATIVE: " + affirmation);
	setAffirmation(affirmation);
};

// function Data(props) {
// 	return (
// 		<div>

// 		</div>
// 	);
// };

function App() {
	//define data that will hold the state of all the sections within the holy grail
	const [affirmation, setAffirmation] = React.useState();

	//Identify what's being passed in, and update the section
	// function handle(section) {
	// 	console.log("Pong", section);
	// 	const value = data[section.name] + section.value;
	// 	const object = { [section.name]: value };
	// 	setData({ ...data, ...object });
	// }
	// reference each component and pass into each the data and the function handle
	return (
		<>
			<div className='grid'>
				<Header />
				<Left />
				<Board />
				<Footer />
			</div>
		</>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
