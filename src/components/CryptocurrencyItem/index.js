import './index.css'

const CurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, euroValue, usdValue} = currencyDetails
  return (
    <li className="currency-card-list">
      <div className="logo-card">
        <img className="logo" src={currencyLogo} alt={currencyName} />
        <p className="c-name">{currencyName}</p>
      </div>
      <div className="value-card">
        <p className="c-u-value">{usdValue}</p>
        <p className="c-e-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CurrencyItem
