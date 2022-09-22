import {
  İtemsCards,
  İmg,
  İnnerDiv,
  P,
  Button1,
  Button2,
} from "../style/CardsComponentStyled";
import styles from "../style/General.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changePieceNegative,
  changePiecePozitif,
  selectMoney,
  changeMainMoneyPozitif,
  changeMainMoneyNegative,
} from "../redux/CardSlice";

const CardsComponent = (props) => {
  const dispatch = useDispatch();
  const mainMoney = useSelector(selectMoney);

  const plusButton = () => {
    if (mainMoney >= props.data.fiyat) {
      dispatch(changeMainMoneyNegative(props.data.fiyat));
      dispatch(changePiecePozitif([props.data.id]));
    } else {
    }
  };
  const negativeButton = () => {
    if (props.data.piece > 0) {
      dispatch(changeMainMoneyPozitif(props.data.fiyat));
      dispatch(changePieceNegative([props.data.id]));
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
          <P>{props.data.piece}</P>
          <Button2
            className={
              props.data.piece == 0
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
