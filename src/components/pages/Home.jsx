import Headphonescard from '../headphones/Headphonescard';
import { collection, onSnapshot, query, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { db } from '../../firestore';
import './Home.css';

export function Home () {
        const [headphones, setHeadphones] = useState([])
        useEffect(() => {
            const getHeadphones = () => {
                const headphonesArray = []
                getDocs(collection(db, "headphones")).then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        headphonesArray.push({...doc.data(),id:doc.id})
                        // console.log(doc.id, " => ", doc.data());
                    })
                    setHeadphones(headphonesArray)
                }).catch((error) => {
                    console.log(error.message)
                })
            }
            getHeadphones()
        }, []
        )
    return (
        <>
        <h1>Home</h1>
        <div className="allheadphones">
            {headphones.map((headphone) => {
                return <Headphonescard key={headphone.id} headphone={headphone} />
            })}
        </div>
        </>
    )
}