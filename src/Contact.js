import autosize from "autosize";
import React, {Component} from "react";
import "./Contact.css";

export default class Contact extends Component {
	constructor() {
		super();

		this.state = {
			email: "",
			question: "",

			selected: -1,

			emailError: "",
			questionError: "",
			showErrors: false,

			submitted: false,
		};

		// I'll leave this in since it's actually good :o
		const generateAlphabetic = (name, minCharacters) => {
			const pattern = `[a-zA-Z ]{${minCharacters + 1},}`;
			return {[name]: {pattern: new RegExp(pattern), error: `${name[0].toUpperCase() + name.slice(1)} must be at least ${minCharacters} alphabetic characters`}};
		};
		const generateCustom = (name, pattern, example) => {
			if (!new RegExp(pattern).test(example)) throw new Error("Bro your exaple doesnt match the pattern wtf?");
			return {[name]: {pattern: new RegExp(pattern), error: `${name[0].toUpperCase() + name.slice(1)} must look like ${example}`}};
		};
		const EMAIL_REGEX = /\S+@\S+\.\S+/;
		this.validationInfo = {...generateCustom("email", EMAIL_REGEX, "'email@example.com'"), ...generateAlphabetic("question", 5)};

		this.validate = this.validate.bind(this);
		this.submit = this.submit.bind(this);
	}

	validate(ev) {
		ev && ev.preventDefault();

		const [emailInfo, questionInfo] = [this.validationInfo.email, this.validationInfo.question];
		const {email, question} = this.state;

		let emailError = "";
		let questionError = "";
		if (!emailInfo.pattern.test(email)) {
			emailError = emailInfo.error;
		}
		if (!questionInfo.pattern.test(question)) {
			questionError = questionInfo.error;
		}

		this.setState({emailError, questionError});
	}

	submit(ev) {
		ev.preventDefault();

		this.setState({showErrors: true});

		if (this.state.emailError.length === 0 && this.state.questionError.length === 0) {
			// Submit
			// Fake a request
			setTimeout(() => this.setState({submitted: true}), 300);
		}
	}

	componentDidMount() {
		// Call validate once to fill in the error messages
		this.validate();
	}

	render() {
		return (
			<div className="fade-in contact-container ">
				<div className="info">
					<h1 className="header">Contact</h1>
					<div className="paragraph muted break-word">Please fill out the form to send me an contact e-mail. I will reach out to you as soon as possible!</div>
				</div>
				<form noValidate onSubmit={this.submit} className="form">
					<div className={"email-info " + (this.state.submitted ? "blur" : "")}>
						<input
							value={this.state.email}
							onChange={(ev) => {
								ev.persist();
								this.setState({email: ev.target.value}, () => this.validate(ev));
							}}
							type="email"
							className="email"
							placeholder="Your e-mail address"
						/>
						{this.state.showErrors && this.state.emailError && <div className="field-error fade-in">{this.state.emailError}</div>}
					</div>
					<div className={"question-info " + (this.state.submitted ? "blur" : "")}>
						<textarea
							value={this.state.question}
							onChange={(ev) => {
								ev.persist();
								this.setState({question: ev.target.value}, () => this.validate(ev));
								autosize(ev.target);
							}}
							type="text"
							className="question"
							placeholder="Your question"
						/>
						{this.state.showErrors && this.state.questionError && <div className="field-error fade-in">{this.state.questionError}</div>}
					</div>
					<div className={"footer " + (this.state.submitted ? "blur" : "")}>
						<button className="submit-button" type="submit">
							Submit!
						</button>
					</div>
					{this.state.submitted && (
						<div className="submit-success">
							<div>Submitted!</div>
						</div>
					)}
				</form>
			</div>
		);
	}
}
