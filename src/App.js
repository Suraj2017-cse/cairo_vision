import Companion from "./Component/Companion";
import HeaderItem from "./Component/HeaderItem";
import Customers from './Component/Customers';

function App() {
  return (
   <>
   <HeaderItem />
    <main>
    <Companion />
   <Customers />
    </main>
   </>
  );
}

export default App;
