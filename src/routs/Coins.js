import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Coins.css'
import DOMPurify from 'dompurify'

const Coins = () => {
  const params = useParams()
  const [coin, setcoin] = useState({})
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinID}`
  //const url = `https://api.coingecko.com/api/v3/coins/${params.coinID}`

  useEffect(() => {
    axios.get(url).then((res) => {
      setcoin(res.data)
    }).catch((error) => {
    })

  }, [])


  return (
    <div>
      <div className='coin-container'>
        <div className='content'>
          <h1>{coin.name}</h1>
        </div>
        <div className='content'>
          <div className='rank'>
            <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
          </div>
          <div className='info'>
            <div className='coin-heading'>
              {coin.image ? <img src={coin.image.small} alt='coin image' /> : null}
              {coin.symbol ? <h1>{coin.symbol.toUpperCase()}/USD</h1> : null}
            </div>
            <div className='coin-price'>
              <h1>{coin.market_data ? <h1>{coin.market_data.current_price.usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h1> : null}</h1>
            </div>
          </div>
        </div>
        <div className='content'>
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th>30d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <pr>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</pr> : null}</td>
              <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <pr>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</pr> : null}</td>
              <td>{coin.market_data?.price_change_percentage_7d_in_currency ? <pr>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</pr> : null}</td>
              <td>{coin.market_data?.price_change_percentage_14d_in_currency ? <pr>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</pr> : null}</td>
              <td>{coin.market_data?.price_change_percentage_30d_in_currency ? <pr>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</pr> : null}</td>
              <td>{coin.market_data?.price_change_percentage_1y_in_currency ? <pr>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</pr> : null}</td>
            </tbody>
          </table>
        </div>
        <div className='content'>
          <div className='stats'>
            <div className='left'>
              <div className='row'>
                <h4>24 hour low</h4>
                {coin.market_data?.low_24h ? <p>{coin.market_data.low_24h.usd.toLocaleString()}$</p> : null}
              </div>
              <div className='row'>
                <h4>24 hour hige</h4>
                {coin.market_data?.high_24h ? <p>{coin.market_data.high_24h.usd.toLocaleString()}$</p> : null}
              </div>
              <br></br>
              <div className='right'>
                <div className='row'>
                  <h4>market cap</h4>
                  {coin.market_data?.market_cap ? <p>{coin.market_data.market_cap.usd.toLocaleString()}$</p> : null}
                </div>
                <div className='row'>
                  <h4>Circulating supply</h4>
                  {coin.market_data ? <p>{coin.market_data.circulating_supply.toLocaleString()}</p> : null}
                </div>
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='about'>
              <h3>about</h3>
              <p dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
              }}></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Coins