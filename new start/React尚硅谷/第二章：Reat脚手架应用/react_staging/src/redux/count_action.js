import { DECREMENT, INCREMENT } from "./constant";

export const createInCrementAction = (data) => ({ type: INCREMENT, data });

export const createDeCrementAction = (data) => ({ type: DECREMENT, data });
