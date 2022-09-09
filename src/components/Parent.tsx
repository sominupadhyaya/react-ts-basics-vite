import { FC } from "react"
import Child from "./Child"

const Parent: FC = () => {
  return (
    <>
    <Child hello="hello"/>
    </>
  )
}

export default Parent