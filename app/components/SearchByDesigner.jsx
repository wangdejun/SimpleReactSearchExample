import React, { Component } from 'react';

export default class SearchByDesigner extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className ="search-by">
                <div className = "search-by-designers">
				{
					!this.props.designers ? '' : (this.props.designers.map((designer,i)=>{
						return (
							<div key={'search-user' + i}>
								<div className = "search-by-imgcontainer">
									<img src={designer.logo}/>
								</div>
								<div className="search-by-img-intro" >{designer.locname}</div>
							</div>
						);
					}))
				}
                </div>
            </div>
        );
    }
}

