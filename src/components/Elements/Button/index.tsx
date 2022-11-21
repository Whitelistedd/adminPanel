import { Button as MuiButton, ButtonProps } from '@mui/material'
import styled from 'styled-components'

interface TableButtonProps extends ButtonProps {
  delete?: boolean
  children: JSX.Element | JSX.Element[] | string
  icon?: JSX.Element
}

export const Button: React.FC<TableButtonProps> = (props) => {
  return (
    <StyledButton
      removetype={props.delete}
      icon={props.icon}
      {...props}
      variant="contained"
    >
      {props.icon}
      {props.children}
    </StyledButton>
  )
}

const StyledButton = styled(MuiButton)<{
  removetype?: boolean
  icon?: JSX.Element
}>`
  font-size: 12px !important;
  min-width: 150px !important;
  ${({ icon }) =>
    icon &&
    `
    svg {
      width: 20px;
    }
    gap: 5px;
    align-items: end !important;
  `}
`
