// father

// our styled-component
import {
  İtemsCards,
  İmg,
  İnnerDiv,
  P,
  Button1,
  Button2,
} from "../style/CardsComponentStyled";
// our module css
import styles from "../style/General.module.css";
// we use it to add stickers to the global store
import { useDispatch, useSelector } from "react-redux";
// our actions
import {
  changePieceNegative,
  changePiecePozitif,
  selectMoney,
  changeMainMoneyPozitif,
  changeMainMoneyNegative,
} from "../redux/CardSlice";

const CardsComponent = (props) => {
  // we are use dispatch for add store
  const dispatch = useDispatch();
  // show money
  const mainMoney = useSelector(selectMoney);

  const plusButton = () => {
    if (mainMoney >= props.data.fiyat) {
      dispatch(changeMainMoneyNegative(props.data.fiyat));
      dispatch(changePiecePozitif([props.data.id, props.data.listofreceipt]));
    } else {
    }
  };
  const negativeButton = () => {
    if (props.data.aded > 0) {
      dispatch(changeMainMoneyPozitif(props.data.fiyat));
      dispatch(changePieceNegative([props.data.id, "kerem"]));
    } else {
    }
  };

  return (
    <İtemsCards>
      <İmg src={props.data.img} />
      <div>
        <P>{props.data.title}</P>
        <P>{props.data.fiyat.toLocaleString("ar-US")} $</P>
        <İnnerDiv>
          <Button1 onClick={plusButton}>Buy</Button1>
          <P>{props.data.aded}</P>
          <Button2
            className={
              props.data.aded == 0
                ? styles.ButtonOpactiy
                : styles.ButtonOpactiy2
            }
            onClick={negativeButton}
          >
            Sell
          </Button2>
        </İnnerDiv>
      </div>
    </İtemsCards>
  );
};

export default CardsComponent;
