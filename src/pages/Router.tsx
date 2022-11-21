import { Route, Routes } from 'react-router-dom'

import { BarchartPage } from './BarchartPage'
import { CalendarPage } from './Calendar/Calendar'
import { CreateUser } from './CreateUser/CreateUser'
import { Dashboard } from './Dashboard'
import { Delivery } from './Delivery'
import { Layout } from 'components/Layout/Layout'
import { LinechartPage } from './LinechartPage'
import { Orders } from './Orders'
import { Products } from './Products'
import { RadarchartPage } from './RadarchartPage'
import { Users } from './Users'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/form" element={<CreateUser />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/barchart" element={<BarchartPage />} />
        <Route path="/radarchart" element={<RadarchartPage />} />
        <Route path="/linechart" element={<LinechartPage />} />
      </Route>
    </Routes>
  )
}
