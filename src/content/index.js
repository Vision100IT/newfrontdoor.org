import React from 'react';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import boardMembers from './board-members';
import teamMembers from './team-members';

export default {
	boardMembers,
	teamMembers,
	hero: {
		tagline: '# Can a church really do IT _effectively?_\n# Come on, we’ll show you'
	},
	banners: [{
		display: 'visible',
		type: 'announcement',
		text: 'Testing the announcement banner'
	}, {
		display: 'visible',
		type: 'warning',
		text: 'Testing the warning banner'
	}],
	productcards: [{
		number: 'one',
		background: 'black',
		image: 'elvanto.png',
		imagepadding: '10',
		text: 'Have you got started with Elvanto yet?'
	}, {
		number: 'two',
		background: 'white',
		image: 'soul.jpeg',
		imagepadding: '10',
		text: 'Let us help you get the most out of your website'
	}, {
		number: 'three',
		background: 'black',
		image: 'sparkleshare.png',
		imagepadding: '10',
		text: 'Dropbox, google drive & USB sticks making you nuts?'
	}, {
		number: 'four',
		background: 'white',
		image: 'close-image.jpeg',
		imagepadding: '0',
		text: 'Thinking of a refresh? Read our recommendations'
	}],
	mainmenu: {
		links: [{
			text: 'How we<br />can help you',
			to: '#how'
		}, {
			text: 'Who are<br />New Front Door?',
			to: '#who'
		}, {
			text: 'Philosophy<br />+ Tools',
			to: '#tools'
		}, {
			text: 'Events +<br />Training',
			to: '#events'
		}, {
			text: 'Pricing',
			to: '#pricing'
		}, {
			text: 'Come<br />on board',
			to: '#join'
		}]
	},
	clientmenu: {
		links: [{
			text: 'Feature<br />Request',
			to: '/feature'
		}, {
			text: 'Support<br />Request',
			to: '/support'
		}, {
			text: 'About Us',
			to: '/about'
		}]
	},
	mobilemenu: {
		primary: [{
			text: 'News',
			to: '/client'
		}, {
			text: 'Visitor',
			to: '#how'
		}],
		secondary: [{
			text: 'Search',
			to: '#'
		}, {
			text: 'News',
			to: '/client'
		}],
		teriary: [{
			text: 'Search',
			to: '#'
		}, {
			text: 'Contact',
			to: '/contact'
		}]
	},
	footerLinks: [{
		heading: 'Our',
		links: [{
			text: 'Philosophy + Tools',
			to: '/#tools'
		}, {
			text: 'Pitch',
			to: '/#how'
		}, {
			text: 'Events',
			to: '/#events'
		}, {
			text: 'Pricing',
			to: '/#pricing'
		}, {
			text: 'Consultation',
			to: '/consultation'
		}]
	}, {
		heading: 'About Us',
		links: [{
			text: 'Mission + Vision',
			to: '/about#mission'
		}, {
			text: 'History',
			to: '/about#history'
		}, {
			text: 'Team Members',
			to: '/about#team'
		}, {
			text: 'Privacy Policy',
			to: '/documentation/privacy'
		}]
	}, {
		heading: 'Support',
		links: [{
			text: 'Support Request',
			to: '/support'
		}, {
			text: 'Feature Request',
			to: '/feature'
		}, {
			text: 'Contact Us',
			to: '/contact'
		}]
	}, {
		heading: 'Connect',
		links: [{
			text: 'Podcast',
			target: 'https://podcasts.apple.com/au/podcast/new-front-door-the-church-it-guild/id1477414931'
		}, {
			text: 'Mailing List',
			to: '/contact'
		}, {
			children: (<FaFacebookSquare/>),
			target: 'https://www.facebook.com/NewFrontDoorIT/'
		}, {
			children: (<FaTwitterSquare/>),
			target: 'https://twitter.com/NewFrontDoorIT'
		}]
	}, {
		links: []
	}]
};
