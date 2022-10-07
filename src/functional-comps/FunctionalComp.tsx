
type AppProps  = {
    message : string
}
//can be defined basically like this
//doesnt return error if something other than JSX element is returned

const FunctionalComp = ({message} : AppProps) =><div>{message}</div>

//can also be defined like this
//helps to return error if you return  something other than JSX element from component  
const FunctionalCompWithJSX = ({message} : AppProps) : JSX.Element => <div>{message}</div>



export {FunctionalCompWithJSX , FunctionalComp} //can also export like this!