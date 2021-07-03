const getImageURLFromItemURL = (itemURL) => {
	let imageURL = itemURL.replace("https://swapi.dev/api/", '');
	imageURL = imageURL.slice(0, -1);

	imageURL = imageURL.replace("people", "characters")

	return `https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img/${imageURL}.jpg`;
}

module.exports = {
	getImageURLFromItemURL
}