const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`;

const fetchInfo = async() => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};

export default async function handler(req, res) {
    const result = await fetchInfo();
    // console.log(result);
    res.status(200).json(result);
}