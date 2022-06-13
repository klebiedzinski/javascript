const getRand = () => {
    return Math.floor(Math.random() * 1000);
  };
  
  const getNum = (cb) => {
    setTimeout(() => {
      cb(getRand());
    }, getRand() * 5);
  };

  const asyncSort = (dim) => {
    for(let i = 0; i<dim; ++i){
        
    }
  };