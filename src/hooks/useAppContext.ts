import { AppContext } from "../components/Context";
import { useContext } from "react";

export const useAppContext = () => {
  return useContext(AppContext);
};
