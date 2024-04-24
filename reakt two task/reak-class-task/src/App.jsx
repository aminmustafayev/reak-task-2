import Header from './Companents/Header/Header'
import Main from './Companents/Main/Main'
import data from './data'


function App() {
console.log(data)
  return (

    <>
    <Header/>
    <Main data={data}/>

    </>
  )
}

export default App
