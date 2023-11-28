import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

const CoinTable = ({image,name,symbol,current_price,market_cap,price_change_percentage_24th}) => {
  return (
    <div>
      <TableContainer>
  <Table variant='simple' style={{backgroundColor:"black",color:"white"}}>
  
    <Tbody>
      <Tr>
        <Td>
            <img style={{width:"10%"}} src={image} alt="" />
            <span style={{display:"flex",alignItem:"center",flexDirection:"column"}}>{symbol} {name}</span>
            </Td>
        <Td> ₹ {current_price}</Td>
        <Td>{price_change_percentage_24th.toFixed(2)}%</Td>
        <Td> ₹ {market_cap}</Td>
      </Tr>

    </Tbody>
    </Table>
    </TableContainer>
    </div>
  )
}

export default CoinTable

