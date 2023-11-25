import { Navigate, redirect, useSearchParams } from 'react-router-dom'
import { authSlice } from '../slices/authSlice.ts'
import { AppLayout, Button, Container, ContentLayout, Header, SideNavigation, SpaceBetween } from '@cloudscape-design/components'
import { RouterForm } from '../common/aliases.js'

export function loader() {
  if (authSlice.isAuthenticated) {
    return redirect('/dashboard')
  }
  return null
}

export async function action() {
  return redirect(import.meta.env.VITE_AUTH_URI)
}

export function Component() {
  const [searchParams, _] = useSearchParams()

  if (searchParams.get('code')) {
    return <Navigate to='/auth/verify' replace={true} />
  }

  return (
    <AppLayout
      navigation={
        <SideNavigation
          items={[
            {
              type: 'section',
              text: 'Links',
              items: [
                {
                  type: 'link',
                  text: 'Dashboard',
                  href: '/dashboard',
                },
                {
                  type: 'link',
                  text: 'Logout',
                  href: '/logout',
                },
              ],
            },
          ]}
        />
      }
      content={
        <ContentLayout
          header={
            <SpaceBetween size='m'>
              <Header variant='h1' description='This is a demo!'>
                Login
              </Header>
            </SpaceBetween>
          }
        >
          <Container>
            <RouterForm method='POST'>
              <Button type='submit'>Sign in with Google</Button>
            </RouterForm>
          </Container>
        </ContentLayout>
      }
    />
  )
}
