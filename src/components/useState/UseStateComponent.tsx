import  {useState} from "react"
const UseState = () => {

  const [count , setCount] = useState<number>(0)
  const handleClick = () => setCount(c => c+1)
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  )
}

export default UseState