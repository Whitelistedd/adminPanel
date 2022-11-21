import { TextField, FilledTextFieldProps } from '@mui/material'
import styled from 'styled-components'
import { Control, Controller } from 'react-hook-form'

interface Props extends FilledTextFieldProps {
  control: Control
  name: string
}

export const Input: React.FC<Props> = ({ name, ...props }) => {
  return (
    <Controller
      name={name}
      {...props}
      control={props.control}
      render={({ field }) => (
        <StyledTextField
          placeholder={props.placeholder}
          variant="filled"
          {...field}
        />
      )}
    />
  )
}

const StyledTextField = styled(TextField)`
  flex: 1;
  .MuiFilledInput-root {
    background-color: #504f4f30;

    &:hover {
      background-color: #504f4f61 !important;
    }
  }

  .Mui-focused {
    background-color: #504f4f61 !important;
  }

  .MuiFilledInput-input {
    padding-top: 16.2px;
    color: white;
    padding-bottom: 16.2px;
    &::placeholder {
      color: white !important;
    }
  }
`
