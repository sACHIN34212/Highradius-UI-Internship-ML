import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@material-ui/core';


export default function Delete(props) {


    const { open, close } = props

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
            <Dialog
                open={open}
                fullWidth
                
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >


                <DialogContent style={{ backgroundColor: "#2b3e4d" }}>
                    <DialogTitle id="alert-dialog-title" style={{ color: 'white' }}>
                        {"Delete Records ?"}

                    </DialogTitle>
                    <DialogContentText id="alert-dialog-description" style={{ display: 'flex', flexDirection: 'column',color:'white' }}>
                    {"Are you sure you want to delete these record[s] ?"}

                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ backgroundColor: "#2b3e4d" }}>
                    <Button variant="outlined" style={{ color: "white", width: "720px", borderColor: "white" }} onClick={close}>CANCEL</Button>
                    <Button variant="outlined" style={{ color: "white", width: "720px", borderColor: "white" }} onClick={close} autoFocus>DELETE</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}