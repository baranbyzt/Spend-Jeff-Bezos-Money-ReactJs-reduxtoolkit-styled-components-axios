
// stayled-components
import { Wrapper,İmg,P
 } from "../style/HeaderComponentStyled";
 // jeff bezos profile image
import imge from '../asset/images.jpg'



const HeaderComponent = () => {

    return ( 
      <>
        <Wrapper>
      <div className="lkjsdf">
      <İmg src={imge}/>
      <P>Jeff Bezos</P>
      </div>
        </Wrapper>
     
        </>
     );
}
 
export default HeaderComponent;

