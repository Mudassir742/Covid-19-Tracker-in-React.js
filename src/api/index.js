import axios from "axios";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get("https://covid19.mathdro.id/api");

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

