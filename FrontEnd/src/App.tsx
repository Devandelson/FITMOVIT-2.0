// HOOKS
import { BrowserRouter, Routes, Route } from 'react-router'

// PAGES
import Login from './pages/login/login'
import User_application from './pages/solicitud/user/user_application.tsx'
import Admin_application from './pages/solicitud/institution/admin_application.tsx'

import DashboardHome from './pages/dashboard_gestion/initial/home.tsx'
import UserManage from './pages/dashboard_gestion/user_manage/user_manage.tsx'

import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/solicitud/usuario' element={<User_application />} />
        <Route path='/solicitud/institucion' element={<Admin_application />} />

        {/* Components about inside of the application */}
        <Route path='/dashboard' element={<DashboardHome />} />
        <Route path='/app/user-manage' element={<UserManage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
