import React from 'react';
import axios from 'axios';
import { Form, Col, Jumbotron, Container, Button } from 'react-bootstrap';

import TweetCard from './TweetCard';
import tweetData from '../../tweetData';
import TweetFeed from './TweetFeed';

class TweetSearch extends React.Component {
	constructor() {
		super();
		this.state = {
			tweetData: [],
			statuses: [],
			searchUser: '',
			searchTerm: '',
			result_type: '',
			token_type: '',
			access_token: ''
		};
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.getAuthToken = this.getAuthToken.bind(this);
	}

	getAuthToken() {
		axios
			.get('http://localhost:5000/api/tweets/token')
			.then((response) => {
				console.log(response);
				console.log(response.data);
				this.setState({
					token_type: response.data.token_type,
					access_token: response.data.access_token
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	componentDidMount() {
		this.getAuthToken();
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchTerm !== this.state.searchTerm || prevState.searchUser !== this.state.searchUser) {
			console.log('Search: ' + this.state.searchTerm);
			let config = {
				params: {
					searchTerm: this.state.searchTerm,
					searchUser: this.state.searchUser,
					result_type: this.state.result_type,
					type: this.state.token_type,
					token: this.state.access_token
				}
			};
			axios
				.get('http://localhost:5000/api/tweets/search', config)
				.then((response) => {
					console.log(response);
					// console.log(response.data);
					this.setState({
						statuses: response.data.statuses
					});
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}

	onFormSubmit(e) {
		e.preventDefault();
		const searchValue = e.target.searchTerm.value;
		const searchCategory = e.target.inlineFormCustomSelect.value;
		let response = [];
		if (searchCategory === 'username') {
			// response = tweetData.filter((tweet) => tweet.firstName.toLowerCase() === searchTerm.toLowerCase());
			this.setState({
				searchterm: '',
				searchUser: 'from%3A' + searchValue,
				result_type: 'recent'
			});
		} else if (searchCategory === 'keyword') {
			// tweetData.forEach((tweet) => {
			// 	if (tweet.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
			// 		response.push(tweet);
			// 	}
			// });
			this.setState({
				searchTerm: searchValue,
				searchUser: '',
				result_type: 'popular'
			});
		}
		// this.setState({
		// 	tweetData: response
		// });
		console.log(e.target.inlineFormCustomSelect.value);
	}

	render() {
		console.log(this.state.statuses);
		return (
			<div>
				<Jumbotron fluid className="d-flex justify-content-center">
					<Container className="d-flex flex-column justify-content-center align-items-center">
						<h1>Search Tweets</h1>
						<p>Filter through tweets by username or tweet keywords.</p>
					</Container>
				</Jumbotron>

				<div id="search-content" className="d-flex justify-content-center flex-column align-items-center">
					<div className="search-card card p-3 d-flex justify-content-center align-items-center">
						<Form onSubmit={this.onFormSubmit}>
							<Form.Row className="align-items-center">
								<Col xs="auto" className="my-1">
									<Form.Label className="mr-sm-2" htmlFor="inlineFormCustomSelect" srOnly>
										Preference
									</Form.Label>
									<Form.Control as="select" className="mr-sm-2" id="inlineFormCustomSelect" custom>
										<option value="username">Username</option>
										<option value="keyword">Keyword</option>
									</Form.Control>
								</Col>
								<Col className="my-1">
									<Form.Label htmlFor="inlineFormInputName" srOnly>
										Search
									</Form.Label>
									<div className="search">
										<Form.Control
											id="search-input"
											name="searchTerm"
											autoComplete="off"
											placeholder="Search for tweets"
										/>
										<span>
											<i className="fas fa-search" />
										</span>
									</div>
								</Col>
								<Col xs="auto" className="my-1">
									<Button type="submit">Search</Button>
								</Col>
							</Form.Row>
						</Form>
					</div>

					<TweetFeed tweetData={this.state.tweetData} statuses={this.state.statuses} />
				</div>
			</div>
		);
	}
}

export default TweetSearch;
