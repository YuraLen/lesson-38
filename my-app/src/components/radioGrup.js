import React, { useState } from "react"
import { RadioGroup, Radio } from 'react-radio-group'

export const RadioGroupCom = () => {

  const [radioValue, setRadioVelue] = useState(null)

  const onChangeRadio = (v) => {
    console.log("value", v);
    setRadioVelue(v)
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <RadioGroup name="fruit" onChange={onChangeRadio}>
        <Radio value="apple" />Apple
        <Radio value="orange" />Orange
        <Radio value="watermelon" />Watermelon
      </RadioGroup>
      {radioValue}
    </div>
  )
} 