import React, { Component } from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';

export default class SearchByUser extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className ="search-by">
                <p className = "search-title">USER</p>
                <div className = "search-by-users">
				{
					!this.props.users ? ( <div>{' '}</div> ) : (this.props.users.map((user,i)=>{
						return (
							<Link to={`/closet/${user.username}/${user.uid}`} key = {'search-user' + i} className = "search-by-user-item">
							<div className = "search-by-imgcontainer-user">
								<p className="icon-container">
								<img className="icon" src={user.icon + 's'}/>
								<img className="icon-back" src={user.icon + 's'}/>
								</p>
							</div>
								<div className="search-by-img-intro">
									{user.username}
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

