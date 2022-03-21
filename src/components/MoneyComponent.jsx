

import {
    Wrapper,P
} from '../style/MoneyComponentStyled'
import { useSelector } from "react-redux";
import { selectMoney } from "../redux/cardSlice";

const MoneyComponent = () => {

  const showMoney = useSelector(selectMoney)

    return ( 
        <Wrapper>
      <P>{showMoney} $</P>
        </Wrapper>
     );
}
 
export default MoneyComponent;