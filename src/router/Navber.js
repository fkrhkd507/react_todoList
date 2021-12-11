import * as React from 'react';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Navber(){


    const a_Style = {
        padding: "0 10px",

    }
        
    const wrap_Style = {
        height: "50px",
        display: "flex",
        alignItems: "center",
    }

    return(
        <>
            <div className="navber_wrap" style={wrap_Style} sw={{width: '100%'}}>
                <Stack direction="row" spacing={2}>
                    <Link to="/todo" value="Todolist" style={a_Style} label="Todolist"><Button>Todolist</Button></Link>
                    <Link to="/drawing" value="drawing" style={a_Style} label="drawing"><Button>Drawing</Button></Link>
                    <Link to="/Game" value="Game" style={a_Style} label="Game"><Button>Game</Button></Link>
                </Stack>
            </div>
        </>
    );
}


export default Navber;