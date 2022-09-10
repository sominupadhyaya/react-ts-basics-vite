import { FC , useState } from "react"
import Child from "./Child"

const Parent: FC = () => {
  const [arr, setArr] = useState<number[]>([])
  const setArrayValue = (array : number[]) =>{
    setArr(array)
  }
  return (
    <>
    <Child setArrayValue = {setArrayValue} hello="hello"/>
    <div>{JSON.stringify(arr)}</div>
    </>
  ) 
}

export default Parent