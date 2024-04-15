const {busquedas} =require ('../db')

const postAcronimo = async (req, res) => {
try {
    const {name_acronimo} = req.body
    const [newAcronimo, created] = await busquedas.findOrCreate({
        where:{name_acronimo:name_acronimo},
        defaults: {
            name_acronimo:name_acronimo
        }
    })

    if(created){
        res.status(200).json({message:"Guardado"})

    }else{ 
        res.status(200).json({message:"ya existe"})
      }
} catch (error) {
    res.status(404).json({message:"ERROR EN ALGUNO DE LOS DATOS INGRESADOS"});
}
}

module.exports = postAcronimo