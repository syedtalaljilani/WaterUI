import HeroSection from "./Components/HeroSection.jsx";
import Header from "./Components/Header.jsx";

const App = () =>{
   return(
     <div className={'bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-[100%] sm:w-[100%] font-Montserrat2'}>
       <Header/>
       <HeroSection/>
     </div>
   );
}
export default App