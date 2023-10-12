let arr = [6,2,4,5,7,8];
function LinearSearch(arr: number[],value: number):number{
    for (let value_loop of arr) {
        if(value_loop == value){
            return value;
        }
    }
    return -1;
}

function BinarrySearch(arr: number[],value: number):number{
    let sorted_array = arr.sort();
    let low:number = 0;
    let height:number =arr.length -1;
    while (low<=height) {
        let middle_index = Math.floor(low + (height-low)/2);
        let middle_of_array = sorted_array[middle_index]
        if(middle_of_array < value){
            low = middle_index+1;
        }
        if(middle_of_array > value){
            height = middle_index-1;
        }else{
            return middle_of_array;
        }
    }
    return -1;
}
// nest 
// Jump Search 
// Interpolation Search 
// Exponential Search 
console.log(BinarrySearch(arr,5))