import { dispatch, useStoreState } from "../../state/state";
import "./style.scss";
import zoom from "../../icon/zoom.svg";
import Wheart from "../../icon/Wheart.svg";
import Bheart from "../../icon/Bheart.svg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { addFav } from "../../state/dispatch";
import ReactImageMagnify from "react-image-magnify";
import { fetchProduct } from "../../API/api";

const Product = () => {
  const product = useStoreState("product");
  const fav = useStoreState("favorites");
  let { id} = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  const fetching = async () => {
    setLoading(true);
  
    let result = await fetchProduct(Number(id));
    try {
      if (!result.status) {
        throw new Error("Ошибка");
      }
      let json = await result.json();

      dispatch({ type: "getProduct", payload: json });
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  };

  useEffect(() => {
    fetching();
  }, []);

  const findFav = (id: number) => {
    return fav.find((product:any) => product.id === id);
  };

  return (
    <div className="product__container">
      { loading ? 'Загрузка' : (
        <>
      <div className="products__photo-block">
        <div className="photo__block">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: product.name,
                isFluidWidth: true,
                src: `https://testbackend.nc-one.com${product?.src}`,
              },
              largeImage: {
                src: `https://testbackend.nc-one.com${product?.src}`,
                width: 1200,
                height: 1800,
              },
            }}
          />
        </div>
        <img
          className="zoom"
          src={zoom}
          title="Наведите на изображение для увелечения"
          alt="zoom"
        />
      </div>
      <div className="product__info">
        <span className="product__title">{product.name}</span>
        <div className="product__price-like">
          <span className="product__price">$ {product.price}</span>
          {findFav(Number(id)) ? (
            <img
              src={Bheart}
              alt=""
              className="product__like"
              onClick={() =>
                addFav(
                  product?.name,
                  product.price,
                  product.src,
                  product.id,
                  product.uuid
                )
              }
            />
          ) : (
            <img
              src={Wheart}
              alt=""
              className="product__like"
              onClick={() =>
                addFav(
                  product?.name,
                  product.price,
                  product.src,
                  product.id,
                  product.uuid
                )
              }
            />
          )}
        </div>
      </div>
      </>
      )}
    </div>
  );
};

export default Product;
