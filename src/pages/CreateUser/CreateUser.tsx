import { Button, Snackbar } from 'components/Elements'
import { useEffect, useState } from 'react'

import { Alert } from '@mui/material'
import { Input } from 'components/Form'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { useOutletContext } from 'react-router-dom'
import { useOutletContextType } from 'GlobalTypes'

export const CreateUser = () => {
  const { setHeader } = useOutletContext<useOutletContextType>()
  const { register, handleSubmit, control } = useForm()
  const [open, setOpen] = useState('')

  useEffect(() => {
    setHeader({
      title: 'CREATE USER',

      desc: 'Create a New User Profile',
    })
  }, [])

  const handleClose = () => {
    setOpen('')
  }

  const handleUserSubmit = (data: unknown) => {
    console.log(data)
    setOpen('Successfully Created User')
  }

  return (
    <Container onSubmit={handleSubmit((data) => handleUserSubmit(data))}>
      <Snackbar
        open={open ? true : false}
        autoHideDuration={6000}
        onClose={handleClose}
        message={<Alert>{open}</Alert>}
      />
      <InputGroup>
        <Input
          control={control}
          {...register('Firstname', { required: true })}
          placeholder="First name"
          variant="filled"
        />
        <Input
          control={control}
          {...register('Lastname', { required: true })}
          placeholder="Last name"
          variant="filled"
        />
      </InputGroup>
      <Input
        control={control}
        {...register('Email', { required: true })}
        placeholder="Email"
        type="email"
        variant="filled"
      />
      <Input
        control={control}
        {...register('ContactNumber', { required: true })}
        placeholder="Contact Number"
        variant="filled"
      />
      <Input
        control={control}
        {...register('Address1', { required: true })}
        placeholder="Address 1"
        variant="filled"
      />
      <Input
        control={control}
        {...register('Address2')}
        placeholder="Address 2"
        variant="filled"
      />
      <FormButton type="submit">Create New User</FormButton>
    </Container>
  )
}

const FormButton = styled(Button)`
  align-self: flex-end;
  padding: 1em 2em !important;
`

const InputGroup = styled.div`
  display: flex;
  gap: 30px;
`

const Container = styled.form`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`
