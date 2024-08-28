import { createLazyFileRoute } from '@tanstack/react-router'
import Favorite from '../components/Favorite'

export const Route = createLazyFileRoute('/favorite')({
  component: () => <Favorite />
})