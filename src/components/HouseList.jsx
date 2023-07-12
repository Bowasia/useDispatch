import { useDispatch, useSelector } from "react-redux";
import { houseComp } from "../data";
import { addHouse, removeHouse } from "../store";
import { DSListAction,DSImageBox, DSBox, DSClickableIcon, DSTextStyle, DSButton, DSDropdown, DSIcon, DSDivider } from "ttb-design-system-webview";
import { useState } from "react";
import HouseImage from "../Image/HouseImage.png"
import axios from "axios";

function HouseList() {
const [houseOption, setOption] = useState("")
  const dispatch = useDispatch();
  const houseList = useSelector((state) => {
    return state.houses;
  });

  const handleHouseAdd = (house) => {
    dispatch(addHouse(house));
  };
  const handleHouseRemove = (house) => {
    dispatch(removeHouse(house));
  };

  const renderedHouses = houseList.map((house) => {
    return (
        <DSListAction key={house}
        iconRight={
            <DSBox onClick={() => handleHouseRemove(house)} >
                <DSClickableIcon icon="close" />
            </DSBox>
        }
        text={<DSTextStyle>
            {house}
        </DSTextStyle>}
        hover={false}
        />
   
    );
  });

  const renderOptions = houseComp.map((house) => {
    return (
      <DSBox
        value={house}
        key={house}
        py={4}
        gap={8}
        onClick={() => { setOption(house)}}
      >

        <DSImageBox
        horizontal
        iconPlaceholder={<DSIcon icon="photo" />}
        imageAlign="center"
        imageWidth="80px"
        objectFit="contain"
        radius="md"
        spacingImage={32}
        textAlign="left"
        title={house}
        image={HouseImage}
        />
        <DSDivider variant="small-horizontal" />
        </DSBox>
        // <option
        // value={house} key={house}>
        //     <DSImageBox
        //     key={house}
        //   horizontal
        //   imageAlign="center"
        //   imageWidth="80px"
        //   objectFit="contain"
        //   radius="md"
        //   spacingImage={32}
        //   textAlign="left"
        //   title={house}
        //   image={HouseImage}
        // />
        // </option>
    )
  })

  return (
    <>
        
            <DSTextStyle variant="specialH1">
                Houses
            </DSTextStyle>
        
        
            <DSDropdown
            label="Select house to add"
            value={houseOption}
            >
                {renderOptions}
            </DSDropdown>
        
            <DSButton onClick={() => handleHouseAdd(houseOption)}>
                + Add {houseOption != "" ? houseOption: "House"} 
            </DSButton>

        <DSBox direction="column" gap={0} py={0} >
        {renderedHouses}
        </DSBox>
    </>
  );
}

export default HouseList;
