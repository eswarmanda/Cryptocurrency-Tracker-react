import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CurrencyItem from '../CryptocurrencyItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class CurrencyList extends Component {
  state = {
    currencyDataList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getApiDataList()
  }

  getApiDataList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const currencyData = await response.json()
    console.log(currencyData)
    const updatedCurrencyData = currencyData.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    console.log(updatedCurrencyData)
    this.setState({currencyDataList: updatedCurrencyData, isLoading: false})
  }

  getUiData = () => {
    console.log('getdata')
    const {currencyDataList} = this.state
    return (
      <div className="card1">
        <h1 className="title">Cryptocurrency Tracker</h1>
        <div>
          <img
            className="crypto-img"
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
        </div>
        <div className="crypto-status">
          <div className="status">
            <h2 className="coin">Coin Type</h2>
            <h2 className="usd">USD</h2>
            <h2 className="euro">EURO</h2>
          </div>
          {currencyDataList.map(eachCurrency => (
            <CurrencyItem
              currencyDetails={eachCurrency}
              key={eachCurrency.id}
            />
          ))}
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.getUiData()
        )}
      </div>
    )
  }
}
export default CurrencyList
