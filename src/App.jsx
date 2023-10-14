/* import logo from "./logo.svg"; */
import "./App.css";
import { Banner } from "./components/Banner";
import { Contact } from "./components/Contact";
import { NavBar } from "./components/NavBar";
import { Skills } from "./components/Skills";


import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Contact />
    




    </div>
  );
}

export default App;
