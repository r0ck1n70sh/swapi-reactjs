import axios from 'axios';

const getAllFromServer = async (property) => {
    const url = `https://swapi.dev/api/${property}`;

    let arrayOfAll = await axios.get(url)
    .then((res) => {
        return res['data']['results'];
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