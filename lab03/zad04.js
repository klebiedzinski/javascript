'use strict';
function zad4(array) {
    let unikalne = [];
    for (let i = 0; i <= array.length-1 ; ++i){
        if (!unikalne.includes(array[i])) unikalne.push(array[i]);
        
    }
    for (let i = 0; i <= unikalne.length-1 ; ++i){
        const str = unikalne[i];
        let ile = 0
        for (let j = 0; j <= array.length - 1; ++j){
            if (str===array[j]) ++ile;
        }
        console.log(str+": "+ile)
    }
}
array=['js', 'react', 'js', 'angular', 'angular', 'js']

zad4(array);
// dało się to zrobić bez 40tu pętli??