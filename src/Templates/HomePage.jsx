import { useEffect, useState } from "react";
import TableCoin from "../Modules/TableCoin";
import Search from "../Modules/Search";
import { getCoinList } from "../services/cryptoApi";
import Pagination from "../Modules/Pagination";
import Chart from "../Modules/Chart";

const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
        console.log(json);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [page, currency]);
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin coins={coins} isLoading={isLoading} setChart={setChart} />
      <Pagination page={page} setPage={setPage} />
      {/* <Chart /> */}
      {!!chart && <Chart chart={chart} setChart={setChart}/>}
    </div>
  );
};

export default HomePage;
