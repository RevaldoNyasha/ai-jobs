import { createFileRoute } from '@tanstack/react-router'
import { SignIn } from '@clerk/tanstack-react-start'

export const Route = createFileRoute('/auth/sign-in/$')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section id='sign-in'>
      <SignIn
        routing='path'
        path="/auth/sign-in"
        signUpUrl="/auth/sign-up/$"
        fallbackRedirectUrl="/"
      />
    </section>
  )
}
