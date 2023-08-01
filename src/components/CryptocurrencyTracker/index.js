import CurrencyList from '../CryptocurrenciesList'
import './index.css'

const CryptocurrencyTracker = () => {
  console.log('app')
  return (
    <div className="main-cont">
      <div className="currency-card">
        <CurrencyList />
      </div>
    </div>
  )
}
export default CryptocurrencyTracker
