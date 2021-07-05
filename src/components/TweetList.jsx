import React from 'react';

import { Tweet } from 'react-twitter-widgets';

const TweetList = (props) => {
	const tweetData = props.data;
	let tweetList = tweetData.map((element) => {
			return (
				<div key={ element["id"] }>
					<Tweet tweetId={ element["id_str"] }/>
				</div>
			)
		});
	
	return (
		<div>
			{ tweetList }
		</div>
	)
}

export default TweetList;