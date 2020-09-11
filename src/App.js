import React, { PureComponent } from "react";
import { DiGithubAlt } from "react-icons/di";
import { ImFacebook, ImTwitter } from "react-icons/im";
import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom";
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

		this.animationTimeout = -1;

		this.state = {
			white: false,
			pageIndex: 0,
			links: this.shareIcons.map((icon, i) => (
				<a
					onClick={(ev) => {
						this.setWhiteActive(ev.target, true);
						this.animationTimeout = setTimeout(() => this.setWhiteActive(null, false), 4000);
					}}
					href={icon.link}
					key={i}
				>
					{React.createElement(icon.el, {size: this.iconSize})}
				</a>
			)),
		};

		this.unloadHandler = this.unloadHandler.bind(this);
	}

	// Clear the animation on unload, after the user presses the back button after going to one of the social links
	unloadHandler(event) {
		clearTimeout(this.animationTimeout);
		this.setWhiteActive(null, false);
	}
	componentDidMount() {
		window.addEventListener("unload", this.unloadHandler);
	}
	componentWillUnmount() {
		window.removeEventListener("unload", this.unloadHandler);
	}

	setWhiteActive(target, bool) {
		if (bool) {
			target.classList.add("share-container-expand");
			document.getElementById("not-buttons").classList.add("fade-out");
		} else {
			document.querySelectorAll(".fade-out, .share-container-expand").forEach((el) => el.classList.remove("fade-out", "share-container-expand"));
		}
	}

	setLocation(pageIndex) {
		this.setState({pageIndex});
	}

	render() {
		return (
			<HashRouter>
				<div id="not-buttons">
					<nav className="navbar">
						<div className="logo">
							<img src="favicon.png" alt="nothin" />
						</div>
						<div className="navbar-links">
							<div className={this.state.pageIndex === 0 ? "current-section" : undefined}>
								<Link onClick={() => this.setLocation(0)} to="/home">
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
					<div className="page-container">
						<Switch>
							<Route exact path="/home">
								<Home />
							</Route>
							<Route exact path="/about">
								<About />
							</Route>
							<Route exact path="/contact">
								<Contact />
							</Route>
							<Route>
								<Redirect to="/home" />
							</Route>
						</Switch>
					</div>
				</div>
				<div className="share">
					<div className="share-container">{this.state.links}</div>
				</div>
			</HashRouter>
		);
	}
}
