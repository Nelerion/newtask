import "./style.scss";
import Bheart from "../../icon/Bheart.svg";
import { remFav } from "../../state/dispatch";
export interface PROPS {
  name: string;
  price: number;
  url: string;
  uuid: string;
}
const Fav_Card: React.FC<PROPS> = ({ url, name, price, uuid }) => {
  return (
    <div className="fac_card">
      <div className="fav__imgBlock">
        <img
          className="fav__img"
          src={`https://testbackend.nc-one.com${url}`}
        />
      </div>
      <div className="card_info">
        <span className="card_title">{name}sd</span>
        <div className="price__like">
          <span className="card__price">$ {price}</span>
          <span className="card__like">
            <img src={Bheart} onClick={() => remFav(uuid)} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Fav_Card;
