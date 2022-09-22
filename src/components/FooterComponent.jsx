import { Wrapper, Pfooter } from "../style/FooterComponentStyled";
import styles from "../style/General.module.css";
import { useSelector } from "react-redux";
import { selectİtems, selectMoney } from "../redux/CardSlice";
import FooterİnnerComponent from "./FooterİnnerComponent";

const FooterComponent = () => {
  const getİtemsData = useSelector(selectİtems);
  const getMoneyData = useSelector(selectMoney);
  let Money = 187000000000;

  return (
    <Wrapper>
      <div className={styles.footerWrapper}>
        <p className={styles.p_wrapperr}>title</p>
        <p className={styles.p_wrapperr}>piece</p>
        <p className={styles.p_wrapperr}>total price</p>
      </div>

      {getİtemsData.map((dataf) => (
        <FooterİnnerComponent data={dataf} key={dataf.id} />
      ))}
      <Pfooter>
        {" "}
        total spent: {(Money - getMoneyData).toLocaleString("ar-US")}
      </Pfooter>
    </Wrapper>
  );
};

export default FooterComponent;
