import { Footer } from './components/footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./components/pages/Home";
import { Edit } from "./components/pages/Edit";
import { Navbar } from "./components/navbar/Navbar";

// import { initialize_store } from './features/product';
import { collection, onSnapshot, query } from 'firebase/firestore'
import { useState } from 'react'
import { db } from './firestore'

function App() {

  const [headphones, setHeadphones] = useState([])
  const headphonesArray = []

  const q = query(collection(db, 'headphones'))
  onSnapshot(q, querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(doc.id)
      console.log(doc.data())
      const headphonesData = {
        keyName: doc.id,
        ...doc.data(),
      }
      headphonesArray.push(headphonesData)
    })
    setHeadphones(headphonesArray)
  })

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
