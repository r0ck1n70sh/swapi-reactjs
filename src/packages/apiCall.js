import axios from 'axios';

const getAllFromServer = async ({ context, page }) => {
    const url = `https://swapi.dev/api/${ context }?page=${ page }`;

    let arrayOfAll = await axios.get(url)
	.then((res) => {
		return res["data"];
	})
    .then((data) => {
		let next = (data["next"]) ? true : false;  
		let prev = (data["previous"]) ? true : false;
        return {
			dataList: data["results"],
			next: next,
			prev: prev,	
		};
    })
    .then((res) => {
        return res;
    })
    .catch((err) => {
        console.error(err);
    });

    return arrayOfAll;
}

const getAttributeFromURL = async (url, attribute) => {
    let result = await axios.get(url)
    .then((res) => {
        return res['data'][attribute];
    })
    .catch((err) => {
        console.error(err);
    });

    return result;
}

export { 
    getAllFromServer,
    getAttributeFromURL
};