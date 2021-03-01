import React from 'react';
import { Form, Col, Card, Button } from 'react-bootstrap';

const TweetCard = ({ tweet }) => {
	const dateArray = tweet.created_at.split(' ');
	const date = dateArray[0] + ' ' + dateArray[1] + ' ' + dateArray[2];
	return (
		<Card style={{ width: '50rem' }}>
			<Card.Body>
				<div className="d-flex align-items-center">
					<div className="mr-2">
						<img src={tweet.user.profile_image_url} className="rounded-circle card-img" alt="profile" />
					</div>
					<div>
						<Card.Title>{tweet.user.name}</Card.Title>
						<Card.Subtitle className="mb-2 text-muted">@{tweet.user.screen_name}</Card.Subtitle>
					</div>
					<div className="ml-auto mb-4">
						<Card.Subtitle className="text-muted">{date}</Card.Subtitle>
					</div>
				</div>
				<Card.Text className="pt-3">{tweet.full_text}</Card.Text>

				<i className="far fa-heart p-1" />
				<span>{tweet.favorite_count}</span>
				<i className="fas fa-retweet p-1" />
				<span>{tweet.retweet_count}</span>
			</Card.Body>
		</Card>
	);
};

export default TweetCard;
