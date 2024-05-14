import { useEffect, useState } from "react";
import TableCoin from "../Modules/TableCoin";
import { getCoinList } from "../services/cryptoApi";
import Pagination from "../Modules/Pagination";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading , setIsLoading] = useState(true)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
      setIsLoading(false)
      console.log(json);
    };
    getData();
  }, []);
  return (
    <div>
      <Pagination />
      <TableCoin coins={coins} isLoading = {isLoading} />
    </div>
  );
};

export default HomePage;
