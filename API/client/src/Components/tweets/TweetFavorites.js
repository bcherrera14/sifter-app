import React, { useState } from 'react';
import TweetProfile from './TweetProfile';
import TweetModal from './TweetModal';
import { Jumbotron, Container } from 'react-bootstrap';

class TweetFavorites extends React.Component {
	// const [ modalShow, setModalShow ] = useState(false);
	// const [ randomTweet, setRandomTweet ] = useState({});
	constructor(props) {
		super(props);
		this.state = {
			modalShow: false,
			randomTweet: null
		};
		this.setModalShow = this.setModalShow.bind(this);
		this.getTweet = this.getTweet.bind(this);
	}

	setModalShow(bool) {
		this.setState({
			modalShow: bool
		});
	}

	getTweet(tweet) {
		// setRandomTweet(tweet);
		console.log(tweet);
		this.setState({
			randomTweet: tweet
		});
	}
	render() {
		return (
			<div>
				<Jumbotron fluid className="d-flex justify-content-center">
					<Container className="d-flex flex-column justify-content-center align-items-center">
						<h1>Trending Profiles</h1>
						<p>Check out a spontaneous tweet from these trending profiles.</p>
					</Container>
				</Jumbotron>
				<div className="profile-grid d-flex flex-column align-items-center">
					{/* <h1 className="display-3">Trending Profiles</h1> */}

					<div className="d-flex justify-content-around ">
						<TweetProfile
							auth={this.props.auth}
							username="therock"
							getTweet={this.getTweet}
							modalShow={() => this.setModalShow(true)}
						/>
						<TweetProfile
							auth={this.props.auth}
							username="elonmusk"
							getTweet={this.getTweet}
							modalShow={() => this.setModalShow(true)}
						/>
						<TweetProfile
							auth={this.props.auth}
							username="billgates"
							getTweet={this.getTweet}
							modalShow={() => this.setModalShow(true)}
						/>
					</div>
					<div className="d-flex justify-content-around">
						<TweetProfile
							auth={this.props.auth}
							username="tesla"
							getTweet={this.getTweet}
							modalShow={() => this.setModalShow(true)}
						/>
						<TweetProfile
							auth={this.props.auth}
							username="rivian"
							getTweet={this.getTweet}
							modalShow={() => this.setModalShow(true)}
						/>
					</div>
					<TweetModal
						tweet={this.state.randomTweet}
						show={this.state.modalShow}
						onHide={() => this.setModalShow(false)}
					/>
				</div>
			</div>
		);
	}
}

export default TweetFavorites;
