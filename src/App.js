import Companion from "./Component/Companion";
import HeaderItem from "./Component/HeaderItem";
import Customers from './Component/Customers';
import CarouselItems from "./Component/CarouselItems";
import Article from "./Component/Article";
import Resources from "./Component/Resources";
import Footer from "./Component/Footer";

function App() {
  return (
   <>
   <HeaderItem />
    <main>
    <Companion />
   <Customers />
    <CarouselItems />
    <Article />
    <Resources />
    </main>
    <Footer />
   </>
  );
}

export default App;
