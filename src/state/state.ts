import { createStore } from "react-hooks-global-state";
interface PRODUCT {
  name: string | null;
  price: number | null;
  src: string | null;
  uuid:string
  id:number|null
}

interface STATE {
  products: any[];
  product: PRODUCT;
  favorites: any[];
}
const reducer = (state: STATE, action: { type: string; payload: any }) => {
  switch (action.type) {
    case "fetchProducts":
      return { ...state, products: action.payload };
    case "addFavorites":
      return { ...state, favorites: [...state.favorites, action.payload] };
      case "removeFavorites":
      return { ...state, favorites: [...state.favorites].filter(item=>item.uuid!==action.payload) };
    case "getProduct":
      return { ...state, product: action.payload };
    default:
      return state;
  }
};
const initialState = {
  products: [],
  product: {
    name: null,
    price: null,
    src: null,
    uuid:"",
    id:null
  },
  favorites: [],
};
export const { dispatch, useStoreState } = createStore(reducer, initialState);
