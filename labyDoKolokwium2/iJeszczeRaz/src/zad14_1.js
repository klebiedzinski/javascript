const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };
  
  const getNum = (cb) => {
    setTimeout(() => {
      cb(getRand());
    }, getRand() * 5);
  };

  const asyncSort = (dim) => {
    const array = [];
    
    for (let i = 0; i<dim; ++i){
        getNum((x) => {
            array.push(x)
            // ++licznik
            if (array.length===dim) console.log(array.sort().reverse())

        })
       
    }
  };
  asyncSort(4)