import { createFileRoute } from '@tanstack/react-router'
import Profiel from '../components/Profiel'

export const Route = createFileRoute('/profiel')({
  component: () => <Profiel />
})