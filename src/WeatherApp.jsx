import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { Height } from "@mui/icons-material";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Wonderland",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "Haze",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-app"
    style={{
        textAlign: "center",
        padding: "2rem",
        borderRadius: "24px",
        backdropFilter: "blur(16px)",
        background: "rgba(255,255,255,0.12)",
        border: "1px solid rgba(255,255,255,0.25)",
        boxShadow: "0 20px 45px rgba(0,0,0,0.25)",
        color: "white",
        width: "min(95vw, 500px)",
    }}
    >

      <h1 style={{fontWeight:"700", marginBottom:"8px", position:"relative", bottom:"50px", right:"20px"}}>
      <img src="/favicon.png" alt="Logo" style={{height:"140px", position:"relative", top:"52px"}} />
      Climatix
    </h1>

<p style={{opacity:0.85, marginBottom:"25px"}}>
    Beautiful weather forecasts at your fingertips
</p>

      <p className="subtitle">
        Get real-time weather information from anywhere in the world.
      </p>

      <SearchBox updateInfo={updateInfo} />

      <InfoBox info={weatherInfo} />

    </div>
  );
}