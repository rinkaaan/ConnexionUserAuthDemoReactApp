import { authSlice } from '../slices/authSlice.ts'
import { redirect } from 'react-router-dom'

export function loader() {
  if (!authSlice.isAuthenticated) {
    return redirect('/auth/login')
  } else {
    return redirect('/dashboard')
  }
}
