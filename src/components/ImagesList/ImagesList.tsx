import { Grid } from '@mui/material'

import x from '../../assets/Lady_Justice.webp'

type ImgObject = {
  src: string
  title: string
  description: string
}

const itemData: ImgObject[] = [
  {
    src: '../../assets/Lady_Justice.webp',
    description: 'Since 2020',
    title: 'React',
  },
  {
    src: '../../assets/Lady_Justice.webp',
    description: 'Since 2020',
    title: 'React',
  },
  {
    src: '../../assets/Lady_Justice.webp',
    description: 'Since 2020',
    title: 'React',
  },
]

export function ImagesList() {
  return (
    <Grid container>
      {itemData.map((item) => {
        return (
          <Grid item key={item.src} xs={12} sm={6}>
            <img src={x} alt="" style={{ width: '200px' }} />
          </Grid>
        )
      })}
    </Grid>
  )
}
