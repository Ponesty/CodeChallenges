const guessGift = (arr1,arr2) => {
    let toy = [];
    for(let i=0; i<arr1.length;i++){
        for(j=0;j<arr2.length;j++){
            if(arr1[i].size === arr2[j].size && arr1[i].clatters === arr2[j].clatters && arr1[i].weight === arr2[j].weight){
                toy.push(arr1[i].name);
            }
        }
    }
    return toy;
}

let wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

let presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];

console.log(guessGift(wishlist,presents));