import { Button, Stack, TextField } from '@mui/material'

export function GetInTouch() {
  return (
    <Stack spacing={2} height="100%">
      <TextField
        variant="outlined"
        color="secondary"
        placeholder="Name"
        type="text"
      />
      <TextField
        variant="outlined"
        color="secondary"
        placeholder="Email"
        type="email"
      />
      <TextField
        type="text"
        multiline
        placeholder="Message"
        rows={5}
        color="secondary"
      />

      <Button variant="outlined" color="secondary">
        Submit
      </Button>
    </Stack>
  )
}
