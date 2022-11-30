import Headphonescard from '../headphones/Headphonescard';
import { collection, onSnapshot, query, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { db } from '../../firestore';
import './Home.css';

export function Home () {
        const [headphones, setHeadphones] = useState([])
        useEffect(() => {
            // this does not update realtime
            // const getHeadphones = () => {
            //     const headphonesArray = []
            //     getDocs(collection(db, "headphones")).then((querySnapshot) => {
            //         querySnapshot.forEach((doc) => {
            //             headphonesArray.push({...doc.data(),id:doc.id})
            //             // console.log(doc.id, " => ", doc.data());
            //         })
            //         setHeadphones(headphonesArray)
            //     }).catch((error) => {
            //         console.log(error.message)
            //     })
            // }
            // getHeadphones()

            //  this updates realtime

            const q = query(collection(db, "headphones"));
            const getHeadphones = onSnapshot(q, (querySnapshot) => {
                const headphonesArray = []
                querySnapshot.forEach((doc) => {
                    headphonesArray.push({...doc.data(),id:doc.id})
                    // console.log(doc.id, " => ", doc.data());
                })
                setHeadphones(headphonesArray)
            }
            );
            return () => getHeadphones();
            

        }, []
        )
    return (
        <>
        <h1 className="text-center">Home</h1>
        <div className="allheadphones">
            {headphones.map((headphone) => {
                return <Headphonescard key={headphone.id} headphone={headphone} />
            })}
        </div>
        </>
    )
}