
// our styled-component
import {
    Wrapper,P
} from '../style/MoneyComponentStyled'
// we use it to add stickers to the global store
import { useSelector } from "react-redux";
// our money action
import { selectMoney } from "../redux/cardSlice";

const MoneyComponent = () => {
// this is show our money in global store
  const showMoney = useSelector(selectMoney)

    return ( 
        <Wrapper>
      <P>{(showMoney).toLocaleString('ar-US')} $</P>
        </Wrapper>
     );
}
 
export default MoneyComponent;