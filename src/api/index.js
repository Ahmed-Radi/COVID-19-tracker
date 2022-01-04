import axios from 'axios';//this help in API request

const url = 'http://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;
    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }
    try{
        const { data: {confirmed, recovered, deaths, lastUpdate}} = await axios.get(changeableUrl);

        // The object "modifiedData" can be a shortcut like this
        // const modifiedData = {confirmed, recovered, deaths, lastUpdate}
        //configure data
        const modifiedData = {
            /** because the key and the value are the same */
            confirmed,    // the same thing -> confirmed: confirmed,
            recovered,   // the same thing -> recovered: recovered
            deaths,     // the same thing -> deaths: deaths
            lastUpdate // the same thing -> lastUpdate: lastUpdate
        }
        return modifiedData;
        /* We can remove object modifiedData and return data directly)(these two lines are a shortcut for the "try" function) {
            const { data: confirmed, recovered, deaths, lastUpdate} = await axios.get(url);
            return {confirmed, recovered, deaths, lastUpdate};
        }*/
    }
    catch (err) {
        console.log(err)
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }))
        // console.log(data)
        return modifiedData;
    }catch (err) {
        console.log(err)
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name)
    } catch (err) {
        console.log(err)
    }
}