let arr = [2, 3, 4, 5];
function test(num) {
    for (let i = 0; i < arr.length; i++){
        if (num % arr[i] == 0){
            console.log(arr[i]);
        }
    }
}
test(30);
