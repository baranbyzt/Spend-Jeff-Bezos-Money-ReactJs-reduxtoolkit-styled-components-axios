import { Wrapper, StopSpending } from "../style/MainPageStayled";
import CardsComponent from "../components/CardsComponent";
import HeaderComponent from "../components/HeaderComponent";
import MoneyComponent from "../components/MoneyComponent";
import FooterComponent from "../components/FooterComponent";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { selectİtems } from "../redux/CardSlice";
import styles from "../style/General.module.css";

const MainPage = () => {
  const mainData = useSelector(selectİtems);
  let portalRoot = document.getElementById("portal");
  let openPortal = () => {
    portalRoot.style.visibility = "visible";
  };

  return (
    <div>
      <HeaderComponent />
      <MoneyComponent />

      <Wrapper>
        {mainData.map((getData) => (
          <CardsComponent data={getData} key={getData.id} />
        ))}
      </Wrapper>

      <FooterComponent />

      <StopSpending onClick={openPortal}>
        Stop Spending
        <FontAwesomeIcon className={styles.shopicon} icon={faShoppingCart} />
      </StopSpending>
    </div>
  );
};

export default MainPage;
