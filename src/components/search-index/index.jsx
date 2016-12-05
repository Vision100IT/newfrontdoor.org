import React from 'react';
import lunr from 'lunr';

const searchIndex = WrappedComponent => {
	class SearchIndexWrapper extends React.Component {
		constructor() {
			super();

			this.searchIndex = this.searchIndex.bind(this);
		}

		get index() {
			return new Promise(resolve => {
				if (self.__searchIndex) {
					resolve({
						index: self.__searchIndex,
						data: self.__searchData
					});
				} else {
					require.ensure([], () => {
						self.__searchIndex = lunr.Index.load(require('../../search/search-index.json'));
						self.__searchData = require('../../search/search-data.json');

						resolve({
							index: self.__searchIndex,
							data: self.__searchData
						});
					});
				}
			});
		}

		searchIndex(searchTerm, slice) {
			return this.index.then(({index, data}) => {
				const res = index.search(searchTerm);

				let searchResults = res.map(result => data.items.find(item => item.id === result.ref)).map(result => {
					// HACK HACK HACK
					const {id, ...all} = result;
					return {id: id.replace('content/', ''), ...all};
				});

				if (slice) {
					searchResults = searchResults.slice(0, slice);
				}

				if (searchResults.length === 0) {
					searchResults.push({
						id: '#',
						title: 'No results found'
					});
				}

				return searchResults;
			});
		}

		render() {
			return React.createElement(WrappedComponent, {
				...this.props,
				searchIndex: this.searchIndex
			});
		}
	}

	return SearchIndexWrapper;
};

export default searchIndex;
