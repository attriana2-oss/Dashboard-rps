
import { useReducer } from "react";

type RpsState = {
  jumlahSelesai: number;
};

type RpsAction =
  | { type: "SET_SELESAI"; payload: number }
  | { type: "RESET" };

const initialState: RpsState = {
  jumlahSelesai: 0,
};

function rpsReducer(
  state: RpsState,
  action: RpsAction
): RpsState {
  switch (action.type) {
    case "SET_SELESAI":
      return {
        ...state,
        jumlahSelesai: action.payload,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export function useRpsReducer() {
  const [state, dispatch] = useReducer(
    rpsReducer,
    initialState
  );

  return { state, dispatch };
}
