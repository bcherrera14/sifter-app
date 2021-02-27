import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import TweetLanding from './tweets/TweetLanding';
import TweetFavorites from './tweets/TweetFavorites';
import TweetSearch from './tweets/TweetSearch';
import Header from './Header';
import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: 'bgQLtlkwTCJRAJUcsXmCNmSTA',
			password: '2LpT3c5LWx7isQrlGYkytbzLdauupz0MdVdYkKNRAwpanzlPcS',
			token_type: '',
			access_token: ''
		};
	}

	componentDidMount() {
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

	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header />
						<Route path="/" exact component={TweetLanding} />
						<Route path="/tweet/search" exact component={TweetSearch} />
						<Route path="/tweet/favorites" exact component={TweetFavorites} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
