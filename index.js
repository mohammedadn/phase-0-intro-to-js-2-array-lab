const cats = ["Milo", "Otis", "Garfield"];

function 
destructivelyAppendCat (name) {
cats.push (name = "Ralph");
}

function 
destructivelyPrependCat (name){
    cats. unshift (name = "Bob");
}
    function
    destructivelyRemoveLastCat(){
    cats.pop("Garfield");
    }
    
    function
    destructivelyRemoveFirstCat(){
    cats. shift("Milo");
    }
    function
     appendCat (Broom) {
    return [...cats,Broom];
    }
    function 
    removeLastCat() {
    return cats.slice(0,-1);
    }
    function 
    prependCat (Arnold) {
    return [Arnold, ...cats];
    }

    function 
    removeFirstCat () {
        return cats.slice(1);
    }

























// const cats=["Milo","Otis","Garfield"];

// function destructivelyAppendCat(){
//     console.log(cats); 
//     console.log(cats.push("Ralph"));
// }
// function destructivelyPrependCat(){
//     console.log(cats.unshift("Bob"));
// }
// function destructivelyRemoveLastCat(){
//     console.log(cats.pop("Garfield"));
// }
// function destructivelyRemoveFirstCat(){
//     console.log(cats.shift(" Milo"));
// }


