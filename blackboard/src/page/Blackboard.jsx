import React from 'react'
import './Blackboard.css';
import { useState } from 'react';


function Blackboard() {
  const [text, setText] = useState('')

  const onChangeText = (e)=>{
      setText(e.target.value)
  };

  return(
    <div id='Container'> 
        <p id='text'>디지털 칠판</p>
        <div id='Box'>{text}</div>   {/*{text} == 변수임을 표기 */}
        <input id='textBox' onChange={onChangeText} placeholder='입력해주세요' />
    </div>
  );
}

export default Blackboard;
