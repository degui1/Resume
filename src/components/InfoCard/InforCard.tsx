import { Box, Stack, Typography, useTheme } from '@mui/material'

interface IInfoCardProps {
  title: string
  content: string
}

export function InfoCard({ content, title }: IInfoCardProps) {
  const theme = useTheme()

  return (
    <Stack spacing={2} height="100%">
      <Box>
        <Typography variant="h3" color="primary" fontWeight="bold">
          {title}
        </Typography>
      </Box>
      <Box>
        <Typography variant="subtitle1" color={theme.palette.text.secondary}>
          {content}
        </Typography>
      </Box>
    </Stack>
  )
}
