import React, {Component} from "react";
import {GrMail} from "react-icons/gr";
import {ImPhone, ImTelegram, ImTwitter} from "react-icons/im";
import "./Contact.css";

export default class Contact extends Component {
	constructor() {
		super();

		this.state = {
			selected: -1,
		};

		this.iconSize = "max(4vw, 30px)";
		this.bubbleIcons = [<GrMail />, <GrMail />, <ImTwitter />, <ImPhone />, <ImTelegram />];
	}

	bubble(icon, index) {
		return (
			// <div className="label">Learn more!</div>
			// <div key={index} className={this.state.selected === index ? "bubble-active" : undefined} onClick={() => this.setState({selected: index})}>
			// </div>
        <div key={index} className={this.state.selected === index ? "bubble-active" : undefined} onClick={() => this.setState({selected: 10})}>{icon}</div>
		);
	}

	render() {
		return (
			<div className="fade-in contact-container">
				<div className="vertical">
					<h1 className="header center">Lorem ipsum</h1>
					<div className="bubbles">{this.bubbleIcons.map((c, i) => this.bubble(React.cloneElement(c, {size: this.iconSize}), i))}</div>
					{/* <div className="bubbles-linepath"></div> */}
				</div>
			</div>
		);
	}
}
