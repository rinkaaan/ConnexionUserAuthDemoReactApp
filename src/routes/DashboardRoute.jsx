import { AppLayout, ContentLayout, Header, SideNavigation, SpaceBetween } from '@cloudscape-design/components'
import { authSlice } from '../slices/authSlice.ts'
import { ensureAuthenticated } from '../common/typedUtils.ts'

export function loader({ request }) {
  return ensureAuthenticated(request)
}

export function Component() {
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
              <Header variant='h1' description={`Hello ${authSlice.user?.email}!`}>
                Dashboard
              </Header>
            </SpaceBetween>
          }
        >
        </ContentLayout>
      }
    />
  )
}
