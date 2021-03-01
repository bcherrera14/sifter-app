import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import TweetCard from './TweetCard';
import tweetData from '../../tweetData';

function TweetModal(props) {
	// console.log(props);
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body>
				<TweetCard tweet={props.tweet} />
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default TweetModal;
