import React, { useEffect, useState } from 'react';
import { getLatestTweets } from '../packages/twitterApi';

import TweetList from '../components/TweetList';

const Home = (props) => {
	const [ tweets, setTweets ] = useState([]);

	useEffect(() => {
		(async function(){
			setTweets( await getLatestTweets() );
		})();

	}, [])
    return (
        <div>
			<TweetList data={ tweets } />
        </div>
    );
}

export default Home;