import { Alert, Snackbar } from '@mui/material'
import React, { useState } from 'react'

export const AlertNotification : React.FC = () => {

    const [showAlert,setShowAlert] = useState(true)

    const toggleAlert = () => {
        setShowAlert(prev => prev ? false : true)
    }

  return (
    <Snackbar open={showAlert} autoHideDuration={6000} onClose={toggleAlert}>
        <Alert onClose={toggleAlert} severity="warning" sx={{ width: '100%' }}>
          Сайт в разработке
        </Alert>
    </Snackbar>
  )
}
