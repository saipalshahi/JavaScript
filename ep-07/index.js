// github
//fetch or axios

// const githubAPI = "  https://api.github.com/users/saipalshahi"

// const fetchData = async() =>{  // async = In js it cannot wait for other which take time but the use of async function it will wait.
//     const response = await fetch(githubAPI)  //await = we use await which take time
//     const jsonData = await response.json()
//     console.log(jsonData.name);
    
// }

// fetchData()




// using try catch

const githubAPI2 = "  https://api.github.com/users/saipalshahigdg"

const fetchData2 = async() =>{
    try {
        const response2 = await fetch(githubAPI2)
    const jsonData2 = await response2.json()
    console.log(jsonData2.name);
    } catch (error) {
        console.log(error);
        
    }finally{
        console.log("always run");
        
    }
    
    
}
fetchData2()