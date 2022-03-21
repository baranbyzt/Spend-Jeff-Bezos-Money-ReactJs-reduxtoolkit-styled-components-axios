
import { İtemsCards,İmg,İnnerDiv,
    P,Button
} from "../style/CardsComponentStyled";

import React,{useEffect,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import {changePieceNegative,changePiecePozitif,selectMoney,
    changeMainMoneyPozitif,changeMainMoneyNegative
} from '../redux/cardSlice'

const CardsComponent = (props) => {
    const dispatch = useDispatch();
    const mainMoney = useSelector(selectMoney)

    const plusButton = () =>
    {
        if(mainMoney >= props.data.fiyat){
                dispatch(changeMainMoneyNegative(props.data.fiyat))
                 dispatch(changePiecePozitif([props.data.id,'kerem']))  
        }else{

        }
                  
    }
 const negativeButton = () =>
    {

        if(props.data.aded > 0){
dispatch(changeMainMoneyPozitif(props.data.fiyat))
            dispatch(changePieceNegative([props.data.id,'kerem']))
        }else{

        }
    
    }

    return ( 
        <İtemsCards>
      
      <İmg src={props.data.img}  />
<div>
    <P>{props.data.title}</P>
    <P>{(props.data.fiyat).toLocaleString('ar-US')} $</P>
    <İnnerDiv>
    <Button onClick={plusButton}>+</Button>
    <P>{props.data.aded}</P>
    <Button onClick={negativeButton}>-</Button>
    </İnnerDiv>
</div>
        </İtemsCards>
     );
}
 
export default CardsComponent;