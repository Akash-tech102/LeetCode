/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
let sum = 0;

for (let i = 0; i < apple.length; i++) {
    sum += apple[i];
}

capacity.sort((a, b) => b - a);

let boxes = 0;

for(let i = 0; i < capacity.length; i++){
    sum -= capacity[i];
    boxes++;

    if(sum<=0){
        return boxes;
    }
}


};