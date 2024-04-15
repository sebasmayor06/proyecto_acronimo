
const axios = require("axios");

const getAcronico = async (req, res) => {

    try {
        const Acronicos = [];
        const { sf } = req.query;
    

        let URL = `http://www.nactem.ac.uk/software/acromine/dictionary.py?sf=${sf}`
        const datos= await axios.get(URL);
        if (datos.data.length === 0){
            Acronicos.push({lf:"NOT FOUND"})
        }else{

            datos.data[0].lfs.forEach((e)=>{
                Acronicos.push(
                    {
                        lf: e.lf,
                        freq: e.freq,
                        since: e.since,
                    }
                )
            })
        }
        res.status(200).json(Acronicos)
        return Acronicos
    } catch (error) {
        console.log(error.message);
    }


}

module.exports = getAcronico