import React from 'react';
import TweetCard from './TweetCard';

const TweetFeed = ({ tweetData }) => {
	console.log(tweetData);
	const tweetCards = tweetData.map((tweet) => {
		return <TweetCard key={tweet.id} tweet={tweet} />;
	});
	return <div className="card-grid d-flex flex-column">{tweetCards}</div>;
};

export default TweetFeed;
