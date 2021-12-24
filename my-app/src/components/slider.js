import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useState } from 'react';

export const SliderCom = () => {
  const [sliderValue, setSliderValue] = useState(0)

  const onChangeSlider = (v) => {
    console.log("value", v);
    setSliderValue(v)
  }
  return (
    <div style={{width: "300px", marginTop: "50px"}}>
      <Slider max={50} value={sliderValue} onChange={onChangeSlider}/>
      {sliderValue}
    </div>
  )
}