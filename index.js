// Write your solution here!
const cats = ["Milo","Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    cats.pop([cats.length - 1])
}

function destructivelyRemoveFirstCat(){
    cats.shift(0)
}

function appendCat(name){
    const addCatLast = [...cats, "Broom"]
    return addCatLast
}
function prependCat(name){
    const addCatFirst = ["Arnold", ...cats]
    return addCatFirst
}

function removeLastCat(){
    const removeLast = cats.slice(0,2)
    return removeLast
}
function  removeFirstCat(){
    const removeFirst = cats.slice(1)
    return removeFirst
}
