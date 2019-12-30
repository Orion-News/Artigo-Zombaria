const { get } = require('axios')
const URL = `https://api.github.com/users`

async function ObterNome(name){
    const url = `${URL}/${name}`
    const response = await get(url)
    // console.log(JSON.stringify([response.data]))
    return [{name:response.data.name,
            type:response.data.type }]
}

// main()
// async function main(){
// try{

//     const nome = await ObterNome('neowide')

//     console.log(nome)

// }
// catch(error){
//     console.error(error)
//     }
// }

module.exports = {
    ObterNome
}