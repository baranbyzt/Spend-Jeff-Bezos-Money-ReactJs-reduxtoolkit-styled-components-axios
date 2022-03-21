
import { İtemsCards,İmg,İnnerDiv,
    P,Button
} from "../style/CardsComponentStyled";

import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import {changePieceNegative,changePiecePozitif,
    changeMainMoneyPozitif,changeMainMoneyNegative
} from '../redux/cardSlice'

const CardsComponent = (props) => {
    const dispatch = useDispatch();

    const plusButton = () =>
    {
                  dispatch(changeMainMoneyPozitif(props.data.fiyat))
        dispatch(changePiecePozitif([props.data.id,'kerem']))   
    }
 const negativeButton = () =>
    {
    dispatch(changeMainMoneyNegative(props.data.fiyat))
            dispatch(changePieceNegative([props.data.id,'kerem']))
    }

    return ( 
        <İtemsCards>
      
      <İmg src={props.data.img} />
<div>
    <P>{props.data.title}</P>
    <P>{props.data.fiyat}</P>
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