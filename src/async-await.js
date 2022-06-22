const miPromesa = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('REJECT en miPromesa')
        }, 1000)
    })
}

const medirTiempoAsync = async() => {
    try{
        console.log('Inicio')
        
        const resp = await miPromesa()
        console.log(resp)
        
        console.log('Fin')

        return 'fin de medirTiempoAsync'
    } catch(error){
        //return 'Error en medirTiempoAsync'
        throw 'Error en medirTiempoAsync'
    }
}

medirTiempoAsync()
    .then( valor => console.log('THEN Exitoso: ', valor))
    .catch( error => console.error('Error: ', error))