import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "fae15a6663143240d921377b5be5b7df";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();
            let result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result.city);
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        event.preventDefault();

        try {
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        }
        catch(err) {
            setError(true);
        }
    };

    return (
    <div className="SearchBox">
        <form onSubmit={handleSubmit}>

            <TextField
                className="search-input"
                id="city"
                label="Search any city..."
                variant="outlined"
                required
                fullWidth
                value={city}
                onChange={handleChange}
            />

            <br />

            <Button
                className="search-btn"
                variant="contained"
                type="submit"
            >
                🔍 Search
            </Button>

            {error && (
                <p className="error-msg">
                    City not found. Please try again.
                </p>
            )}

        </form>
    </div>
);
}