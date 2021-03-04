import React from 'react';
import { Card } from 'react-bootstrap';

const TweetCard = ({ tweet }) => {
	const dateArray = tweet.created_at.split(' ');
	const date = dateArray[0] + ' ' + dateArray[1] + ' ' + dateArray[2];
	const media_url = tweet.entities.media ? tweet.entities.media[0].media_url : '/';
	const mediaClass = media_url === '/' ? 'hide' : 'media-image align-self-center';
	// let tweetText = '';
	// const hyperlink = tweet.entities.urls ? tweet.entities.urls[0].url : '/';
	// const atagClass = hyperlink === '/' ? 'hide' : 'atag';
	// if (tweet.entities.media) {
	// 	tweetText = tweet.full_text.replace(tweet.entities.media[0].url, '');

	// 	console.log(tweet.entities.media[0].url);
	// }
	// else if (tweet.entities.urls && tweet.entities.urls[0] !== undefined) {
	// 	tweetText = tweet.full_text.replace(tweet.entities.urls[0].url, '');
	// 	console.log(tweet.entities.urls[0].url);
	// } else {
	// 	tweetText = tweet.full_text;
	// }
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
				<Card.Text id="text-content" className="pt-3">
					{tweet.full_text}
					{/* {tweetText} */}
					{/* <a className={atagClass} href={hyperlink}>
						{hyperlink}
					</a> */}
				</Card.Text>
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
