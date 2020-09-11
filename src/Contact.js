import autosize from "autosize";
import React, {Component} from "react";
import "./Contact.css";

export default class Contact extends Component {
	constructor() {
		super();

		this.state = {
			name: "",
			surname: "",
			topic: "",
			question: "",

			selected: -1,

			// errorString: "",
			emailError: "",
			questionError: "",
		};

		const generateAlphabetic = (name, minCharacters) => {
			const pattern = `[a-zA-Z]{${minCharacters + 1},}`;
			return {[name]: {pattern: new RegExp(pattern), error: `${name[0].toUpperCase() + name.slice(1)} must be at least ${minCharacters} alphabetic characters`}};
		};
		const generateCustom = (name, pattern, example) => {
			if (!new RegExp(pattern).test(example)) throw new Error("Bro your exaple doesnt match the pattern wtf?");
			return {[name]: {pattern: new RegExp(pattern), error: `${name[0].toUpperCase() + name.slice(1)} must look like ${example}`}};
		};

		const EMAIL_REGEX = /\S+@\S+\.\S+/;
		this.validationInfo = {...generateCustom("email", EMAIL_REGEX, "email@example.com"), ...generateAlphabetic("question", 5)};

		this.validate = this.validate.bind(this);
	}

	validate(ev) {
		ev.preventDefault();

		const separator = "<br/>";
		let errorString = "";
		let emailError, questionError;
		Object.entries(this.state).forEach((entry) => {
			let info = this.validationInfo[entry[0]];
			if (!info) return;

			if (!info.pattern.test(entry[1])) {
				errorString += `${info.error}${separator}`;
				if (entry[0] === "email") {
					emailError = info.error;
				} else if (entry[0] === "question") {
					questionError = info.error;
				}
			}
		});

		// Error exists
		if (errorString.length > 0) {
			// Remove trailing ', '
			if (errorString.endsWith(separator)) {
				errorString = errorString.slice(0, -separator.length);
			}
			this.setState({emailError, questionError});
		} else {
			// No error, submit!

			return; // Placeholder for now
		}
	}

	render() {
		return (
			<div className="fade-in contact-container">
				<div className="info">
					{/* <GrMail size="20vw"></GrMail> */}
					<h1 className="header">Contact</h1>
					<div className="paragraph muted break-word">Please fill out the form to send me an contact e-mail. I will reach out to you as soon as possible!</div>
				</div>
				<form onSubmit={this.validate} className="form">
					<div className="email-info">
						<input
							value={this.state.email}
							onChange={(ev) => this.setState({email: ev.target.value})}
							type="email"
							className="email"
							placeholder="Your e-mail address"
						/>
						<span className="field-error">{this.state.emailError}</span>
					</div>
					{/* <div className="personal-info">
						<input value={this.state.name} onChange={(ev) => this.setState({name: ev.target.value})} type="text" className="name" placeholder="Name" />
						<input value={this.state.surname} onChange={(ev) => this.setState({surname: ev.target.value})} type="text" className="surname" placeholder="Surname" />
					</div> */}
					<div className="question-info">
						{/* <input value={this.state.topic} onChange={(ev) => this.setState({topic: ev.target.value})} type="text" className="topic thin" placeholder="Topic" /> */}
						<textarea
							value={this.state.question}
							onChange={(ev) => {
								this.setState({question: ev.target.value});
								autosize(ev.target);
							}}
							type="text"
							className="question"
							placeholder="Your question"
						/>
						<span className="field-error">{this.state.questionError}</span>
					</div>
					<div className="footer">
						{/* <div dangerouslySetInnerHTML={{__html: this.state.errorString}} className="error-message"></div> */}
						<button className="submit-button" type="submit">
							Submit!
						</button>
					</div>
				</form>
			</div>
		);
	}
}
