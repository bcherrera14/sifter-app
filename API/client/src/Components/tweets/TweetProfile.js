import React from 'react';
import { Card, Button } from 'react-bootstrap';

const TweetProfile = ({ modalShow }) => {
	return (
		<Card style={{ width: '20rem' }} className="m-5">
			<Card.Body className="d-flex flex-column">
				<Card.Title className="align-self-center">Bryan Herrera</Card.Title>
				<img
					src="https://avatars.githubusercontent.com/u/11397332?s=460&u=3f3c56d4899795a3665aadfc798f0a5eaba4bfd5&v=4"
					className="rounded-circle profile-img align-self-center p-3"
					alt="profile"
				/>
				<Button variant="primary" className="ml-auto mr-auto mt-2" onClick={modalShow}>
					View Tweet
				</Button>
			</Card.Body>
		</Card>
	);
};

export default TweetProfile;
