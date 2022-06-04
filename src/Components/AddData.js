import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@material-ui/core';
import { height } from '@mui/system';


export default function AddData(props) {


    const { open, close } = props

    return (
        <div>
            {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
            <Dialog
                open={open}
                fullWidth
                maxWidth="xl"
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >


                <DialogContent style={{ backgroundColor: "#2b3e4d" }}>
                    <DialogTitle id="alert-dialog-title" style={{ color: 'white' }}>
                        {"Add"}
                    </DialogTitle>
                <DialogContentText id="alert-dialog-description" style={{ display: 'flex', flexDirection: 'column',height:"350px",justifyContent:"space-evenly" }}>
                        <div style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly'}}>
                            <TextField
                                style={{ backgroundColor: 'white', width: "23%",borderRadius:'5px' }}
                                required
                                id="outlined-required"
                                label="Business Code" />
                                <TextField
                                style={{ backgroundColor: 'white', width: "23%",borderRadius:'5px' }}
                                required
                                id="outlined-required"
                                label="Customer Number" />
                            <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                required
                                id="outlined-required"
                                type = "date"
                                InputLabelProps={{shrink:true}}
                                label="Clear Date" />
                                
                            <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                required
                                id="outlined-required"
                                label="Business Year" /></div>
                        <div style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly'}}>
                        <TextField
                            style={{ backgroundColor: 'white', width: "23%",borderRadius:'5px',borderRadius:'5px'}}
                            required
                            id="outlined-required"
                            label="Document Id" />
                            <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'6px'}}
                                required
                                id="outlined-required"
                                type = "date"
                                InputLabelProps={{shrink:true}}
                                label="Posting date" />
                                <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'6px'}}
                                required
                                id="outlined-required"
                                type = "date"
                                InputLabelProps={{shrink:true}}
                                label="Document Create date" />
                                <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                required
                                id="outlined-required"
                                type = "date"
                                InputLabelProps={{shrink:true}}
                                label="Due Date" />
                                </div>
                        <div style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly' }}>
                            <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                required
                                id="outlined-required"
                                label="Invoice Currency" />
                            <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                required
                                id="outlined-required"
                                label="Document Type" />
                            <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                required
                                id="outlined-required"
                                label="Posting Id" />
                            <TextField
                                style={{ backgroundColor: 'white', width: "23%",borderRadius:'5px' }}
                                required
                                id="outlined-required"
                                label="Total Open Amount" />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row',justifyContent: 'space-evenly' }}>
                        <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                required
                                id="outlined-required"
                                type = "date"
                                InputLabelProps={{shrink:true}}
                                label="Baseline Create Date" />
                            <TextField
                                style={{ backgroundColor: 'white', width: "23%",borderRadius:'5px' }}
                                required
                                id="outlined-required"
                                label="Customer Payment Terms" />
                            <TextField
                                style={{ backgroundColor: 'white', width: "23%" ,borderRadius:'5px'}}
                                required
                                id="outlined-required" 
                                label="Invoice Id" />
                                <div style={{ width: "23%" , opacity:"0"}}>

                                </div>
                        </div>
                    </DialogContentText>
                </DialogContent>
                <DialogActions style={{ backgroundColor: "#2b3e4d" }}>
                    <Button variant="outlined" style={{ color: "white", width: "720px", borderColor: "white" }} onClick={close}>Add</Button>
                    <Button variant="outlined" style={{ color: "white", width: "720px", borderColor: "white" }} onClick={close} autoFocus>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}