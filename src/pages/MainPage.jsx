

import {
    Wrapper
} from '../style/MainPageStayled'
import CardsComponent from '../components/CardsComponent';
import HeaderComponent from '../components/HeaderComponent';
import MoneyComponent from '../components/MoneyComponent';
import FooterComponent from '../components/FooterComponent';



import { useSelector } from 'react-redux';
import { selectİtems } from '../redux/cardSlice';

const MainPage = () => {
    const mainData = useSelector(selectİtems);


    return ( 
     <>
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
     </>

     );
}
 
export default MainPage;