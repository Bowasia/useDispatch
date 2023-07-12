import { useDispatch, useSelector } from "react-redux";
import { carComp } from "../data";
import { addCar, removeCar } from "../store";
import { DSListAction, DSBox, DSDivider, DSClickableIcon, DSTextStyle, DSDropdown, DSButton, DSImageBox, DSIcon } from "ttb-design-system-webview";
import { useState } from "react";
import CarImage from "../Image/CarImage.png"
import { carImg } from "../data";
import searchImages from "../api";
// import searchImages from "../api";


function CarList() {
  const [carOption, setOption] = useState("")
  const dispatch = useDispatch();
  const carList = useSelector((state) => {
    return state.cars;
  });

  const handleCarAdd = (car) => {
    dispatch(addCar(car));
    setOption("");
  };
  const handleCarRemove = (car) => {
    dispatch(removeCar(car));
  };



  const renderedCars = carList.map((car) => {
    return (
      <DSListAction key={car}
        iconRight={
          <DSBox onClick={() => handleCarRemove(car)} >
            <DSClickableIcon icon="close" />
          </DSBox>
        }
        text={<DSTextStyle>
          {car}
        </DSTextStyle>}
        hover={false}
      />
    );
  });


  const renderOptions = carComp.map((car, index) => {
    return (
      <DSBox
        value={car}
        key={car}
        py={4}
        gap={8}
        onClick={() => { setOption(car) }}
      >

        <DSImageBox
          horizontal
          imageAlign="center"
          imageWidth="80px"
          objectFit="cover"
          radius="md"
          spacingImage={32}
          textAlign="left"
          title={car}
          image={async () => {
            const image = await searchImages(car)
            console.log(`Hellllloooo`)
            return image
          }}
        />
        {console.log(`car = ${car}\nsearchImage(${car}) = ${searchImages(car)}`)}
        <DSDivider variant="small-horizontal" />
      </DSBox>

    )
  })

  return (
    <>

      <DSTextStyle variant="specialH1">
        Cars
        {/* {console.log(carImg[0])} */}
      </DSTextStyle>


      <DSDropdown
        label="Select car to add"
        value={carOption}

      >
        {renderOptions}
      </DSDropdown>

      <DSButton onClick={() => handleCarAdd(carOption)}>
        + Add {carOption != "" ? carOption : "Car"}
      </DSButton>

      <DSBox direction="column" gap={0} py={0} >
        {renderedCars}
      </DSBox>
    </>

  );
}

export default CarList;
