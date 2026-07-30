import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    const HOT_URL = "https://media.istockphoto.com/id/2231635523/photo/hot-weather.webp?a=1&b=1&s=612x612&w=0&k=20&c=xuci2UycU7JDwKAigw9etj23dCsSzE4qDQCfFMyTI0Q=";
    const COLD_URL = "https://images.unsplash.com/photo-1638359662007-997ab22d68a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbGQlMjB3ZWF0aGVyJTIwaW1hZ2VzfGVufDB8fDB8fHww";
    const RAINY_URL = "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW55JTIwd2VhdGhlciUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                title={info.weather}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {info.city} &nbsp;
                    <span className="weather-icon">
    {info.humidity > 80
        ? <ThunderstormIcon fontSize="large"/>
        : info.temp > 15
        ? <SunnyIcon fontSize="large"/>
        : <AcUnitIcon fontSize="large"/>
    }
</span>
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                    <p>🌡️ Temperature: <b>{info.temp}°C</b></p>

<p>💧 Humidity: <b>{info.humidity}%</b></p>

<p>⬇️ Minimum: <b>{info.tempMin}°C</b></p>

<p>⬆️ Maximum: <b>{info.tempMax}°C</b></p>

                    <p>
    🌍 Weather: <span className="weather-highlight">{info.weather}</span>
</p>

<p>
    Feels Like: <strong>{info.feelsLike}&deg;C</strong>
</p>
                </Typography>
            </CardContent>
            </Card>
            </div>
        </div>
    )
}