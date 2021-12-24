import React, { useState } from 'react'
import Select from 'react-select'


const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  {value: "grapes", label: "Виноград"}
]

export const SelectCom = () => {
  const [selectValue, setSelectValue] = useState(null)
  const onClickSelect = (v) => {
    setSelectValue(v.label)
  }
  return(
    <div style={{width: "300px"}}>
      <Select value={selectValue} options={options} onChange={onClickSelect}/>
      {selectValue}
    </div>
  )
}