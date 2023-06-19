import './App.css';
import ChooseEasyBank from './components/ChooseEasyBank';
import Footer from './components/Footer';
import LatestArticles from './components/LatestArticles';
import MainHeading from './components/MainHeading';
import NavBar from './components/NavBar';


function App() {
  return (
    <>
       <NavBar />
     {/* 1st main  */}
     <MainHeading />    
      {/* 2nd main  */}
     <ChooseEasyBank />
     {/* 3rd main  */}
     <LatestArticles />
     <Footer />
    </>
  );
}

export default App;
