

import React,{useEffect,useState} from 'react'
import { useDispatch ,useSelector} from 'react-redux';
import {azzaltFunciton,arttirtFunciton,arttiraded,paradandus} from '../redux/cardSlice'
import { selectData,selectDatapara } from '../redux/cardSlice';


const CardsComponent = (props) => {
const [benimdatam,useBenimdatam] = useState(null)

const gelendeger = useSelector(selectDatapara); // ana parayı göstertir.
const itemslerinbabasi = useSelector(selectData); // o itemleri döndürür 

const dispatch = useDispatch();


    return ( 
        <div className='jjdefrdf'>
        <img src={props.data.img}/>
        <h1>{props.data.title}</h1>
        <p>ürün fiyatı: {props.data.fiyat}</p>
        <p>bu üründen şu kadar alındı: {props.data.aded} </p>
        <div>
        <button onClick={
           () => {
            dispatch(arttiraded(props.data.fiyat))
            dispatch(paradandus([props.data.id,'kerem']))
           }
        }>ana paradan 5 çıkart</button>
             <button onClick={
            () => console.log(gelendeger)
        }>konsolda göster</button>
        </div>
     <p>{props.data.id}</p>
    </div>
     );
}
 
export default CardsComponent;


/*
   <button onClick={
            () => dispatch(azzaltFunciton())
        }>-</button>

   {
            console.log(props.data[0].fiyat)
        }

*/