import { Coin } from "../App"
import CoinCard from "../CoinCard"
import Header from "../Header"
import SearchInput from "../SearchInput"
import TableHeader from "../TableHeader"

type Props = {
    setSearch: React.Dispatch<React.SetStateAction<string>>
    decresingCoins: any
}

function Home ({setSearch, decresingCoins}: Props) {
    return (
        <div>
        <Header />
        <SearchInput setSearch={setSearch} />
  
        <TableHeader />
  
        {decresingCoins.map((coin: Coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}

</div>

    )
}

export default Home