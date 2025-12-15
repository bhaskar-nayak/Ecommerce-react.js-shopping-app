import { Link } from "react-router-dom";
import '../Styles/NewHome.css';
function NewHomeCards() {
    const newData = [
        {
            id: 1,
            imgScr: "https://eu.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/red_takeover/Women_LG_REDTakeover_WW_HP_Category_Push_20241231_DII.jpg?wid=490",
            description: "Women's Handbags"
        },
        {
            id: 2,
            imgScr: "https://eu.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/red_takeover/Women_SLG_REDTakeover_WW_HP_Category_Push_20241231_DII.jpg?wid=490",
            description: "Women's Wallets and Small Leather Goods",
        },
        {
            id: 3,
            imgScr: "https://eu.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/red_takeover/Women_ACC_REDTakeover_WW_HP_Category_Push_20241231_V2_DII.jpg?wid=490",
            description: "Women's Accessories",
        },
        {
            id: 4,
            imgScr: "https://eu.louisvuitton.com/images/is/image//content/dam/lv/editorial-content/New-Homepage/2024/central/category/red_takeover/Women_Shoes_REDTakeover_WW_HP_Category_Push_20241231_V2_DII.jpg?wid=490",
            description: "Women's Shoes",
        }
    ];
    return (
        <>
            <div className="container newContainer">
                <div className="row newRow">
                  <h3 className="text-center newHeading">Louis Vuitton x Murakami</h3>
                    {newData.map((item) => (
                        <div className="col-sm-3" key={item.id}>
                            <div className='card border-0 img-fluid' style={{ width: "270px" }}>
                                <Link to={'/product'}><img className='card-img-top imageheights' src={item.imgScr} alt='image product' /></Link>
                            </div>
                            <div className='card-body text-center'>
                            <p className='card-text textDescrip'>{item.description}</p>
                              </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default NewHomeCards;