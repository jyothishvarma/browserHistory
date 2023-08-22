import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="item-container">
      <p className="time">{timeAccessed}</p>
      <div className="domain-container">
        <img src={logoUrl} className="logo" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        data-testId="delete"
        type="button"
        className="button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default HistoryItem
