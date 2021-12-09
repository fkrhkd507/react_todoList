import React, { useEffect, useState } from 'react';
import "../components/Todolist/Todolist.css";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Todolist(){
    let [weather, weather_change] = useState(0);

    setInterval(() => {
        weather_change(weather, Get_weather());
    }, 10000);

    return(
        <div className="wrap">
            <div className="todolist_wrap">

                <div className="weather_wrap">
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    <div className="weather">weather : {weather}</div>
                                </Typography>
                                <Button color="inherit">Login</Button>
                            </Toolbar>
                        </AppBar>
                    </Box>
                </div>

                <div className="todo_list">
                    todolist
                </div>
            </div>
        </div>
    );
}

function Get_weather(){
    if(!navigator.geolocation) return "X";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=c8899082aee3315b60daa2a1da712285`)
            .then((res) => {return res.json()})
            .then((json) => {
                let temp = ((json.main.temp - 273.15).toFixed(0));
                console.log(temp);
                return temp;
            });
        }
    );

    debugger;
    return ww;
};


Get_weather();

export default Todolist;