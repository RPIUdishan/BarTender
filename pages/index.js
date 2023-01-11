import Header from "../components/header"
import MainImages from "../components/mainImages"
import Search from "../components/search"
export default function Home() {
  return (
    <div className="bg-[url('/bar.jpg')] bg-cover w-full h-screen">
      <Header />
      <Search />
      <h2 className="text-white font-mono font text-center my-5 text-4xl animate-pulse">Search for Your Favourite Drink</h2>
      <MainImages />
    </div>
  )
}
