import { IPizzasSliceState } from "../../types/redux/redux-types";

// Since the state is small, we do not break it into separate selectors
export const getStateSelector = (state: IPizzasSliceState) => state;
