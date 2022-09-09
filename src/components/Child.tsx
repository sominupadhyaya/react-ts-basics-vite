import { FC } from "react"


type PropTypes = {
  hello : string
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