type Props = {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

function SearchInput ({setSearch}: Props) {
    return (
        <form>
        <input className="coin-input" type="text" placeholder="Search for your fav Coin" onChange={filteredCoins => {
          setSearch(filteredCoins.target.value)
        }} />
      </form>
    )
}

export default SearchInput