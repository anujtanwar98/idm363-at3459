import TableEdit from '../table/TableEdit';
import { collection, onSnapshot, query, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { db } from '../../firestore';
import './Home.css';

export function Edit () {
        const [headphones, setHeadphones] = useState([])
        useEffect(() => {

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
        <h1 className="text-center">Edit/Admin</h1>
        <div className="allheadphones">
            {headphones.map((headphone) => {
                return <TableEdit key={headphone.id} headphone={headphone} />
            })}
        </div>
        </>
    )
}