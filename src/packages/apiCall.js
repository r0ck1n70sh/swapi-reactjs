import axios from 'axios';

const getPeopleFromServer = async () => {
    const url = 'https://swapi.dev/api/people';

    let arrayOfPeople = await axios.get(url)
    .then((res) => {
        return res['data']['results'];
    })
    .then((res) => {
        return res;
    })
    .catch((err) => {
        console.error(err);
    });

    return arrayOfPeople;
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
    getPeopleFromServer,
    getAttributeFromURL
};