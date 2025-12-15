import { useSelector, useDispatch } from "react-redux";
import { fetchAllProDetails, setSelectedSize } from "../Slices/ProductDetails.Slice";
import { addToCart } from "../Slices/Cart.Slice";
import { useEffect, lazy, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import '../Styles/Thumbnails.css';
import LazyWrapper from "../LazyWrappers/LazyWrapper";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
const ProductDescriptionCompo = lazy(() => import("./ProductDescription.component"));
function ProductDetailsComp() {
    const { productId } = useParams();
    const { data, isloading, error, selectedSize } = useSelector((state) => state.productDetailsInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (productId) {
            dispatch(fetchAllProDetails(productId));
        }
    }, [dispatch, productId]);

    const handleSizeClick = useCallback((size) => {
    dispatch(setSelectedSize(size));
   }, [dispatch]);

    const handleAddToCart = useCallback(() => {
    if (data && selectedSize) {
        dispatch(addToCart({ id: data.id, size: selectedSize, price: data.price, imgSrc: data.imgSrc }));
    }
   }, [data, selectedSize, dispatch]);
 
    if (isloading) return <h1 className="text-center loadings">Loading...</h1>;
    if (error) return <p>Error: {error}</p>;

    if (!data || !data.id) return <p>No product found.</p>;

    return (
        <div className="container details-Container">
            {/* <Breadcrumbs/> */}
            <div className="row details-row">
                <div className="col-md-6 d-flex">
                    <div className="thumbnail-container">
                        {data.thumbnailImgs && data.thumbnailImgs.length > 0 ? (
                            data.thumbnailImgs.map((imgUrl, index) => (
                                <img
                                    className="thumbnail-img"
                                    key={index}
                                    src={`data:image/jpeg;base64,${imgUrl}`} loading="lazy"
                                    alt="product thumbnail" style={{width:"600px"}}
                                />
                            ))
                        ) : (
                            <p>No thumbnails available.</p>
                        )}
                    </div>
                    <div className="col-sm-6 mx-4 text-center product-details-container">
                        <div className="product-details">
                            <h6 className="text name-text">{data.name}</h6>
                            <p className="price">${data.price}</p>
                            {data.size?.map((size, index) => (
                               <button
                               className={`btn-circle mx-2 ${selectedSize === size ? 'selected' : ''}`}
                               key={index}
                               onClick={() => handleSizeClick(size)}
                               style={{ backgroundColor: selectedSize === size ? '#4774a3' : '#fff', color: selectedSize === size ? '#130808' : '#000' }}
                           >
                               {size}
                           </button>
                            ))}
                              <div className="my-3">
                    <Link to={'/cart'}><button type="submit" className="bg-dark text-white addtoCart"
                    onClick={handleAddToCart}
                    >Add To Cart</button></Link>
                    </div>
                    <LazyWrapper fallbackText="Loading Description...">
                      <ProductDescriptionCompo />
                     </LazyWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsComp;
//A3U4DFEK926EX6QA77D4QVTF