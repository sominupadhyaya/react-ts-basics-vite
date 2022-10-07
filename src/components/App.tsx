import Parent from "./props-example/Parent"
import UseState from "./useState/UseStateComponent"
import { FunctionalComp } from "../functional-comps/FunctionalComp"
import { FunctionalCompWithJSX } from "../functional-comps/FunctionalComp"

const App = () => {
  return (
    <>
    <Parent />
    <UseState />
    <FunctionalCompWithJSX message="Hello"/>
    <FunctionalComp message="World"/>
    </>
  )
}

export default App