import { Route, Routes} from "react-router-dom";
import HomePage from "./Pages/Homepage";
import TechstackPage from "./Pages/TechstackPage"
import Header from "./Components/Header.js";
import Footer from "./Components/Footer";
import { ShepherdJourneyProvider} from "react-shepherd";
import "./App.css";
import 'shepherd.js/dist/css/shepherd.css';



function App() {

  return (
    <div className="App">
      <ShepherdJourneyProvider>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/TechStack" element={<TechstackPage />} />
        </Routes>
        <Footer />
      </ShepherdJourneyProvider>

    </div>
  );
}

export default App;
