import { FC } from "react"


// Prop Types must be declared in the child component which
//receives the props
type PropTypes = {
  hello : string
  age ?: number // use this to declare an optional value
}



const Child:FC <PropTypes> = ({hello}) => {
  return (
    <>
    <h1>
    {hello}
    </h1>
    </>
  )
}

export default Child