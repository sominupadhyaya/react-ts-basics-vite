import { FC } from "react"


// Prop Types must be declared in the child component which
//receives the props
type PropTypes = {
  hello : string
  age ?: number // use this to declare an optional value
  // Using with function
  setArrayValue : (array:number[]) => void
}



const Child:FC <PropTypes> = ({hello , setArrayValue}) => {
  const array:number[] = []  
  const handleClick = () => setArrayValue(array) 
  // basically does setArr([] => [...[],[].length+1]) for 1st instance 
    return (
    <>
    <h1>
    {hello}
    </h1>
    <button onClick={handleClick}>Change Array Value</button>   
    </>
  )
}

export default Child