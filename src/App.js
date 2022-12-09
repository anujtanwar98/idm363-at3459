import { Footer } from './components/footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes,Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./components/pages/Home";
import { Cart } from "./components/pages/Cart";
import { Edit } from "./components/pages/Edit";
import { Navbar } from "./components/navbar/Navbar";
import { AddHeadphones } from "./components/pages/AddHeadphones";
import { FormEdit} from "./components/formedit/FormEdit";
import  DetailPage  from "./components/detailpage/DetailPage";
// import Headphonescard from './components/headphones/Headphonescard';

// import { collection, onSnapshot, query } from 'firebase/firestore';
// import { useState, useEffect } from 'react'
// import { db } from './firestore';

// function App() {

//   const [headphones, setHeadphones] = useState([])
//   const headphonesArray = []

//   const q = query(collection(db, 'headphones'))
//   onSnapshot(q, querySnapshot => {
//     querySnapshot.forEach(doc => {
//       console.log(doc.id)
//       console.log(doc.data())
//       const headphonesData = {
//         keyName: doc.id,
//         ...doc.data(),
//       }
//       headphonesArray.push(headphonesData)
//     })
//     setHeadphones(headphonesArray)
//   })
  function App() {

  //   const [headphones, setHeadphones] = useState([])
  //   const headphonesArray = []
  
  //   function fn_query_firebase() {
  //     const q = query(collection(db, 'headphones'))
  //     onSnapshot(q, querySnapshot => {
  //       querySnapshot.forEach(doc => {
  //         console.log(doc.id)
  //         console.log(doc.data())
  //         const headphonesData = {
  //           keyName: doc.id,
  //           ...doc.data(),
  //         }
  //         headphonesArray.push(headphonesData)
  //       })
  //       setHeadphones(headphonesArray)
  //     })
  //   }
  
  //   useEffect(() => {
  //     fn_query_firebase()
  //   }, [])

  return (
    <div className="App">
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-headphones" element={<AddHeadphones />}/>
          <Route path="/edit/:documentId" element={<FormEdit />}/>
          <Route path="/detailpage/:documentId" element={<DetailPage />}/>
        </Routes>
        <Footer />
      </Container>
    </div>
  );
}

export default App;
