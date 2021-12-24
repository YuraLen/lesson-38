import React from 'react'
import './App.css';
import { SelectCom } from "./components/select"
import { SliderCom } from "./components/slider"
import { RadioGroupCom } from "./components/radioGrup"
import { DemoCarousel } from "./components/carousel"
import { CalendarCom } from "./components/calendar"
// import { ClockComp } from "./components/clock"

export const App = () => {
  return (
    <div style={{ margin: "20px" }}>
      <SelectCom />
      <SliderCom />
      <RadioGroupCom />
      <DemoCarousel />
      <CalendarCom />
      {/* <ClockComp/> */}
    </div>
  )
}