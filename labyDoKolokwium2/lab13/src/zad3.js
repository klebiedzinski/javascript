const axios = require('axios')
const lodash = require('lodash')
const getRand = () => {
    return Math.floor(Math.random() *100);
  };
//('https://jsonplaceholder.typicode.com/posts/comments')
(async () => {
    const ids = [getRand(),getRand(),getRand(),getRand(),getRand()];
    const posts = []
    const result = []
    for (i of ids)
    {
        const post = await axios.get('https://jsonplaceholder.typicode.com/posts/'+i)
        const comments = await axios.get('https://jsonplaceholder.typicode.com/posts/'+i+'/comments')
        result.push({
            entry: {
                title: post.data.title,
                body: post.data.body

            },
            comments: comments.data.map((comment) => {
                return {
                    name: comment.name,
                    email: comment.email,
                    body: comment.body
                }
            })
            
        })
    }
   
 
    console.dir(result,{depth: null})
    // console.log(posts)
   
    // console.log(comments)


    
    

    

})()

//JAK TO ZROBIC BEZ ASYNC AWAIT

