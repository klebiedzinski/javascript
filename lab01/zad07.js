let table = [1, 5, 6, 5, 5, 1, 5];

function czyjest(x,table){
    for(i=0; i<table.length; ++i){
        if (x==table[i]){
            return true
        }
    }
    return false
}
uniwersalne=[];
for( let j=0; j<table.length; ++j){
    if(!czyjest(table[j],uniwersalne)){
        uniwersalne.push(table[j]);
        let ile=0;
        for (let i=0; i<table.length; ++i)
        {
            if (table[j]==table[i]){
                ++ile;
            }
        }
        if(ile==1){
            console.log(table[j]+" wystepuje "+ile+" raz");
        }
        else{
            console.log(table[j]+" wystepuje "+ile+" razy");
        }
    }
    
   
    
}
