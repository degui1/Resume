import { Grid, Avatar, Typography, useTheme } from '@mui/material'
import { South } from '@mui/icons-material'

import { AnimatedBox } from '../../components/AnimatedBox/AnimatedBox'
import { InfoCard } from '../../components/InfoCard/InforCard'

import ladyJustice from '../../assets/Lady_Justice.webp'
import { GetInTouch } from '../../components/GetInTouch/GetInTouch'
import { ImgObject, ImagesList } from '../../components/ImagesList/ImagesList'
import { useId } from 'react'

import ReactLogo from '../../../public/images/react.svg'
import NodeJsLogo from '../../../public/images/nodejs_logo.svg'
import NestJsLogo from '../../../public/images/nestjs_logo.svg'
import TypeScript from '../../../public/images/Typescript_logo.svg'

import AWS from '../../../public/images/AWS.svg'
import tailwind from '../../../public/images/tailwind.svg'
import docker from '../../../public/images/docker.svg'

export function Home() {
  const theme = useTheme()

  const technologiesWorkingWithImages: ImgObject[] = [
    {
      id: useId(),
      alt: 'React',
      src: ReactLogo,
    },
    {
      id: useId(),
      alt: 'NodeJs',
      src: NodeJsLogo,
    },
    {
      id: useId(),
      alt: 'Nestjs',
      src: NestJsLogo,
    },
    {
      id: useId(),
      alt: 'Typescript',
      src: TypeScript,
    },
  ]

  const technologiesLearningImages: ImgObject[] = [
    {
      id: useId(),
      alt: 'Docker',
      src: docker,
    },
    {
      id: useId(),
      alt: 'AWS',
      src: AWS,
    },
    {
      id: useId(),
      alt: 'Tailwindcss',
      src: tailwind,
    },
  ]

  return (
    <Grid container rowSpacing={10}>
      <Grid item xs={12}>
        <Grid
          container
          direction="column"
          minHeight="90vh"
          justifyContent="space-around"
          alignItems="center"
          paddingTop={3}
        >
          <Grid item>
            <Avatar
              // src="https://github.com/degui1.png"
              src={ladyJustice}
              alt="profile image"
              sx={{
                width: '180px',
                height: '180px',
                boxShadow: `0px 0px 10px ${theme.palette.secondary.main}`,
              }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h1"
              color="primary"
              fontWeight="bold"
              textAlign="center"
              lineHeight="150%"
              sx={{
                fontSize: { xs: '3rem', sm: '6rem' },
              }}
            >
              I&apos;m a web developer
              <Typography variant="inherit" color="secondary">
                based in Brazil,
              </Typography>
              specializing in
              <Typography variant="inherit" color="secondary">
                AWS.
              </Typography>
            </Typography>
          </Grid>
          <Grid item>
            <Typography color="primary" variant="subtitle1">
              Scroll down
            </Typography>
            <AnimatedBox boxProps={{ marginTop: '1rem' }}>
              <South
                color="secondary"
                sx={{
                  fontSize: '3.5rem',
                }}
              />
            </AnimatedBox>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container rowGap={5}>
          <Grid item xs={12} sm={6}>
            <InfoCard
              title="Technologies I work with"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ImagesList images={technologiesWorkingWithImages} />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container rowGap={5}>
          <Grid item xs={12} sm={6}>
            <ImagesList images={technologiesLearningImages} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InfoCard
              title="Technologies I am learning"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <InfoCard
              title="Get in touch"
              content="Drop me a line, give me a call, or send me a message by submitting the form."
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <GetInTouch />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}
