
import './App.css';
// import  { useState,useEffect } from "react"
// import axios from "axios"
// import CoinTable from './CoinTable';
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tfoot,
//   Tr,
//   Th,
//   Td,
//   TableCaption,
//   TableContainer,
// } from '@chakra-ui/react'
import Homepage from './Components/Homepage';
function App() {



  {/* //   const [coin,setCoin] = useState([])

//   useEffect(()=>{ */}
  //     const fetchData = async()=>{
  //       try {
  //         const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR")
  //         setCoin(res.data)
  //         console.log(res)
  //       } catch (error) {
  //         console.log(error)
  //       }
  //     }
  //     fetchData()
  //   },[])

  //   return (
  //     <div className="App">
  //       <TableContainer>
  //   <Table variant='simple'>
  //   <Thead Style={{backgroundColor:"yellow"}}>
  //       <Tr Style={{backgroundColor:"yellow"}}>
  //         <Th>Coin</Th>
  //         <Th>Current Price</Th>
  //         <Th>24th change</Th>
  //         <Th>Market Cap</Th>
  //       </Tr>
  //     </Thead>
  //     </Table>
  //     </TableContainer>
  //    { coin.map((el)=>{
  // return <CoinTable key={el.id} {...el}/>
  //    })}
  return (
    <div>
      <Homepage />
    </div>
  )
}

export default App;
