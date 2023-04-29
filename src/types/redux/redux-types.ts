import { REDUX_STATE } from "../../helpers/constants/redux-constants";

const { CART, PIZZAS } = REDUX_STATE;

// Description of the properties of one pizza
export interface IPizza {
  id: number;
  description: string;
  image: string;
  price: number;
  title: string;
}

// Description of the redux state
export interface IPizzasSliceState {
  // [PIZZAS] is an array of IPizza
  [PIZZAS]: Array<IPizza>;

  // [CART] is an array with the id and quantity of the pizza
  [CART]: Array<{ id: number; quantity: number }>;
}
