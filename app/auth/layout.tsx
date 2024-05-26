import { Box } from '@mui/material'
import React from 'react'

type Props = {
    children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
    <Box className="h-screen flex items-center justify-center">
        {children}
    </Box>
  )
}

export default AuthLayout