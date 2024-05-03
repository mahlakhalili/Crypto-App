import  { useEffect, useState } from 'react'
import TableCoin from '../Modules/TableCoin'

const HomePage = () => {
    const [coins,setCoins] = useState([])

    useEffect(()=>{
        fetch(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=20&x_cg_demo_api_key=CG-6RAubenEiFsz29R5G3Khy4pP"
        )
        .then((res)=> res.json())
        .then((json)=> setCoins(json))
    } , [])
  return (
    <div>
        <TableCoin coins = {coins}/>
    </div>
  )
}

export default HomePage
