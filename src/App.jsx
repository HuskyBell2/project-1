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
		<div className="card-container">
			<Card title="Hairy Plopper" rating={5} isCool={true} />
			<Card title="Unhappy Potter" rating={1} />
			<Card title="Simple Jack" rating={100} />
			<Card title="mission possible" rating={1000} />
			<Card title="Avoongarz" rating={10} />
		</div>
	);
};

export default App;
