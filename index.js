// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


//push() used to add an item to the end of an array
function destructivelyAppendCat(name){
    cats.push('Ralph');
}
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

//destructivelyAppendCat();
//console.log(cats)

// unshift() method adds one or more elements to the
//beginning of an array and returns the new length of the array.
function destructivelyPrependCat(name){
    cats.unshift('Bob')
}

cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');


//pop() method removes the last element from an array and
//returns that value to the caller
function destructivelyRemoveLastCat(){
    cats.pop();
}
cats.length = 0;
cats.push('Milo', 'Otis', 'Garfield');

//shift() method removes the element at the zeroth index and
//shifts the values at consecutive indexes down, then returns the removed value.
function destructivelyRemoveFirstCat(){
    cats.shift()
}
//cats.length = 0;
//cats.push('Milo', 'Otis', 'Garfield');

//appends a cat to the cats array and returns a new array, leaving the cats array unchanged

function appendCat(name){
    let copyOfCat = [...cats, "Broom"]
    return copyOfCat
}


function prependCat(name){
    let prepEnd = ["Arnold", ...cats]
    return prepEnd
}


function removeLastCat(){
    let removeLast = cats.slice(0,2)
    return removeLast

}
function removeFirstCat(){
    let removeFirst = cats.slice(1)
    return removeFirst

}
