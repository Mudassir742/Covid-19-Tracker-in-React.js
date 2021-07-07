import axios from "axios";


const originnalUrl = `https://covid19.mathdro.id/api`

export const fetchData = async (country) => {
  
  let changeableUrl = originnalUrl
  
  if(country)
  {
    changeableUrl = `${originnalUrl}/countries/${country}`
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(changeableUrl);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchDailyData = async() =>{
  try{
    const {data} = await axios.get("https://covid19.mathdro.id/api/daily");

    const modifiedData = data.map((dailyData) =>
      ({
        confirmed:dailyData.confirmed.total,
        deaths:dailyData.deaths.total,
        date:dailyData.reportDate
      })
    )

    return modifiedData;
  }
  catch(err){

  }
}

export const fetchCountryData = async() =>{
  try{
      const {data:{countries}} = await axios.get("https://covid19.mathdro.id/api/countries")

      return countries.map(country => country.name);
  }
  catch(err)
  {
    console.log(err.message)
  }
}

