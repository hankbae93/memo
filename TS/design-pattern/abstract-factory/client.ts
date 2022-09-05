import FurnitureFactory from "./furniture-factory";

let FURNITURE = FurnitureFactory.getFurniture("SmallChair");
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDimensions());
/*
SmallChair
{ width: 40, height: 40, depth: 40 }
*/

FURNITURE = FurnitureFactory.getFurniture("MediumTable");
console.log(FURNITURE?.name);
console.log(FURNITURE?.getDimensions());
/*
MediumTable
{ width: 60, depth: 60, height: 60 } 
*/
