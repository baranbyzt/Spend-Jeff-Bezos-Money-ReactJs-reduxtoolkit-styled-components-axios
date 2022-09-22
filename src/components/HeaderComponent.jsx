import { Wrapper, İmg, P } from "../style/HeaderComponentStyled";
import imge from "../asset/images.jpg";

const HeaderComponent = () => {
  return (
    <>
      <Wrapper>
        <div>
          <İmg src={imge} />
          <P>Jeff Bezos</P>
        </div>
      </Wrapper>
    </>
  );
};

export default HeaderComponent;
