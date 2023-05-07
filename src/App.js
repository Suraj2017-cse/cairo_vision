import Companion from "./Component/Companion";
import HeaderItem from "./Component/HeaderItem";
import Customers from './Component/Customers';
import CarouselItems from "./Component/CarouselItems";

function App() {
  return (
   <>
   <HeaderItem />
    <main>
    <Companion />
   <Customers />
    <CarouselItems />
    </main>
   </>
  );
}

export default App;
