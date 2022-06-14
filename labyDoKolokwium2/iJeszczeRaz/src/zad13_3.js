const axios = require('axios')

const getRand = () => {
    return Math.floor(Math.random() * 100);
  };

const funkcjonalnosc = (cb) => {
    const numbers = [getRand(),getRand(),getRand(),getRand(),getRand()]
    // console.log(numbers)
const result = []
    for (i of numbers) {
        const entry = axios.get('https://jsonplaceholder.typicode.com/posts/'+i)
            .then((res) => {
                const post = {
                  title: res.data.title,
                  body: res.data.body
                }
                // console.log(post)
                
                const comments = axios.get('https://jsonplaceholder.typicode.com/posts/'+i+'/comments').then((res) => {
                    const comments = res.data.map((el) => {
                        const comment = {
                            name: el.name,
                            email: el.email,
                            body: el.body
                        }
                        return comment
                    })
                    const entry = {
                        entry: post,
                        comments: comments
                    }
                    result.push(entry)
                    if(i === numbers[numbers.length-1]) console.dir(result, {depth: null})
                })
                
                


                // console.log(entry)
                
            })
        
    }
    // console.log(result)
}
funkcjonalnosc()