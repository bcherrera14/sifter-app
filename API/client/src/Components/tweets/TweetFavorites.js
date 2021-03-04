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
		this.getRandomTweet = this.getRandomTweet.bind(this);
	}

	setModalShow(bool) {
		this.setState({
			modalShow: bool
		});
	}

	getRandomTweet(tweets) {
		const numStatuses = tweets.length;
		const index = Math.floor(Math.random() * numStatuses);
		this.setState({
			randomTweet: tweets[index]
		});
	}
	Random;
	render() {
		return (
			<div>
				<Jumbotron fluid className="d-flex justify-content-center">
					<Container className="d-flex flex-column justify-content-center align-items-center">
						<h1>Popular Profiles</h1>
						<p>View tweets from these popular profiles.</p>
					</Container>
				</Jumbotron>
				<div className="profile-grid d-flex flex-column align-items-center">
					{/* <h1 className="display-3">Trending Profiles</h1> */}

					<div className="d-flex justify-content-around ">
						<TweetProfile
							auth={this.props.auth}
							username="therock"
							getRandomTweet={this.getRandomTweet}
							modalShow={() => this.setModalShow(true)}
						/>
						<TweetProfile
							auth={this.props.auth}
							username="elonmusk"
							getRandomTweet={this.getRandomTweet}
							modalShow={() => this.setModalShow(true)}
						/>
						<TweetProfile
							auth={this.props.auth}
							username="billgates"
							getRandomTweet={this.getRandomTweet}
							modalShow={() => this.setModalShow(true)}
						/>
					</div>
					<div className="d-flex justify-content-around">
						<TweetProfile
							auth={this.props.auth}
							username="verge"
							getRandomTweet={this.getRandomTweet}
							modalShow={() => this.setModalShow(true)}
						/>
						<TweetProfile
							auth={this.props.auth}
							username="engadget"
							getRandomTweet={this.getRandomTweet}
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
