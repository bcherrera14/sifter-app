import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import TweetCard from './TweetCard';
import tweetData from '../../tweetData';

function TweetModal(props) {
	return (
		<Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
			<Modal.Body>
				<TweetCard tweet={tweetData[0]} />
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default TweetModal;
