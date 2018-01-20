import React, { Component } from 'react';
import { render } from 'react-dom';
// import { Link } from 'react-router';
// import './css/Search.scss';
import SearchByDesigner from '../components/SearchByDesigner';
import SearchByMerchant from '../components/SearchByMerchant';
import SearchByMoment from '../components/SearchByMoment';
import SearchByUser from '../components/SearchByUser';
import SearchByWord from '../components/SearchByWord';

class Search extends Component {
	constructor() {
		super();
		this.state = {
			words: [],
			hashtags: [],
			users: [],
			designers: [],
			merchants: [],
			value: ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	fetchInputValue(inputValue) {
		fetch('https://modesens.com/hint2/?txt=' + inputValue, {'method': 'GET'})
		.then((response)=>response.json())
		.then((responseJson)=>{
			this.setState({
				users: responseJson.rhints.users,
				designers: responseJson.rhints.designers,
				merchants: responseJson.rhints.merchants,
				hashtags: responseJson.rhints.hashtags,
				words: responseJson.rhints.words
			});
		})
		.catch((error)=>{ console.error(error);});
	}

	handleChange(event) {
		this.setState(
			{ value: event.target.value },
			() => {
				this.fetchInputValue(this.state.value);
			}
		);
	}

	componentWillMount() {
		this.fetchInputValue(this.state.value);
	}

    render() {
        return (
           <div className = "search">
				<div className = "search-header-input">
					<input
						type="search"
						value={this.state.value}
						onChange={ e => this.handleChange(e)}
						onSubmit={ e => this.handleChange(e)}
						ref="searchValue"
						placeholder="请输入关键词，话题，URL进行搜索"
					/>

				</div>
				<div className = "search-result-container">
					<SearchByWord words = {this.state.words} />
					<SearchByDesigner designers={this.state.designers}/>
					<SearchByUser users = {this.state.users}/>
					<SearchByMoment hashtags = {this.state.hashtags}/>
					<SearchByMerchant merchants = {this.state.merchants}/>
				</div>
           </div>
        );
    }
}

export default Search;
