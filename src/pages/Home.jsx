import React, { useEffect, useState } from 'react';
import { getLatestTweets } from '../packages/twitterApi';

import { Tweet } from 'react-twitter-widgets';

const Home = (props) => {
	const [ tweets, setTweets ] = useState([]);
	let tweetList = [];

	useEffect(() => {
		(async function(){
			setTweets( await getLatestTweets() );
			tweetList = await tweets.map((element, idx) => {
				return (
					<div key={ idx }>
						<Tweet tweetId={ element.id } />
					</div>
				)
			})
		})();

	}, [])
    return (
        <div>
            { tweetList }
        </div>
    );
}

export default Home;