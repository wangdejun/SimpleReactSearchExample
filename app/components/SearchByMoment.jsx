import React, { Component } from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';

export default class SearchByMoment extends Component {
    constructor(){
        super();
    }
    render() {
        return(
            <div className ="search-by">
                <p className = "search-title">MOMENTS</p>
                <div className = "search-by-momentstags">
				{
					!this.props.hashtags ? ( <div>{' '}</div> ) : (this.props.hashtags.map((tag,i)=>{
						return (
							<Link to={`/moment/${tag}`} key = {'search-moment-link' + i}>
							<div  className = "search-by-momentstag-item" key = {'search-moment' + i}>
								{tag}
							</div>
							</Link>
						);
					}))
				}
				</div>
            </div>
        );
    }
}

