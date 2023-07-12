import "./styles.css";
import { useDispatch } from "react-redux";
import CarList from "./components/CarList";
import HouseList from "./components/HouseList"
import { reset } from "./store";
import { DSButton, DSIcon, DSBox } from "ttb-design-system-webview";

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
 
 
    
    <DSBox direction="column" gap={8} px={32} py={24}>

      <CarList />
      <HouseList />

      <DSButton 
      iconRight={<DSIcon icon="close"/>}
      variant="secondary"
      onClick={() => handleResetClick()}
      >
        Reset Both
      </DSButton>
      </DSBox>
  );
}
