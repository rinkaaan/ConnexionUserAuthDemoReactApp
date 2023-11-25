import { redirect } from 'react-router-dom'
import { authSlice } from '../slices/authSlice.ts'
import { AuthService } from '../openapi-client/index.ts'

export async function loader({ request }) {
  if (authSlice.isAuthenticated) {
    return redirect('/dashboard')
  }

  const url = new URL(request.url)
  const code = url.searchParams.get('code')

  if (code) {
    const token = await AuthService.verify(code)
    await authSlice.setToken(token)
    return redirect('/dashboard')
  }
}
