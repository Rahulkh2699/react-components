import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { useState } from "react";
import { Icon } from "@material-ui/core";
import "./datepicker.scss";

const SingleDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    console.log(date);
    setSelectedDate(date);
  };

  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          error
          disableToolbar="true"
          label="Select date"
          inputVariant="outlined"
          format="dd/MM/yyyy"
          variant="inline"
          // autoOk
          onYearChange={(R) => console.log(R)}
          animateYearScrolling
          value={selectedDate}
          onChange={handleDateChange}
          keyboardIcon={
            selectedDate ? (
              <Icon>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Iconly/Bold/Calendar">
                    <g id="Calendar">
                      <path
                        id="Calendar_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.4109 2.76862L16.4119 3.51824C19.1665 3.73414 20.9862 5.6112 20.9891 8.48975L21 16.9155C21.0039 20.054 19.0322 21.985 15.8718 21.99L8.15189 22C5.0112 22.004 3.01482 20.027 3.01087 16.8796L3.00001 8.55272C2.99606 5.65517 4.75153 3.78311 7.50618 3.53024L7.50519 2.78061C7.5042 2.34083 7.83002 2.01 8.26445 2.01C8.69887 2.009 9.02469 2.33883 9.02568 2.77861L9.02666 3.47826L14.8914 3.47027L14.8904 2.77062C14.8894 2.33084 15.2152 2.001 15.6497 2C16.0742 1.99901 16.4099 2.32884 16.4109 2.76862ZM4.52052 8.86156L19.4687 8.84157V8.49175C19.4262 6.34282 18.3481 5.21539 16.4129 5.04747L16.4139 5.81709C16.4139 6.24687 16.0792 6.5877 15.6546 6.5877C15.2202 6.5887 14.8934 6.24887 14.8934 5.81909L14.8924 5.00949L9.02768 5.01749L9.02866 5.82608C9.02866 6.25687 8.70383 6.5967 8.26941 6.5967C7.83498 6.5977 7.50818 6.25887 7.50818 5.82808L7.50719 5.05847C5.5819 5.25137 4.51658 6.3828 4.51954 8.55072L4.52052 8.86156ZM15.2383 13.4043V13.4153C15.2482 13.8751 15.6233 14.2239 16.0785 14.2139C16.5228 14.2029 16.8772 13.8221 16.8674 13.3623C16.8466 12.9225 16.4902 12.5637 16.0469 12.5647C15.5927 12.5747 15.2373 12.9445 15.2383 13.4043ZM16.0541 17.892C15.5999 17.882 15.2336 17.5032 15.2326 17.0435C15.2227 16.5837 15.5871 16.2029 16.0412 16.1919H16.0511C16.5152 16.1919 16.8913 16.5707 16.8913 17.0405C16.8923 17.5102 16.5171 17.891 16.0541 17.892ZM11.1719 13.4203C11.1916 13.88 11.5678 14.2389 12.022 14.2189C12.4663 14.1979 12.8207 13.8181 12.801 13.3583C12.7901 12.9085 12.4248 12.5587 11.9805 12.5597C11.5263 12.5797 11.1709 12.9605 11.1719 13.4203ZM12.0259 17.8471C11.5717 17.8671 11.1965 17.5082 11.1758 17.0485C11.1758 16.5887 11.5302 16.2089 11.9844 16.1879C12.4287 16.1869 12.795 16.5367 12.8049 16.9855C12.8256 17.4463 12.4702 17.8261 12.0259 17.8471ZM7.10337 13.4553C7.12312 13.915 7.49929 14.2749 7.95346 14.2539C8.39776 14.2339 8.75221 13.8531 8.73148 13.3933C8.7216 12.9435 8.35629 12.5937 7.91101 12.5947C7.45684 12.6147 7.10239 12.9955 7.10337 13.4553ZM7.95751 17.8521C7.50334 17.8731 7.12816 17.5132 7.10742 17.0535C7.10644 16.5937 7.46187 16.2129 7.91605 16.1929C8.36034 16.1919 8.72664 16.5417 8.73652 16.9915C8.75725 17.4513 8.4028 17.8321 7.95751 17.8521Z"
                        fill="#FFCD2C"
                      />
                    </g>
                  </g>
                </svg>
              </Icon>
            ) : (
              <Icon>
                {" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.0918 9.40421H20.9157"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.4429 13.3097H16.4522"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0054 13.3097H12.0147"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.55818 13.3097H7.56744"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.4429 17.1962H16.4522"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.0054 17.1962H12.0147"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.55818 17.1962H7.56744"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.0433 2V5.29078"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.96515 2V5.29078"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.2383 3.57922H7.77096C4.83427 3.57922 3 5.21516 3 8.22225V17.2719C3 20.3263 4.83427 22 7.77096 22H16.229C19.175 22 21 20.3546 21 17.3475V8.22225C21.0092 5.21516 19.1842 3.57922 16.2383 3.57922Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Icon>
            )
          }
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};

export default SingleDatePicker;
