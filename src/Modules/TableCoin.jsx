import chartUp from "../assets/chart-up.svg";
import chartDown from "../assets/chart-down.svg";
import { BallTriangle } from "react-loader-spinner";
import PropTypes from "prop-types";

import styles from "./TableCoin.module.css";
import { marketChart } from "../services/cryptoApi";

const TableCoin = ({ coins, isLoading , setChart}) => {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <BallTriangle />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} setChart={setChart}/>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

TableCoin.propTypes = {
  coin: PropTypes.object,
};

export default TableCoin;

const TableRow = ({
  coin: {
    id,
    name,
    image,
    symbol,
    total_volume,
    current_price,
    price_change_percentage_24h: price_change,
  },
  setChart,
}) => {
  const showHandler = async() =>{
    try{
      const res = await fetch(marketChart(id))
      const json = await res.json()
      console.log(json)
      setChart(json)
      
    }
    catch(error){
      setChart(null)
    }
  }
  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>${current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt="" />
      </td>
    </tr>
  );
};

TableRow.propTypes = {
  coin: PropTypes.object,
};
