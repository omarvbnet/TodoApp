import Head from 'next/head'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import axios from "axios";
import Icon from '@mui/material/Icon';
import styles from '../styles/Home.module.css'
import TablePage from '../comp/tablePage'
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Home() {
  const [salesValue, setSalesValue] = React.useState(dayjs().format("YYYY-MM-DD"));
  const [costsValue, setCostsValue] = React.useState(dayjs());
  const [costsTextValue, setCostsTextValue] = React.useState(dayjs(''));
  const [salesTextValue, setSalesTextValue] = React.useState(dayjs(''));

  const handleSalesValueChange = (newValue) => {
    setSalesValue(newValue);
  };
  const handleCostsValueChange = (newValue) => {
    setCostsValue(newValue);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const onSalesTextChange = e => setSalesTextValue(e.target.value);
  const onCostsTextChange = e => setCostsTextValue(e.target.value);
  const [currentUser, getUser] = React.useState('');
  React.useEffect(() => {
   
      let user = localStorage.getItem('user');
      getUser(user);
        console.log("LocalState: ", user)
    
}, []);
 
 function closeDailog(){
   setOpen(false);
 }
 function logout(){
     localStorage.removeItem('isLoggden');
     location.reload();
 }
  async function onSubmit() {
   

    try {
      const body = {
        salesDate:salesValue,
        salesCost:salesTextValue,
        costs:costsTextValue,
        costDate:costsValue.format("YYYY-MM-DD"),
      }
     
      console.log(body);
    const res = await axios.post('/api/addData', body);
    
    if (res.status === 201) {
      //setOpen(false);
      console.log(res)
      location.reload();
  }
    }catch (err){
      console.log(err.message)
      
    }
   
  
  };
  
  
  return (
    <div    className={styles.container}>
      <div style={{ 
        width:'100%',
        placeContent:'space-between',
        display:'flex'
       }}>
      <Button onClick={()=>logout()}>logout</Button>
      <Button >{currentUser}</Button>
     
      </div>
      <main className={styles.main}>
        
        <h6 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Archive!</a>
        </h6>

        <p className={styles.description}>
        
         
        </p>

        <div  dir ='rtl' style={{ 
          width:'90%',
          color:'white',
          textColor:'white'
         
         }}>
        <TablePage/>
        <Box  >
      
      <Fab  className="classes.fab"  color="secondary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
    </Box>
        </div>
        <div style ={{ 
           alignItems:'right',
           width:'70%',
           alignContent:'right',
           padding:10,
           display:'grid',
           height:'60%',
           justifyContent:'end'
        }}>
           <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
      
        aria-describedby="alert-dialog-slide-description"
      >
       <div
       dir = 'rtl'
        style={{ 
          width:'100%',
         }}
       >
       <Button onClick={()=> closeDailog()} style={{ width:30 }}> <CloseOutlinedIcon/></Button>
       </div>
        <DialogTitle>{"Add Your Data"}</DialogTitle>
        
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <form onSubmit ={onSubmit}>
        <div style={{ 
          display:'grid',
          width:'100%',
          height:'70%'
         }}>
       
        <TextField
         dir ='rtl'
          onChange={onSalesTextChange}
          required
        style={{ 
          padding:8,
         }} id="outlined-basic" label=" المبيعات" variant="outlined" />
         <TextField 
         dir ='rtl'
          onChange={onCostsTextChange}
          required
         style={{ 
          padding:8,
         }}  id="outlined-basic" label=" المصروفات" variant="outlined" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div style={{ 
          padding:"8px"
         }}>

        </div>
        
        <MobileDatePicker
          dir ='rtl'
          label="تاريخ المبيعات"
          inputFormat='YYYY-MM-DD'
          value={salesValue}
          width = '30px'
          
          onChange={handleSalesValueChange}
          renderInput={(params) => <TextField style={{ 
            padding:4,
           }}  {...params} />}
        />
        <div style={{ 
          padding:"8px",
         
         }}>

        </div>
        
         <MobileDatePicker
          dir ='rtl'
          label="تاريخ المصروفات"
          inputFormat='YYYY-MM-DD'
          value={costsValue}
          width = '30px'
          onChange={handleCostsValueChange}
          renderInput={(params) => <TextField style={{ 
            padding:4,
           }}  {...params} />}
        />
   
    </LocalizationProvider>
        
    <Button  type="submit" value="send" >Add</Button>
  
        </div>
        </form>
        </DialogActions>
      </Dialog>
      <div style={{ 
        paddingLeft:40,
       
       }}>
       
      </div>
     
      </div>
      </main>

     
    </div>
  )
 
}





