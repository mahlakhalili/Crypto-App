const BASE_URL = "https://api.coingecko.com/api/v3"
const API_KEY = "CG-RFaD9bpZzFAbcXXKtoet3M9e"
const getCoinList = ()=>{
    return (
        `${BASE_URL}/coins/markets?vs_currency=usd&x_cg_demo_api_key=${API_KEY}`
    )
}
export {getCoinList}