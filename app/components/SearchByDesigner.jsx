import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

export default class SearchByDesigner extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className ="search-by">
                <div className = "search-by-designers">
				{
					!this.props.designers ? ( <div>{' '}</div> ) : (this.props.designers.map((designer,i)=>{
						return (
							<Link to={`/designer/${designer.url}`} key = {'search-designer' + i} className = "search-by-designer-item" key={i}>
								<div className = "search-by-imgcontainer">
									<img src={designer.logo}/>
								</div>
								<div className="search-by-img-intro" >{designer.locname}</div>
							</Link>
						);
					}))
				}
                </div>
            </div>
        );
    }
}

