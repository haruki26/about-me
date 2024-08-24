import { createFileRoute } from '@tanstack/react-router'
import Favorite from '../components/Favorite'

export const Route = createFileRoute('/favorite')({
  component: () => <Favorite />
})