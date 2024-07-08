import { Box } from '@mui/material'
import { Resume } from '../../components/Resume/Resume'
import { WorkingWith } from '../../components/WorkingWith/WorkingWith'

export function Home() {
  return (
    <Box>
      <Resume />
      <WorkingWith />
    </Box>
  )
}
