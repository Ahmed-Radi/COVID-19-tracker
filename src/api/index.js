import axios from 'axios';//this help in API request

const url = 'https://covid19.mathdro.id/api';

export const fetchDate = async () => {
    try{
        const { data: confirmed, recovered, deaths, lastUpdate} = await axios.get(url);

        // The object "modifiedData" can be a shortcut like this
        // const modifiedData = {confirmed, recovered, deaths, lastUpdate}
        //configure data
        const modifiedData = {
            /** because the key and the value are the same */
            confirmed,    // the same thing -> confirmed: confirmed,
            recovered,   // the same thing -> recovered: recovered
            deaths,     // the same thing -> deaths: deaths
            lastUpdate // the same thing ->  lastUpdate: lastUpdate
        }
        return modifiedData;
        /* We can remove object modifiedData and return data directly)(these two lines are a shortcut for the "try" function) {
            const { data: confirmed, recovered, deaths, lastUpdate} = await axios.get(url);
            return {confirmed, recovered, deaths, lastUpdate};
        }*/
    }
    catch (err) {

    }
}