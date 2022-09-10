import { FC , useState } from "react"
import Child from "./Child"

const Parent: FC = () => {
  const [arr, setArr] = useState<number[]>([])
  //takes the empty array initalized in child and then makes it it's own state
  const setArrayValue = () => setArr(array => [...array, array.length+1]) 
  return (
    <>
    <Child setArrayValue = {setArrayValue} hello="hello"/>
    <div>{JSON.stringify(arr)}</div>
    </>
  ) 
}

export default Parent