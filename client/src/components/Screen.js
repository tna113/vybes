import React from "react"
import {Container} from "@mui/material";
import { colors } from "../assets/colors";

const container = {
    backgroundColor: colors.green.green,
    height: '100%',
    padding: '32px 32px',
}

export function Screen({children, sx}) { // eslint-disable-line react/prop-types
    return (
        <Container maxWidth sx={{...sx, ...container}}>
            {children}
        </Container>
    )
}