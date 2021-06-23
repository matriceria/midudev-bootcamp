import React, { useState } from 'react'

const Header=(props)=>{
  return <h1>{props.name}</h1>
}
const Statistic=(props)=>{
  if(props.text==="positive"){
    return(
      <tr><td>{props.text} {props.value} %</td></tr>
    )
  }
  return (
    <tr><td>{props.text} {props.value}</td></tr>
  )
}

const Statistics =(props)=>{
  const total= props.clicks.good+props.clicks.neutral+props.clicks.bad
  const average = (props.clicks.good*1+props.clicks.bad* -1)/total
  const positive = props.clicks.good*(100/total)

  if (total===0){
    return(
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={props.clicks.good}/>
          <Statistic text="neutral" value={props.clicks.neutral}/>
          <Statistic text="bad" value={props.clicks.bad}/>
          <Statistic text="all" value={total}/>
          <Statistic text="average" value={average}/>
          <Statistic text="positive" value={positive}/>
        </tbody>
      </table>
    </div>

  )
}
const Button =(props)=>{
  return(
  <button onClick={props.onClick}>
    {props.text}
  </button>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const handleGoodclic =()=>{
    setClicks({
      ...clicks,
      good: clicks.good+1,
    })
    
  }
  const handleNeutralclic =()=>{
    setClicks({
      ...clicks,
      neutral: clicks.neutral+1,
    })
    
  }
  const handleBadclic =()=>{
    setClicks({
      ...clicks,
      bad: clicks.bad+1,
    })
    
  }
  return (
    <div>
      <Header name="Give feedback"></Header>
      <Button onClick={handleGoodclic} text ='good'></Button>
      <Button onClick={handleNeutralclic} text ='Neutral'></Button>
      <Button onClick={handleBadclic} text ='bad'></Button>
      <Header name="Statistics"></Header>
      <Statistics clicks={clicks}></Statistics>

    </div>
  )
    
  
  
}




export default App