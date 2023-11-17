import React, { useState } from "react";
import "./CalenderOption.css";
import { SlCalender } from "react-icons/sl";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ThemeProvider } from "styled-components";
import { format } from "date-fns";
import dayjs from "dayjs";

import { createTheme } from "@mui/material/styles";
const CalenderOption = ({ setValue = () => {}, currValue = "" }) => {
  // const newTheme = (theme) => createTheme({
  //   ...theme,
  //   components: {
  //     MuiPickersToolbar: {
  //       styleOverrides: {
  //         root: {
  //           color: '#fff',
  //           borderRadius: 8,
  //           borderWidth: 2,
  //           borderColor: '#fff',
  //           border: '2px solid',
  //           backgroundColor: '#fff',
  //         }
  //       }
  //     }
  //   }
  // })
  const dateString =
    currValue.length >= 8
      ? currValue.substring(0, 4) +
        "-" +
        currValue.substring(4, 6) +
        "-" +
        currValue.substring(6, 8)
      : "";
  return (
    // <ThemeProvider theme={newTheme}>
    <div style={{ border: "1px solid #404040", borderRadius: "8px" }}>
      <DatePicker
        defaultValue={dayjs(dateString)}
        onChange={(newValue) => {
          // console.log(newValue)
          const formattedDate = format(newValue.$d, "yyyyMMdd");
          setValue(formattedDate);
        }}
        sx={{
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      />
    </div>
    // </ThemeProvider>

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
