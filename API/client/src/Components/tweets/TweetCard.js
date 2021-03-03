import React from 'react';
import { Form, Col, Card, Button } from 'react-bootstrap';

const TweetCard = ({ tweet }) => {
	const dateArray = tweet.created_at.split(' ');
	const date = dateArray[0] + ' ' + dateArray[1] + ' ' + dateArray[2];
	const media_url = tweet.entities.media ? tweet.entities.media[0].media_url : '/';
	const mediaClass = media_url === '/' ? 'hide' : 'media-image align-self-center';
	// const link_url = tweet.entities.urls ? tweet.entities.urls[0].url : '/';
	// const linkClass = link_url === '/' ? 'hide' : 'embed-responsive embed-responsive-21by9';
	// console.log(tweet.entities.urls[0].url);
	return (
		<Card style={{ width: '40rem' }}>
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
				<div className="d-flex flex-column">
					<img src={media_url} className={mediaClass} alt="media" />
					<div className="tweet-stats">
						<i className="far fa-heart p-1" />
						<span>{tweet.favorite_count}</span>
						<i className="fas fa-retweet p-1" />
						<span>{tweet.retweet_count}</span>
					</div>
				</div>
			</Card.Body>
		</Card>
	);
};

export default TweetCard;
