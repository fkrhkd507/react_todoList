import * as React from 'react';
import "../components/Todolist/Todolist.css";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Todolist(){
    // let [count, count_change] = useState(1);

    return(
        <div className="wrap">
            <div className="todolist_wrap">

                <div className="weather_wrap">
                    <Box sx={{ flexGrow: 1 }}>
                        <AppBar position="static">
                            <Toolbar>
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    <div className="weather">weather</div>
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


export default Todolist;