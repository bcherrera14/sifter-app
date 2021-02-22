import React from 'react';
import { Form, Col, Jumbotron, Container, Button } from 'react-bootstrap';

import TweetCard from './TweetCard';
import tweetData from '../../tweetData';
import TweetFeed from './TweetFeed';

class TweetSearch extends React.Component {
	constructor() {
		super();
		this.state = { tweetData: [] };
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	componentDidMount() {
		this.setState({ tweetData });
	}

	onFormSubmit(e) {
		e.preventDefault();
		const searchTerm = e.target.searchTerm.value;
		const searchCategory = e.target.inlineFormCustomSelect.value;
		let response = [];
		if (searchCategory === 'username') {
			response = tweetData.filter((tweet) => tweet.firstName.toLowerCase() === searchTerm.toLowerCase());
		} else if (searchCategory === 'keyword') {
			tweetData.forEach((tweet) => {
				if (tweet.textContent.toLowerCase().includes(searchTerm.toLowerCase())) {
					response.push(tweet);
				}
			});
		}
		this.setState({
			tweetData: response
		});
		console.log(e.target.inlineFormCustomSelect.value);
	}

	render() {
		console.log(this.state.tweetData);
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

					<TweetFeed tweetData={this.state.tweetData} />
				</div>
			</div>
		);
	}
}

export default TweetSearch;
