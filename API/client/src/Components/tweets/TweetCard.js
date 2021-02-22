import React from 'react';
import { Form, Col, Card, Button } from 'react-bootstrap';

const TweetCard = ({ tweet }) => {
	return (
		<Card style={{ width: '50rem' }}>
			<Card.Body>
				<div className="d-flex align-items-center">
					<div className="mr-2">
						<img
							src="https://avatars.githubusercontent.com/u/11397332?s=460&u=3f3c56d4899795a3665aadfc798f0a5eaba4bfd5&v=4"
							className="rounded-circle card-img"
							alt="profile"
						/>
					</div>
					<div>
						<Card.Title>
							{tweet.firstName} {tweet.lastName}
						</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">{tweet.username}</Card.Subtitle>
					</div>
					<div className="ml-auto mb-4">
						<Card.Subtitle className="text-muted">{tweet.date}</Card.Subtitle>
					</div>
				</div>
				<Card.Text className="pt-3">{tweet.textContent}</Card.Text>

				<i className="far fa-heart p-1" />
				<span>{tweet.likes}</span>
				<i className="fas fa-retweet p-1" />
				<span>{tweet.retweets}</span>
			</Card.Body>
		</Card>
	);
};

export default TweetCard;
