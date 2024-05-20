const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-RFaD9bpZzFAbcXXKtoet3M9e";
const getCoinList = (page) => {
  return `${BASE_URL}/coins/markets?per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;
};
console.log(getCoinList);
export { getCoinList };
