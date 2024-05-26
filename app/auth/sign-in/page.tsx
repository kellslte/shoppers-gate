import { Button, Link, Stack, TextField } from '@mui/material'
import React from 'react'
import NextLink from 'next/link'

type Props = {}

const SignIn = (props: Props) => {
  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <TextField label="Email" variant="outlined" type="email" />
      <TextField label="Password" variant="outlined" type="password" />
      <Button variant='contained'>Sign In</Button>
      <Link component={NextLink} href="/auth/sign-up" className='self-center'>
        Sign Up
      </Link>
    </Stack>
  )
}

export default SignIn