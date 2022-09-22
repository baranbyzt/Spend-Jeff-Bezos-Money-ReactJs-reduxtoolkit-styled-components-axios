import ReactDOM from "react-dom";
import { WrapperDiv, Content, ShareButton } from "../style/SharePortalStyled";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { selectMoney } from "../redux/CardSlice";
import FooterComponent from "../components/FooterComponent";
import styles from "../style/General.module.css";

function SharePortal() {
  const getMoneyData = useSelector(selectMoney);
  let portalRoot = document.getElementById("portal");
  portalRoot.style.visibility = "hidden";

  let close_portal = () => {
    portalRoot.style.visibility = "hidden";
  };

  const twitterShare = () => {
    window.location.href = `https://twitter.com/intent/tweet?url=
        I was able to spend ${(187000000000 - getMoneyData).toLocaleString(
          "ar-US"
        )}$  amount of Jeff Bezos' 187 billion billion dollar fortune. can you help me ?
        https://spend-jeff-bezos-money.vercel.app/`;
  };

  return ReactDOM.createPortal(
    <WrapperDiv className={styles.section}>
      <Content className={styles.section}>
        <FooterComponent />
      </Content>

      <p onClick={close_portal}>
        <FontAwesomeIcon className={styles.timesicon} icon={faTimes} />
      </p>
      <ShareButton onClick={twitterShare}>share</ShareButton>
    </WrapperDiv>,
    document.getElementById("portal")
  );
}

export default SharePortal;
