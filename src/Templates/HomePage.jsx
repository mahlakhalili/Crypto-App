import { useEffect, useState } from "react";
import TableCoin from "../Modules/TableCoin";
import { getCoinList } from "../services/cryptoApi";
import Pagination from "../Modules/Pagination";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading , setIsLoading] = useState(true)
  const [page , setPage] = useState(1)

  useEffect(() => {
    setIsLoading(true)
    const getData = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false)
      console.log(json);
    };
    getData();
  }, [page]);
  return (
    <div>
      <Pagination page = {page} setPage = {setPage}/>
      <TableCoin coins={coins} isLoading = {isLoading} />
    </div>
  );
};

export default HomePage;
