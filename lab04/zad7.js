function isPalindrome(arr){
    for (let i=0; i<arr.length; ++i){
        if (arr[i]!==arr[arr.length-1-i]) return false;
    }
    return true
}
console.log(isPalindrome([1,2,3,2,2,1]))