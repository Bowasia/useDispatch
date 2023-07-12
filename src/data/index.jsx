import { faker } from "@faker-js/faker/locale/en";
import searchImages from "../api";

// This file has nothing to do with Redux
// It exports functions that create random
// movies and song

export const createRandomMovie = () => {
  return `${faker.word.adjective()} ${faker.word.noun()}`;
};

export const createRandomSong = () => {
  return faker.music.songName();
};


export const createRandomHouse = () => {
  return houseComp[Math.floor(Math.random()* houseComp.length)]
}

// export const listOfHouse = () => {
//   return houseComp
// }


export const houseComp = [
  "Sansiri", "AP (Thailand)", "Land and Houses",
  // "Ananda Development", "Supalai", "Pruksa Real Estate",
  // "Fragrant Property", "Origin Property", "AssetWise",
  // "Sena Development", "LPN Development", "Q House",
  // "Pace Development", "Major Development", "Noble Development",
  // "TCC Assets", "SC Asset", "Golden Land",
  // "Singha Estate", "Thai Asset",
  // "Saransiri", "Sansiri Property", "U City",
  // "Asian Property Development", "Raimon Land",
  // "Fragrant Group", "Asset World Corporation",
  // "Sansiri Global Investment", "Nusasiri",
  // "Bangkok Land", "Supreme Property",
  // "Siam Future Development", "Lalin Property",
  // "Property Perfect", "Areeya Property",
  // "Sino-Thai Engineering and Construction",
  // "Architects & Engineering Associates",
  // "Piyasombat Property", "Eastern Star Real Estate",
  // "Vikrom Kromadit", "Charn Issara Development",
  // "Krungthai Land Development", "G-land Property",
  // "All Inspire Development", "Chalermnit Art De Maison",
  // "Premier Group", "Navarang Asset",
  // "Quality Houses", "Sorachon Development",
  // "Supreme Estates", "Amari Estates",
  // "Nusasiri Grand", "Supreme Villas",
  // "Blue Sky Group", "SC Asset Corporation",
  // "Origin Living", "Living Property",
  // "Noble Deville", "TCC Capital Land"
]



export const createRandomCar = () => {
  return carComp[Math.floor(Math.random()* carComp.length)]
}


export const carComp =[
  'Audi',         'Chevrolet',    'Cadillac',    
  // 'Acura',
  // 'BMW',          'Chrysler',     'Ford',        'Buick',
  // 'INFINITI',     'GMC',          'Honda',       'Hyundai',
  // 'Jeep',         'Genesis',      'Dodge',       'Jaguar',
  // 'Kia',          'Land Rover',   'Lexus',       'Mercedes-Benz',
  // 'Mitsubishi',   'Lincoln',      'MAZDA',       'Nissan',
  // 'MINI',         'Porsche',      'Ram',         'Subaru',
  // 'Toyota',       'Volkswagen',   'Volvo',       'Alfa Romeo',
  // 'FIAT',         'Freightliner', 'Maserati',    'Tesla',
  // 'Aston Martin', 'Bentley',      'Ferrari',     'Lamborghini',
  // 'Lotus',        'McLaren',      'Rolls-Royce', 'smart',
  // 'Scion',        'SRT',          'Suzuki',      'Fisker',
  // 'Maybach',      'Mercury',      'Saab',        'HUMMER',
  // 'Pontiac',      'Saturn',       'Isuzu',       'Panoz',
  // 'Oldsmobile',   'Daewoo',       'Plymouth',    'Eagle',
  // 'Geo',          'Daihatsu'
]

export const carImg =  carComp.map(async (car) => {
  const url = await searchImages(car)
  console.log(`url from index.js = ${url}`)
  return url
})



// console.log(carImg)

//export let carImg = []

// for (const car in carComp){
  
//   carImg = [...carImg, searchImages(car)]
// }

// export const carImg = await Promise.all(arr)
// console.log(`arr = ${arr[1]}`)

