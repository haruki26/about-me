import { createRootRoute } from '@tanstack/react-router'
import Root from '../components/Root'
//import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
    component: () => <Root />,
})
