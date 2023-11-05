import {BrowserRouter, Routes , Route} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import AllComponentPage from './Pages/AllComponentPage';
import PricingSection from './Pages/PricingSection';
const App = () =>{
   return(
     <BrowserRouter>
      <Routes>
       <Route path='/' exact Component={HomePage}></Route>
      </Routes>
      <Routes>
       <Route path='/allcomponents' Component={AllComponentPage}></Route>
      </Routes>
      <Routes>
       <Route path='/pricingsection' Component={PricingSection}></Route>
      </Routes>
     </BrowserRouter>
   );
}
export default App