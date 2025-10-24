import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const cold_url="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const hot_url="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const rain_url="https://images.unsplash.com/photo-1498847559558-1e4b1a7f7a2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="InfoBox">
         <div className="cardContainer">
             <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }}  
            image={
              info.humidity>80
              ?rain_url
              :(info.temp>15)
              ?hot_url
              :cold_url
            }  
            title="baarish" 
            />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity>80
              ?(<ThunderstormIcon />)
              :(info.temp>15)
              ?(<WbSunnyIcon />)
              :(<AcUnitIcon />)
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>Temperature={info.temp}&deg;C</p> 
        <p>Humidity={info.humidity}</p>
        <p>Min Temp={info.tempMin}&deg;C</p>
        <p>Max Temp={info.tempMax}&deg;C</p>
        <p>
            The weather is <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C
        </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
  );
}