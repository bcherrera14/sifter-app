import React, { useState } from 'react';
import TweetProfile from './TweetProfile';
import TweetModal from './TweetModal';
import { Jumbotron, Container } from 'react-bootstrap';

const TweetFavorites = ({ auth }) => {
	const [ modalShow, setModalShow ] = useState(false);

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
					<TweetProfile auth={auth} username="therock" modalShow={() => setModalShow(true)} />
					<TweetProfile auth={auth} username="elonmusk" modalShow={() => setModalShow(true)} />
					<TweetProfile auth={auth} username="billgates" modalShow={() => setModalShow(true)} />
				</div>
				<div className="d-flex justify-content-around">
					<TweetProfile auth={auth} username="tesla" modalShow={() => setModalShow(true)} />
					<TweetProfile auth={auth} username="rivian" modalShow={() => setModalShow(true)} />
				</div>
				<TweetModal show={modalShow} onHide={() => setModalShow(false)} />
			</div>
		</div>
	);
};

export default TweetFavorites;
