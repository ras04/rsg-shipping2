import "./App.css";
import Banner from "./Components/Banner";
import Experiance from "./Components/Experiance";
import Footer from "./Components/Footer";
import Mail from "./Components/Mail";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
// import bg from "./assets/container.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Services />
      <Mail />
      <Experiance />
      <Footer />
    </div>
  );
}

export default App;
