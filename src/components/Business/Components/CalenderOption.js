import React,{useState} from "react";
import "./CalenderOption.css";
import { SlCalender } from "react-icons/sl";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ThemeProvider } from "styled-components";
import { format } from 'date-fns'

import { createTheme } from '@mui/material/styles'
const CalenderOption = ({setValue=()=>{}, currValue='' }) => {

const newTheme = (theme) => createTheme({
  ...theme,
  components: {
    MuiPickersToolbar: {
      styleOverrides: {
        root: {
          color: '#fff',
          borderRadius: 8,
          borderWidth: 2,
          borderColor: '#fff',
          border: '2px solid',
          backgroundColor: '#fff',
        }
      }
    }
  }
})
  return (
    <ThemeProvider theme={newTheme}>
      <DatePicker value={currValue} onChange={(newValue) => {
        const formattedDate = format(newValue.$d, 'yyyyMMdd');
        setValue(formattedDate)
        }}  />
    </ThemeProvider>
      

    // <div className="calender__option">
    //   {/* <p>Select</p> */}
    //   <div >
    //   {/* <DatePicker style={{backgroundColor: 'red', color:'red', }}  selected={startDate} onChange={(date) => setStartDate(date)}  /> */}
    //   </div>
    //   <SlCalender className="calender" />
    // </div>
  );
};

export default CalenderOption;
