import Wheart from "../../icon/Wheart.svg";
import Bheart from "../../icon/Bheart.svg";
import { dispatch, useStoreState } from "../../state/state";
import { Link} from "react-router-dom";
import "./style.scss";
import { addFav } from "../../state/dispatch";

interface Props {
  name: string;
  price: number;
  url: string;
  style: any;
  id:number;
  uuid:string
}
const Card: React.FC<Props> = ({ name, price, url, id, uuid }) => {
  const fav = useStoreState("favorites");

  const findFav = (id: number) => {
    return fav.find((product:any) => product.id === id);
  };
 
  return (
    <div className="products__card">
      <div className="products__card_container">
        <div className="products__card_image-block">
          <Link to={`/product/${id}`} className="main__title" >
            <img
              src={`https://testbackend.nc-one.com${url}`}
              alt={name}
              className="products__card_image"
            />
          </Link>
        </div>
        <span className="products__card_title">{name}</span>
        <div className="products__card_price-like">
          <span className="products__card_price">${price}</span>
          <span className="products__card_like" >
            {findFav(id)?<img src={Bheart} onClick={()=>addFav(name,price,url,id,uuid)}/>:<img src={Wheart}onClick={()=>addFav(name,price,url,id,uuid)} />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
