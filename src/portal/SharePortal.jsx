import ReactDOM from "react-dom";
// stylad-component
import {
  WrapperDiv,
  Wrapperİnner,
  Content,
  ShareButton,
} from "../style/SharePortalStyled";
// get our fontawesome imports
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
// our actions
import { selectMoney } from "../redux/CardSlice";
// fotter component
import FooterComponent from "../components/FooterComponent";

import styles from "../style/General.module.css";

function SharePortal() {
  // get item list
  const getMoneyData = useSelector(selectMoney);

  let portal_root = document.getElementById("portal");
  portal_root.style.visibility = "hidden";

  let close_portal = () => {
    portal_root.style.visibility = "hidden";
  };
  // twitter share section
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
