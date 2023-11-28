import React from 'react'
import {ButtonGroup,Button,Text} from "@chakra-ui/react"
const Pagination = ({ currentPage, totalPages, onChange }) => {
    const handleNext = (page) => {
        onChange(prev => prev + 1)
    }
    const handlePrev = (page) => {
        onChange(prev => prev - 1)
    }
    return (
        <div>
            <ButtonGroup mt={4} spacing={4} display={"flex"} alignItems={"center"} margin={"auto"} justifyContent={"center"} >
                <Button onClick={handlePrev}>Prev</Button>
                <Text>{currentPage}</Text>
                <Button onClick={handleNext}>Next</Button>
            </ButtonGroup>
        </div>
    )
}

export default Pagination
