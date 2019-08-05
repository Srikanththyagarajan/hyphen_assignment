import * as React from 'react';
import { Modal } from './model';

class ModelContainer extends React.Component {
	state = {
		show: false,
		question: '',
		answers: [{ question: '' }],
	};

	showModal = e => {
		e.preventDefault();
		this.setState({ show: true });
	};

	hideModal = e => {
		e.preventDefault();
		this.setState({ show: false, question: '', answers: [{ question: '' }] });
	};
	handlequestionChange = evt => {
		this.setState({ question: evt.target.value });
	};

	handleAnswersquestionChange = idx => evt => {
		const newanswers = this.state.answers.map((answer, sidx) => {
			if (idx !== sidx) return answer;
			return { ...answer, question: evt.target.value };
		});

		this.setState({ answers: newanswers });
	};

	handleSubmit = evt => {
		evt.preventDefault();
		const { question, answers } = this.state;
		console.log(this.state, question, answers);

		const survey = {
			survey_question: question,
			survey_answer: answers,
		};

		console.log(survey);

		fetch('http://localhost:4000/surveys/add', {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(survey),
		}).then(response => response.json());
	};

	handleAddAnswer = () => {
		this.setState({
			answers: this.state.answers.concat([{ question: '' }]),
		});
	};

	handleRemoveAnswer = idx => () => {
		this.setState({
			answers: this.state.answers.filter((s, sidx) => idx !== sidx),
		});
	};

	render() {
		return (
			<main>
				<Modal show={this.state.show}>
					<h2 className="display">Add a custom Question</h2>
					<button className="pull-right close" onClick={this.hideModal}>
						X
					</button>
					<hr />
					<form onSubmit={this.handleSubmit}>
						<h4>Question</h4>
						<input type="text" value={this.state.question} onChange={this.handlequestionChange} />
						<h4>Answers</h4>
						{this.state.answers.map((shareholder, idx) => (
							<div className="answer" key={idx}>
								<input
									type="text"
									placeholder={`Answer #${idx + 1}`}
									value={shareholder.question}
									onChange={this.handleAnswersquestionChange(idx)}
								/>
								<button
									type="button"
									onClick={this.handleRemoveAnswer(idx)}
									className="btn btn-primary small"
								>
									-
								</button>
							</div>
						))}
						<button type="button" className="col-md-3 btn btn-primary" onClick={this.handleAddAnswer}>
							Add new Answer
						</button>
						<button className="pull-right col-md-3 btn btn-primary">Save Changes</button>
					</form>
				</Modal>
				<button type="button" onClick={this.showModal} className="btn btn-primary">
					open
				</button>
			</main>
		);
	}
}

export default ModelContainer;
