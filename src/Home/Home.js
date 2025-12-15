import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import { lazy } from 'react';
import LazyWrapper from '../LazyWrappers/LazyWrapper';


// Lazy-loaded components
const MultiCardsHome = lazy(() => import('./multiCards'));
const HomeImages2 = lazy(() => import('./HomeImages2'));
const GiftsHome = lazy(() => import('./Homegifts'));
const NewHomeCards = lazy(() => import('./HomeNew'));

function Home(){
    const homeImgs=[
        {
            id:1,
            imgScr:"https://in.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/brand-content-coremedia/men/2024/category/shoes/M_BC_MSHOES_LV_Trainer_Evergreen_Apr24_03_DI3.jpg?wid=2400",
        },
    ]
    
    return(
                 <>    
                <div className='image-container'>
                {homeImgs.map(item => (
                    <div className='homeImg border-0' key={item.id}>
                        <div className='img-wrapper'>
                            <Link to='/product'>
                                <img className='img-fluid' src={item.imgScr} alt='image' />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
          <LazyWrapper fallbackText="Loading New Arrivals...">
        <NewHomeCards />
      </LazyWrapper>

      <LazyWrapper fallbackText="Loading Featured Products...">
        <MultiCardsHome />
      </LazyWrapper>

      <LazyWrapper fallbackText="Loading Promotions...">
        <HomeImages2 />
      </LazyWrapper>

      <LazyWrapper fallbackText="Loading Gift Items...">
        <GiftsHome />
      </LazyWrapper>
       </>
    )
}
export default Home;