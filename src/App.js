import React, {PureComponent} from "react";
import {DiGithubAlt} from "react-icons/di";
import {ImFacebook, ImTwitter} from "react-icons/im";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import "./Transitions.css";
import VkLogo from "./VkLogo";

export default class App extends PureComponent {
	constructor() {
		super();

		this.iconSize = "27px";
		this.shareIcons = [
			{el: DiGithubAlt, link: "https://github.com/0x666c/"},
			{el: ImTwitter, link: "https://github.com/0x666c/"},
			{el: VkLogo, link: "https://github.com/0x666c/"},
			{el: ImFacebook, link: "https://github.com/0x666c/"},
		];

		this.state = {
			pageIndex: 0,
			links: this.shareIcons.map((icon, i) => (
				<a
					onClick={(ev) => {
						ev.target.classList.add("share-container-expand");
						this.externalLinkFade();
					}}
					href={icon.link}
					key={i}
				>
					{React.createElement(icon.el, {size: this.iconSize})}
				</a>
			)),
		};
	}

	externalLinkFade() {
		document.getElementById("not-buttons").classList = "fade-out";
	}

	setLocation(pageIndex) {
		this.setState({pageIndex});
	}

	render() {
		return (
			<BrowserRouter>
				<div id="not-buttons">
					{/* <div className="diagonalbg"></div> */}
					<nav className="navbar">
						<div className="logo">
							<img src="favicon.png" alt="nothin" />
						</div>
						<div className="navbar-links">
							<div className={this.state.pageIndex === 0 ? "current-section" : undefined}>
								<Link onClick={() => this.setLocation(0)} to="/">
									Home
								</Link>
							</div>
							<div className={this.state.pageIndex === 0 ? "current-section" : undefined}>
								<Link onClick={() => this.setLocation(1)} to="/about">
									About
								</Link>
							</div>
							<div className={this.state.pageIndex === 0 ? "current-section" : undefined}>
								<Link onClick={() => this.setLocation(2)} to="/contact">
									Contact
								</Link>
							</div>
						</div>
					</nav>
					<Switch>
						<>
							<div className="page-container">
								<Route exact path="/">
									<Home />
								</Route>
								<Route exact path="/about">
									<About />
								</Route>
								<Route exact path="/contact">
									<Contact />
								</Route>
							</div>
						</>
					</Switch>
				</div>
				<div className="share">
					<div className="share-container">{this.state.links}</div>
				</div>
			</BrowserRouter>
		);
	}
}
