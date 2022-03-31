function zad06( arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]){
    for (i = 0; i <= arr.length-1 ; ++i){
        console.log(i+". rząd:");
        for(j=0;j<=arr[i].length-1;++j){
            console.log(arr[i][j]);
        }
    }
}
zad06()
//Jak tu użyć operatora '...'?