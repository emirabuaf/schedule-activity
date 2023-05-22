import { useFetch } from "../hooks/useFetch";


const Forecast = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  const { data, loading, error } = useFetch(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=Berlin&days=1&aqi=no&alerts=no`);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="text-white">
      <div className="text-end">
        <h1>{data?.location.name}</h1>
        <div className='flex items-center justify-end'>
          <img src={data?.forecast.forecastday[0].day.condition.icon} />
          <h1>{data?.current.temp_c}</h1>
        </div>
        <h2>{data?.forecast.forecastday[0].day.condition.text}</h2>
        <h2>Chance of Rain: %{data?.forecast.forecastday[0].day.daily_chance_of_rain}</h2>
      </div>
    </div>
  );
};


export default Forecast;