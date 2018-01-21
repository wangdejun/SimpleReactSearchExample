import React, { Component } from 'react';

export default class SearchByMerchant extends Component {
    constructor() {
        super();
    }
    render() {
        return (
			<div className ="search-by">
				<div className = "search-by-merchants">
				{
					!this.props.merchants ? ( <div>{' '}</div> ) : (this.props.merchants.map((merchant,i)=>{
						return (
						<div>
							<div key={i} className = "search-by-merchant-item">
								<div className = "search-by-imgcontainer">
									<img src={merchant.logo} />
								</div>
								<div className="search-by-img-intro">{merchant.locname}</div>
							</div>
						</div>
						);
					}))
				}
				</div>
			</div>
        );
    }
}

