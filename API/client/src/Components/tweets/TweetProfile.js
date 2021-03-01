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

	componentDidUpdate(prevProps, prevState) {
		if (prevState.username !== this.state.username) {
			let config = {
				params: {
					searchTerm: 'from%3A' + this.props.username,
					result_type: 'recent',
					type: this.state.token_type,
					token: this.state.access_token
				}
			};
			axios
				// .get('http://localhost:5000/api/tweets/search', config)
				.get('http://localhost:5000/api/tweets/users', config)
				.then((response) => {
					console.log(response.data.statuses[0]);
					const userData = response.data.statuses[0].user;
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
					<Button variant="primary" className="ml-auto mr-auto mt-2" onClick={this.props.modalShow}>
						View Tweet
					</Button>
				</Card.Body>
			</Card>
		);
	}
}

export default TweetProfile;
