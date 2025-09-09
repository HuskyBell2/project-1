// REMINDER - Take it LIVE! Publish it on the INTERWEBZ :)
import './App.css';

const Card = ({ title }) => {
	return (
		<div className="card">
			<h2>{title}</h2>
		</div>
	);
};

const App = () => {
	return (
		<>
			<h1>hola</h1>
			<div className="card-container">
				<Card title="Hairy Plopper" rating={5} isCool={true} />
				<Card title="Unhappy Potter" rating={1} />
				<Card title="Simple Jack" rating={10} />
				<Card title="mission possible" rating={1000} />
				<Card title="Avoongarz" rating={100} />
			</div>
			<p class="light">This is light text.</p>
			<p class="regular">This is regular text.</p>
			<p class="medium">This is medium text.</p>
			<p class="bold">This is bold text.</p>
			<p class="extra-bold">This is extra bold text.</p>
		</>
	);
};

export default App;
