import { useSelector } from "react-redux";
import '../Styles/ProductDescrip.css';
function ProductDescriptionCompo(){
    const desciptionDetails = useSelector((state) => state.descriptionInfo.productDescriptions);
    return(
        <>
        <div className="container my-4">
            <div className="row">
                <div className="col-sm mt-4">
                    {desciptionDetails.map((item, index) =>(
                        <div className="decription-details" key={index}>
                            <p className="descriptions1">{item.description1}</p>
                            <p className="descriptions2">{item.description2}</p>
                            <p className="descriptions3">{item.description3}</p>
                            <p className="descriptions4">{item.description4}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}
export default ProductDescriptionCompo;