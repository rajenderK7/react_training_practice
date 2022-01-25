import "./App.css";
import DisplayCard from "./components/card/DisplayCard";
import NavBar from "./components/navbar/NavBar";

const objs = [
  {
    link: "https://m.media-amazon.com/images/I/71Y8rH2cJiL._AC_UY327_QL65_.jpg",
    title:
      "Samsung Galaxy M12 (White,4GB RAM, 64GB Storage) 6000 mAh with 8nm Processor | True 48 MP Quad",
    price: "₹11,499",
  },
  {
    link: "https://m.media-amazon.com/images/I/71os5DRhuSL._AC_UY327_QL65_.jpg",
    title: "Samsung Galaxy M32 5G (Sky Blue, 8GB RAM, 128GB Storage)",
    price: "₹22,999",
  },
  {
    link: "https://m.media-amazon.com/images/I/61CnyJ-IbML._AC_UY327_QL65_.jpg",
    title:
      "OPPO A31 (Fantasy White, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
    price: "₹12,990",
  },
  {
    link: "https://m.media-amazon.com/images/I/71KCwNV6MuL._AC_UY327_QL65_.jpg",
    title:
      "OPPO A31 (Mystery Black, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers",
    price: "₹12,990",
  },
  {
    link: "https://m.media-amazon.com/images/I/71sxlhYhKWL._AC_UY327_QL65_.jpg",
    title:
      "Redmi 9A (Nature Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
    price: "₹11,499",
  },
  {
    link: "https://m.media-amazon.com/images/I/71geVdy6-OS._AC_UY327_QL65_.jpg",
    title:
      "OPPO A74 5G (Fantastic Purple,6GB RAM,128GB Storage) - 5G Android Smartphone | 5000 mAh Battery |",
    price: "₹16,990",
  },
];

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      {objs.map((item) => {
        return (
          <DisplayCard
            link={item.link}
            title={item.title}
            price={item.price}
          ></DisplayCard>
        );
      })}
      {/* <DisplayCard></DisplayCard> */}
    </div>
  );
}

export default App;
