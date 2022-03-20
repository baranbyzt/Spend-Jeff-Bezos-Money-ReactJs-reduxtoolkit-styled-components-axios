
import { useSelector } from 'react-redux';
import { selectData,selectDatapara } from '../redux/cardSlice';

import CardsComponent from "../components/CardsComponent";

const MainPage = () => {


    const gelendeger = useSelector(selectData);
    const parayigoster = useSelector(selectDatapara);

   // console.log(gelendeger)
    return ( 
<>
        main MainPage   {parayigoster}
       
        <hr/>

<div className='jasdlkfj'>
{
gelendeger.map((dataf) => (
    <CardsComponent data={dataf} key={dataf.id} />
))
}

</div>

</>
     );
}
 
export default MainPage;