import { getHeroById } from "./utils";

const getHeroByIdAsync  = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const hero = getHeroById(id)
            if(hero) resolve(hero)
            else reject('No se encontró el héroe')
        }, 1000)
    })
}

getHeroByIdAsync(2).then(console.log).catch(console.log)