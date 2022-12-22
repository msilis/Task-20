//Array to hold shoes

let shoeArray = [];
//shoe factory function
function shoeInventory(name, productCode, quantity, valuePerItem){
     

     this.name = name,
     this.productCode = productCode,
     this.quantity = quantity,
     this.valuePerItem = valuePerItem;

   
    
}

//create shoes 
let shoe1 = new shoeInventory('Nike', '149', 150, 109.99);
let shoe2 = new shoeInventory('Adidas', '9388', 200, 98.89);
let shoe3 = new shoeInventory('Puma', '2443', 120, 67.50);
let shoe4 = new shoeInventory('Converse', '239', 135, 45.50);
let shoe5 = new shoeInventory('Dune', '4550', 40, 120.50);


//add shoes to array
shoeArray.push(shoe1, shoe2, shoe3, shoe4, shoe5)

//function to search for shoe

function shoeSearch(shoe){
   if (shoeArray.filter(e => e.name == shoe).length){
      return 'We have that shoe'
   } else return 'We do not have that shoe'
}

//function to find shoe with lowest value per item

function minimumShoeValue(array){
   return array.reduce(
      (previous, current) => {
         return previous.valuePerItem < current.valuePerItem ? previous : current
      }
   )
}

//function to find shoe with highest value per item

function maximumShoeValue(array){
   return array.reduce(
      (previous, current) => {
         return previous.valuePerItem > current.valuePerItem ? previous : current
      }
   )
}


//function to edit any part of shoe object

function updateValue(shoeName, valueToUpdate, newValue){
   let itemToUpdate = shoeArray.findIndex((shoeInstance => shoeInstance.name == shoeName ));
   //let index = shoeArray.indexOf(valueToUpdate)
   shoeArray[itemToUpdate][valueToUpdate] = newValue;
   console.log(shoeArray[itemToUpdate])
   return
}




//function to order all objects in ascending order



console.log(shoeSearch('Adidas'))
console.log(minimumShoeValue(shoeArray))
console.log(maximumShoeValue(shoeArray))
console.log(updateValue('Nike', 'valuePerItem', 108.50))
