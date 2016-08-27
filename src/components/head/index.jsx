import React from 'react';

export const Head = ({title}) => (
	<head>
		<meta charSet="utf-8"/>
		<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<title>{title}</title>
		<link rel="stylesheet" type="text/css" href="/main.css"/>
		<link rel="shortcut icon" href="http://vision100.org/sites/vision100.org/files/v100it-logo-favicon.png"/>
	</head>
);

Head.propTypes = {
	title: React.PropTypes.string.isRequired
};