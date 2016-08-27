import React from 'react';
import {Element} from 'react-scroll';
import styles from './feature-join.scss';

const imageContext = require.context('../../elements');

export class FeaturedJoin extends React.Component {
	constructor() {
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(field) {
		return event => {
			this.setState({
				[field]: event.target.value
			});
		};
	}
	handleSubmit(event) {
		event.preventDefault();
		fetch('https://qvikae2ufi.execute-api.us-west-2.amazonaws.com/prod/contact-us', {
			method: 'post',
			mode: 'cors',
			body: JSON.stringify({
				name: this.state.name,
				email: this.state.email,
				organisation: this.state.organisation,
				message: this.state.message
			}),
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		});
	}
	render() {
		return (
			<div className={styles.feature}>
				<section className={styles.video}>
					<video autoPlay loop muted>
						<source src={imageContext('./clip2.mp4')} type="video/mp4"/>
					</video>
				</section>
				<Element name="join" className={styles.content}>
					<section>
						<div className={styles.background}/>
						<header className="hidden">
							<h2>Sign up</h2>
						</header>

						<div className="text-slab">
							Begin the journey
						</div>

						<p className="text-center">
							Interested in coming on board? Get in touch below or via our Social Media channels.
						</p>
						<form onSubmit={this.handleSubmit}>
							<div className={`form-group ${styles.group1}`}>
								<label hidden htmlFor="name">Name</label>
								<input type="text" name="name" className="form-control input-default" placeholder="Name" onChange={this.handleChange('name')}/>
							</div>
							<div className={`form-group ${styles.group1}`}>
								<label hidden htmlFor="email">Contact email</label>
								<input type="email" name="email" className="form-control input-default" placeholder="Contact email" onChange={this.handleChange('email')}/>
							</div>
							<div className={`form-group ${styles.group2}`}>
								<label hidden htmlFor="organisation">Organisation</label>
								<input type="text" name="organisation" className="form-control input-default" placeholder="Organisation" onChange={this.handleChange('organisation')}/>
							</div>
							<div className={`form-group ${styles.group2}`}>
								<label hidden htmlFor="message">Message</label>
								<textarea type="text" name="message" className="form-control input-default" placeholder="Message" onChange={this.handleChange('message')}/>
							</div>
							<input type="submit" className={`btn btn-default ${styles.group2}`} value="Submit"/>
						</form>
						<div className={styles.social}>
							<div>
								<a href="http://facebook.com/vision100it">
									<span className="fa fa-facebook fa-3x"/>
								</a>
							</div>
							<div>
								<a href="http://twitter.com/vision100it">
									<span className="fa fa-twitter fa-3x"/>
								</a>
							</div>
						</div>
					</section>
				</Element>
			</div>
		);
	}
}