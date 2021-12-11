import React, { useEffect, useState } from 'react';
import "../components/Todolist/Todolist.css";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';

function Todolist(){
    let [weather, change_weather] = useState(0);
    let [weather_icon, change_weather_icon] = useState();
    let [weather_description, change_weather_description] = useState();

    function Show_weather(){
        if(!navigator.geolocation){
            change_weather("X");
            return;          
        }
    
        navigator.geolocation.getCurrentPosition(
            (position) => {
                Get_weather(position.coords.latitude, position.coords.longitude)
                .then((weather) => {
                    console.log(weather);
                    change_weather(weather.temper);
                    change_weather_icon(weather.icon);
                    change_weather_description(weather.description);
                });
            }
        );
    };

    async function Get_weather(lat, lon){
        let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=kr&appid=c8899082aee3315b60daa2a1da712285`)
        .then((res) => {return res.json()})
        .then((json) => {
            let weather = {
                temper : ((json.main.temp - 273.15).toFixed(0)),
                icon : `http://openweathermap.org/img/w/${json.weather[0].icon}.png`,
                description : json.weather[0].description
            };

            return weather;
        })
        .catch((error) => {
            console.log(error);
        });

        return weather;
    }

    useEffect(() => {
        Show_weather();
    }, [weather]);

    return(
        <div className="wrap">
            <div className="todolist_wrap">

                <div className="weather_wrap">
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    <div className="weather">
                                        <span className="temper">{weather}&#8451;</span> 
                                        <span className="weather_desc">{weather_description}</span> 
                                        <span className="weather_icon"><img src={weather_icon}></img></span>
                                        </div>
                                </Typography>
                                {/* <Button color="inherit">Login</Button> */}
                            </Toolbar>
                        </AppBar>
                    </Box>
                </div>

                <div className="todo_list_body">
                <h2>To do list</h2>
                    <div className="todo_input">
                        <Box
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                            <TextField id="standard-basic" label="What's the to do?" variant="standard" />
                        </Box>
                    </div> 
                    
                    <div className="list_wrap">
                        <ul className="todo_list">
                            <li>Kill'em with the bass</li>
                            <li>Dead beats Listen up</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Todolist;