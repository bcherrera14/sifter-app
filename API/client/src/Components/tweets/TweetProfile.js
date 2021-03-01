import React from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

class TweetProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			name: '',
			screenName: '',
			profileImage: '',
			token_type: '',
			access_token: ''
		};
		this.getUserData = this.getUserData.bind(this);
		this.getAuthToken = this.getAuthToken.bind(this);
		this.getRandomStatus = this.getRandomStatus.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	getAuthToken() {
		axios
			.get('http://localhost:5000/api/tweets/token')
			.then((response) => {
				this.setState({
					token_type: response.data.token_type,
					access_token: response.data.access_token,
					username: this.props.username
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	componentDidMount() {
		this.getAuthToken();
		// console.log(this.props);
	}

	getUserData() {
		let config = {
			params: {
				screenName: this.props.username,
				type: this.state.token_type,
				token: this.state.access_token
			}
		};
		axios
			// .get('http://localhost:5000/api/tweets/search', config)
			.get('http://localhost:5000/api/tweets/users', config)
			.then((response) => {
				console.log(response.data);
				const userData = response.data;
				this.setState({
					name: userData.name,
					screenName: userData.screen_name,
					profileImage: userData.profile_image_url.replace('normal', '400x400')
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	getRandomStatus() {
		let config = {
			params: {
				searchTerm: 'from%3A' + this.props.username,
				result_type: '',
				type: this.state.token_type,
				token: this.state.access_token
			}
		};
		axios
			.get('http://localhost:5000/api/tweets/search', config)
			.then((response) => {
				const numStatuses = response.data.statuses.length;
				const index = Math.floor(Math.random() * numStatuses);
				console.log(response.data.statuses[index]);
				this.setState({
					randomTweet: response.data.statuses[index]
				});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	handleClick() {
		this.props.modalShow();
		this.props.getTweet(this.state.randomTweet);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.username !== this.state.username) {
			this.getUserData();
			this.getRandomStatus();
		}
	}

	render() {
		return (
			<Card style={{ width: '20rem' }} className="m-5">
				<Card.Body className="d-flex flex-column">
					<Card.Title className="align-self-center">{this.state.name}</Card.Title>
					<Card.Subtitle className="align-self-center mb-2 text-muted">
						@{this.state.screenName}
					</Card.Subtitle>
					<img
						src={this.state.profileImage}
						className="rounded-circle profile-img align-self-center p-3"
						alt="profile"
					/>
					<Button variant="primary" className="ml-auto mr-auto mt-2" onClick={() => this.handleClick()}>
						View Tweet
					</Button>
				</Card.Body>
			</Card>
		);
	}
}

export default TweetProfile;
