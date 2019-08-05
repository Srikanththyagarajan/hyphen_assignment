import * as React from 'react';
import './App.css';
import ModelContainer from './components/modelContainer';

class App extends React.Component {
	state = {
		surveys: [],
	};

	componentDidMount() {
		fetch('http://localhost:4000/surveys/', {
			method: 'GET',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(res => res.json())
			.then(res => this.setState({ surveys: res }));
	}
	render() {
		console.log(this.state);
		return (
			<div className="container">
				<header>
					<h1>Questions</h1>
					<h3>You must add atleast one question to launch a survey</h3>
					<hr />
					<section>
						{this.state.surveys.map((ser, i) => {
							return (
								<div key={i}>
                  <h3>{ser.survey_question}</h3>
                  <hr/>
                </div>
                
							)
						})}
					</section>

					<ModelContainer />
				</header>
			</div>
		);
	}
}

export default App;
