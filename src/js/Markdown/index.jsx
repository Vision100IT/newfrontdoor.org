import React from 'react';
import remark from 'remark';
import {isUndefined} from 'lodash';
import slug from 'remark-slug';
import ghSlugs from 'github-slugger';
import remarkReact from 'remark-react';
import {Link, Element} from 'react-scroll';
import toString from 'mdast-util-to-string';
import toc from './toc';

const remarkHeading = (component, boundProps = {}) => {
	return React.createClass({
		propTypes() {
			return {
				id: React.PropTypes.string,
				children: React.PropTypes.children
			};
		},
		render() {
			const slugs = ghSlugs();
			const props = {...this.props, ...boundProps};
			return (<Element name={`#${slugs.slug(this.props.children.props.children)}`}>
				{React.createElement(component, {...props}, this.props.children)}
			</Element>);
		}
	});
};

const RemakLink = props => {
	return (
		<Link to={props.href} {...props}>
			{props.children}
		</Link>
	);
};

RemakLink.defaultProps = {
	spy: true,
	smooth: true,
	offset: -64,
	duration: 500
};

RemakLink.propTypes = {
	href: React.PropTypes.string,
	children: React.PropTypes.node
};

export const remarkConfigDefault = {
	commonmark: true,
	paragraphBlockquotes: false,
	remarkReactComponents: {
		a: RemakLink,
		// blockquote: CombinedBlockQuote,
		// code: CodePane,
		// del: spectacleComponent(S, {type: 'strikethrough'}),
		// em: spectacleComponent(S, {type: 'italic'}),
		h1: remarkHeading('H1'),
		h2: remarkHeading('H2'),
		h3: remarkHeading('H3'),
		h4: remarkHeading('H4'),
		h5: remarkHeading('H5'),
		h6: remarkHeading('H6')
		// img: Image,
		// inlineCode: Code,
		// li: ListItem,
		// p: Text,
		// strong: spectacleComponent(S, {type: 'bold'}),
		// ul: List
	}
};

export const Markdown = ({style, source, children, remarkConfig}) => {
	const content = (isUndefined(source) || source === '') ? children : source;

	return (
		<div style={style}>
			{remark().use(slug).use(remarkReact, remarkConfig).process(content)}
		</div>
	);
};

Markdown.propTypes = {
	style: React.PropTypes.object,
	children: React.PropTypes.node,
	source: React.PropTypes.string,
	remarkConfig: React.PropTypes.object
};

Markdown.defaultProps = {
	style: {},
	source: '',
	remarkConfig: remarkConfigDefault
};

export const Toc = ({style, source, children, remarkConfig}) => {
	const content = (isUndefined(source) || source === '') ? children : source;
	const tocOut = remark().use(toc, {tight: true}).process(content);

	return (
		<Markdown style={style} remarkConfig={remarkConfig}>
			{tocOut}
		</Markdown>
	);
};

Toc.propTypes = {
	style: React.PropTypes.object,
	children: React.PropTypes.node,
	source: React.PropTypes.string,
	remarkConfig: React.PropTypes.object
};

Toc.defaultProps = {
	style: {},
	source: '',
	remarkConfig: remarkConfigDefault
};