import axios from "axios";
import { BEARER_TOKEN } from "../assest/keys";

const getLatestTweets = async () => {
	const url = "https://api.twitter.com/2/tweets/search/recent"
	let tweets = await axios({
		url: url,
		method: "get",
		headers : {
			Authorization: `Bearer ${ BEARER_TOKEN }`
		},
		params : {
			query: "star wars",
		}
	}).then((res) => {
		return res.data.data;
	}).catch((err) => {
		console.error(err);
	})

	return tweets
}

export {
	getLatestTweets
};
