
// stylad-component
import {
    Wrapper,StopSpending
} from '../style/MainPageStayled'

// our components
import CardsComponent from '../components/CardsComponent';
import HeaderComponent from '../components/HeaderComponent';
import MoneyComponent from '../components/MoneyComponent';
import FooterComponent from '../components/FooterComponent';
// for use icon 
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// redux-store select item
import { useSelector } from 'react-redux';
// our action
import { selectİtems } from '../redux/cardSlice';
// our module css
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