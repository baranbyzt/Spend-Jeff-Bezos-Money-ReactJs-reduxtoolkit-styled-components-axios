

// our styled-component
import {Wrapper,P_foter
} from '../style/FooterComponentStyled'
// our module css
import styles from '../style/General.module.css'
import { useSelector } from 'react-redux';
// our actions
import {selectİtems,selectMoney
} from '../redux/cardSlice'
import FooterİnnerComponent from './FooterİnnerComponent';


const FooterComponent = () => {



    // get items
    const getİtemsData = useSelector(selectİtems);
    // get item list
    const getMoneyData = useSelector(selectMoney);



    return ( 
        <Wrapper>
  <div className={styles.footerWrapper}>
  <p className={styles.p_wrapperr}>TİTLE</p> 
<p className={styles.p_wrapperr}>piece</p>
<p className={styles.p_wrapperr}>total price</p>

  </div>
  
                  {
getİtemsData.map((dataf) => (
    <FooterİnnerComponent data={dataf} key={dataf.id} />
))
}   
<P_foter> total spent: {(187000000000-getMoneyData).toLocaleString('ar-US')}</P_foter>
        </Wrapper>
     );
}
 
export default FooterComponent;
