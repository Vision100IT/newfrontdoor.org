import React from 'react';
import {Element} from 'react-scroll';

import {Hero} from '../Hero';
import {Index} from './Index';
import content from '../content';

import first from '../content/featured/first.html';
import second from '../content/featured/second.html';
import third from '../content/featured/third.html';
import fourth from '../content/featured/fourth.html';
import fifth from '../content/featured/fifth.html';
import sixth from '../content/featured/sixth.html';
import video from '../../elements/clip2.mp4';

export class Main extends React.Component {
	rawFirst() {
		return {__html: first};
	}
	rawSecond() {
		return {__html: second};
	}
	rawThird() {
		return {__html: third};
	}
	rawFourth() {
		return {__html: fourth};
	}
	rawFifth() {
		return {__html: fifth};
	}
	rawSixth() {
		return {__html: sixth};
	}

	render() {
		return (
			<Index headerSize="full">
				<Hero>
					<div dangerouslySetInnerHTML={{__html: content.hero.tagline}}></div>
				</Hero>
				<main role="main">
					<Element name="how" className="featured-first featured-light" >
						<div className="site-wrapper site-wrapper-padding">
							<section dangerouslySetInnerHTML={this.rawFirst()}></section>
						</div>
					</Element>
					<Element name="who" className="featured-second featured-dark">
						<div className="site-wrapper site-wrapper-padding">
							<section dangerouslySetInnerHTML={this.rawSecond()}></section>
						</div>
					</Element>
					<Element name="tools" className="featured-third featured-light">
						<div className="site-wrapper site-wrapper-padding">
							<section dangerouslySetInnerHTML={this.rawThird()}></section>
						</div>
					</Element>
					<Element name="events" className="featured-fourth featured-dark">
						<div className="site-wrapper site-wrapper-padding">
							<section dangerouslySetInnerHTML={this.rawFourth()}></section>
						</div>
					</Element>
					<Element name="pricing" className="featured-fifth featured-light">
						<div className="site-wrapper site-wrapper-padding">
							<section dangerouslySetInnerHTML={this.rawFifth()}></section>
						</div>
					</Element>
					<Element name="join" className="featured-sixth">
						<video autoPlay loop id="bgvid">
							<source src={video} type="video/mp4"></source>
						</video>
						<div className="close-content">
							<section dangerouslySetInnerHTML={this.rawSixth()}></section>
						</div>
					</Element>
				</main>
			</Index>
		);
	}
}
