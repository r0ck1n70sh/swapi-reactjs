import axios from "axios";

const getLatestTweets = async () => {
	const url = "https://twitter-api-proxy-nodejs.herokuapp.com/search"
	let tweets = await axios({
		url: url,
		method: "post",
		data : {
			query: "star wars",
		}
	}).then((res) => {
		return res.data;
	}).then((res) => {
		return JSON.parse(res);
	}).then((res) => {
		return res["statuses"];
	})
	.catch((err) => {
		console.error(err);
	})

	return tweets
}

export {
	getLatestTweets
};
