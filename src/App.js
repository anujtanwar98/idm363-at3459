import { Footer } from './components/footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./components/pages/Home";
import { Edit } from "./components/pages/Edit";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
