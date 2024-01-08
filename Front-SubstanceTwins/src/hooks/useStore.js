import { useContext } from "react";
import SubstanceContext  from "../context/provider";

const useStore = () => {
    return useContext(SubstanceContext)
}
export default useStore