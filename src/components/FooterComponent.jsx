
import {useState} from 'react';

import {Wrapper,P_foter
} from '../style/FooterComponentStyled'
import styles from '../style/General.module.css'
import { useSelector } from 'react-redux';
import {selectİtems,selectMoney
} from '../redux/cardSlice'
import FooterİnnerComponent from './FooterİnnerComponent';


const FooterComponent = () => {



    // itemları getirtir.
    const getİtemsData = useSelector(selectİtems);
    // itemlerin listesini
    const getMoneyData = useSelector(selectMoney);



    return ( 
        <Wrapper>
  <div className={styles.footerWrapper}>
  <p className={styles.p_wrapperr}>TİTLE</p> 
<p className={styles.p_wrapperr}>ADED</p>
<p className={styles.p_wrapperr}>TOPLAM FİYAT</p>

  </div>
  
                  {
getİtemsData.map((dataf) => (
    <FooterİnnerComponent data={dataf} key={dataf.id} />
))
}   
<P_foter> Harcanan toplam: {(187000000000-getMoneyData).toLocaleString('ar-US')}</P_foter>
        </Wrapper>
     );
}
 
export default FooterComponent;

// {(props.data.aded*props.data.fiyat).toLocaleString('ar-US')}
// getMoneyData


/*

const [kissadan,useKisseden] = useState(null);
useKisseden(187000000000-getMoneyData)


*/