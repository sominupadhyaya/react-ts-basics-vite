import { FC } from "react"


// Prop Types must be declared in the child component which
//receives the props
type PropTypes = {
  hello : string
  age ?: number // use this to declare an optional value
  // Using with function
  setArrayValue : (array:number[]) => void
}

  type OnClickHandler = (e : React.MouseEvent<HTMLButtonElement>) => void //syntax for event handler function i.e onClick handler


const Child:FC <PropTypes> = ({hello , setArrayValue}) => {
  const array:number[] = []  
  const handleClick:OnClickHandler = (e) => setArrayValue(array) 
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