import { dispatch } from "./state";
import { v4 as uuidv4 } from 'uuid';

export const addFav = (
  name: string | null,
  price: number | null,
  url: string | null,
  id:number|null,
  uuid:string|null
) => {
  uuid = uuidv4();
  dispatch({ type: "addFavorites", payload: { name, price, url,id,uuid } });
};

export const remFav = (id: string) => {
  dispatch({ type: "removeFavorites", payload: id });
};
