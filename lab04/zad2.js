(function (t) {
    arr=[...t];
    let maxlen=0;
    let maxstr='';
    let str='';

    arr.forEach(element => {
       
        if(element!==' ' ){
            str+=element;
        }
        if(element===' ' || element===arr[arr.length-1]){
           if (maxstr.length<str.length) {
                maxstr=str;
            }
            
            str='';
            
        }
        
    });
    console.log(maxstr);
})("ala ma kota")




