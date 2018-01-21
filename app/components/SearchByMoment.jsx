import React, { Component } from 'react';

export default class SearchByMoment extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className ="search-by">
                <p className = "search-title">MOMENTS</p>
                <div className = "search-by-momentstags">
				{
					!this.props.hashtags ? '' : (this.props.hashtags.map((tag,i)=>{
						return (
							<div  className = "search-by-momentstag-item" key = {'search-moment' + i}>
								{tag}
							</div>
						);
					}))
				}
				</div>
            </div>
        );
    }
}

