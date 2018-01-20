import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';

export default class SearchByWord extends Component {
    constructor() {
        super();
    }
    render() {
        return (
			<div className ="search-by">
				<p className = "search-title">Search Products by Keywords</p>
				<div className = "search-by-words">
				{
					!(this.props.words) ? ( <div>{' '}</div> ) : (this.props.words.map((word, i)=>{
						return (
							<div key={'seachword' + i } className = "search-by-word-item">{word}</div>
						);
					}))
				}
				</div>
			</div>
        );
    }
}

