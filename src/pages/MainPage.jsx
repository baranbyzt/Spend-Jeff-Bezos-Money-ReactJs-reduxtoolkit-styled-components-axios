

import {
    Wrapper,StopSpending
} from '../style/MainPageStayled'
import CardsComponent from '../components/CardsComponent';
import HeaderComponent from '../components/HeaderComponent';
import MoneyComponent from '../components/MoneyComponent';
import FooterComponent from '../components/FooterComponent';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector } from 'react-redux';
import { selectİtems } from '../redux/cardSlice';

import styles from '../style/General.module.css'

const MainPage = () => {
    const mainData = useSelector(selectİtems);

let portal_root = document.getElementById('portal');
let open_portal = () => {
    portal_root.style.visibility="visible";
  }
 
    return ( 
     <div >
         <HeaderComponent/>
         <MoneyComponent/>
       <Wrapper>

       {
mainData.map((dataf) => (
    <CardsComponent data={dataf} key={dataf.id} />
))
}         

       </Wrapper>
        <FooterComponent/>
        <StopSpending onClick={open_portal}>Stop Spending 
        <FontAwesomeIcon className={styles.shopicon} icon={faShoppingCart} />
        </StopSpending>
     </div>

     );
}
 
export default MainPage;

/*

  let close_portal = () => {
    if(portal_root.style.visibility === "visible"){
        portal_root.style.visibility == "hidden"
    } else{
        portal_root.style.visibility == "visible"
    }
        // portal_root.style.visibility="visible";
      }

*/