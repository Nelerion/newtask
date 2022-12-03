import Fav_Card from "./fav_card";
import "./style.scss";
import { useStoreState } from "../../state/state";
import {PROPS} from "./fav_card";
const Favorites: React.FC = () => {
  const fav = useStoreState("favorites");

  return (
    <section className="favorites">
      <div className="favorites__block">
        <span className="fav__title">Favorites</span>
        <div className="fav_cards">
          {fav?.map((favorite:PROPS) => {
            return <Fav_Card
              name={favorite?.name}
              url={favorite?.url}
              price={favorite?.price}
              uuid={favorite.uuid}
              key={favorite.uuid}
            />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
