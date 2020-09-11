import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import "./Home.css";

export default class Home extends PureComponent {
	render() {
		return (
			<div className="fade-in home-container">
				<div className="info">
					<h1 className="header">Lorem Ipsum</h1>
					<h1 className="paragraph muted">
						7 dolor sit amet, consectetur adipiscing elit. Curabitur nec blandit leo. Praesent malesuada neque fringilla lacus varius, at dignissim mauris efficitur.
						Etiam et eros quis nisl finibus pellentesque. Proin a magna sollicitudin, consequat sem id, maximus ante. Suspendisse ultrices massa in finibus viverra.
						Fusce sit amet congue turpis.
					</h1>
				</div>
				<Link to="/about" style={{display: "block"}}>
					<div className="learn-more">
						<div className="play-o">
							<div className="play-i">
								<img className="play-svg" src="play.svg" alt="learn more"></img>
							</div>
						</div>
						<div className="label">Learn more!</div>
					</div>
				</Link>
			</div>
		);
	}
}
