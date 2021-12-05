import * as React from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function Navber(){

    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const a_Style = {
        padding: "0 10px",
        borderRight: "1px solid black"
    }
        
    const wrap_Style = {
        height: "50px",
        background: "bisque",
        display: "flex",
        alignItems: "center",
        border: "3px solid black"
    }

    return(
        <Box className="navber_wrap" style={wrap_Style}>
        <Tabs
            onChange={handleChange}
            value={value}
            aria-label="Tabs where selection follows focus"
            selectionFollowsFocus
        />

        <Link to="/todo" style={a_Style}><Tab label="Todolist"></Tab></Link>
        <Link to="/drawing" style={a_Style}><Tab label="drawing"></Tab></Link>
        <Link to="/Game" style={a_Style}><Tab label="Game"></Tab></Link>

        </Box>
    );
}


export default Navber;