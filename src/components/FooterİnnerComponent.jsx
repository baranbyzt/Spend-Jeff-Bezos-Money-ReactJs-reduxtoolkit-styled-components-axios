
// our module css file
import styles from '../style/General.module.css'
// this is styled-components for css
import {P} from '../style/FooterComponentStyled'

const FooterÄ°nnerComponent = (props) => {
    return ( 
  <>
        <div className={styles.footerWrapper}>
<P className={ props.data.aded > 0 ? styles.show : styles.hidden}>{props.data.title}</P> 
<P className={ props.data.aded > 0 ? styles.show : styles.hidden}>{props.data.aded}</P>
<P className={ props.data.aded > 0 ? styles.show : styles.hidden}>{(props.data.aded*props.data.fiyat).toLocaleString('ar-US')} $</P>

        </div>
        <hr className={ props.data.aded > 0 ? styles.show : styles.hidden}/>
        </>
     );
}
 
export default FooterÄ°nnerComponent;
