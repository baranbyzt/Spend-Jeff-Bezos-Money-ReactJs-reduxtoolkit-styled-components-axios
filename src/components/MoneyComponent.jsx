import { Wrapper, P } from "../style/MoneyComponentStyled";
import { useSelector } from "react-redux";
import { selectMoney } from "../redux/CardSlice";

const MoneyComponent = () => {
  const showMoney = useSelector(selectMoney);

  return (
    <Wrapper>
      <P>{showMoney.toLocaleString("ar-US")} $</P>
    </Wrapper>
  );
};

export default MoneyComponent;
