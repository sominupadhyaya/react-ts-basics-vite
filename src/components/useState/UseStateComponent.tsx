import React, {useState} from "react"
const UseState = () => {

  type OnClickHandler = (e : React.MouseEvent<HTMLButtonElement>) => void

  const [count , setCount] = useState<number>(0)
  const handleClick: OnClickHandler = (e) => setCount(c => c+1)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  )
}

export default UseState