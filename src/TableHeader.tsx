function TableHeader() {
    return (
        <div className="coin-container">
            <div className="coin-row">
            <div className="coin">
                Name
            </div>
            <div className="coin-data">
            <p>Current price</p> 
           <p> Mkt Cap change24h</p> 
          <p>Mkt Cap change24h %</p> 
            <p className="coin-marketcap">Mkt Cap</p>
            </div>
</div>
        </div>

    )
}

export default TableHeader