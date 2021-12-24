// import Calendar from 'rc-calendar';
// import React from 'react';
// import ReactDOM from 'react-dom';

// export const CalendarCom = () => {
//   return(
//     <div>
//       <Calendar/>
//     </div>
//   )
// }


import 'rc-calendar/assets/index.css';
import React, { useState } from 'react';
import Calendar from 'rc-calendar';



import 'moment/locale/zh-cn';
import 'moment/locale/en-gb';

const clearPath = 'M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 ' +
  '290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0' +
  ' 335.8-115 394.6-276.1 1.5-4.2-0.7-8.9-4.9-10.3l-56.7-19.5c-4.1-1.4-8.6' +
  ' 0.7-10.1 4.8-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4-31.6' +
  ' 31.6-68.4 56.4-109.3 73.8-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133' +
  '.8-27-40.9-17.3-77.7-42.1-109.3-73.8-31.6-31.6-56.4-68.4-73.7-109.4-17.9-42' +
  '.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6' +
  ' 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5' +
  ' 9.1 133.8 27 40.9 17.3 77.7 42.1 109.3 73.8 9.9 9.9 19.2 20.4 27.8' +
  ' 31.4l-60.2 47c-5.3 4.1-3.5 12.5 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9' +
  '-7.7l0.8-180.9c-0.1-6.6-7.8-10.3-13-6.2z';

const svg = (
  <i style={{
    fontStyle: 'normal',
    zIndex: '9999',
    position: 'absolute',
    right: '6px',
    cursor: 'pointer',
    overflow: 'hidden',
    width: '20px',
    height: '20px',
    textAlign: 'center',
    lineHeight: '1',
    top: '10px',
    margin: '0',
    fontSize: '12px',
    color: '#aaa',
    display: 'inline-block',
  }}
  >
    <svg
      viewBox="0 0 1024 1024"
      width="1em"
      height="1em"
      fill="currentColor"
      style={{ verticalAlign: '-.125em' }}
    >
      <path d={clearPath} p-id="5827"></path>
    </svg>
  </i>
);



export const CalendarCom = () => {
  
  const [calendarValue, setCalendarValue] = useState(null)

  const onChangeCalendar = (v) => {
    setCalendarValue(v._d.toISOString().substring(0, 10))
  }

  return(
    <div>
      <Calendar
        mode={"date"}
        clearIcon={svg}
        onChange={onChangeCalendar}
        type={Date}
      />
      {calendarValue}
    </div>

  )
}