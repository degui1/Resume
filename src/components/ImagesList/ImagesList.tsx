import { Box, Grid, Card, useMediaQuery, useTheme } from '@mui/material'

export type ImgObject = {
  id: string
  src: string
  alt: string
}

interface IImageListProperties {
  images: ImgObject[]
}

export function ImagesList({ images }: IImageListProperties) {
  const theme = useTheme()
  const isMobileOrSmallDevice = useMediaQuery(
    theme.breakpoints.between('xs', 'sm'),
  )

  return (
    // <Box
    //   sx={{
    //     display: 'flex',
    //     gap: 1,
    //     py: 1,
    //     overflow: 'auto',
    //     scrollSnapType: 'x mandatory',
    //     '& > *': {
    //       scrollSnapAlign: 'center',
    //     },
    //     '::-webkit-scrollbar': { display: 'none' },
    //   }}
    // >
    //   {images.map((image) => {
    //     return (
    //       <img
    //         srcSet={`${image.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
    //         src={`${image.src}?h=120&fit=crop&auto=format`}
    //         alt={image.alt}
    //         key={image.id}
    //       />
    //     )
    //   })}
    // </Box>
    <Grid
      container
      rowGap={5}
      textAlign="center"
      wrap={isMobileOrSmallDevice ? 'nowrap' : 'wrap'}
      spacing={5}
      sx={
        isMobileOrSmallDevice
          ? {
              overflow: 'auto',
              scrollSnapType: 'x mandatory',
              '& > *': {
                scrollSnapAlign: 'center',
              },
              '::-webkit-scrollbar': { display: 'none' },
            }
          : null
      }
    >
      {images.map((image) => {
        return (
          <Grid
            item
            xs={12}
            sm={6}
            key={image.id}
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                height: `${isMobileOrSmallDevice ? '50px' : '80px'}`,
              }}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

// ;
