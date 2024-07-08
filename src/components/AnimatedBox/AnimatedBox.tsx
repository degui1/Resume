import { Box, BoxProps, keyframes, styled } from '@mui/material'
import { ReactNode } from 'react'

interface IAnimatedBoxProps {
  children: ReactNode
  boxProps?: BoxProps
}

export function AnimatedBox({ children, boxProps }: IAnimatedBoxProps) {
  const bounce = keyframes`
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0);
    }
  `

  const AnimatedBox = styled(Box)`
    display: inline-block;
    animation: ${bounce} 2s infinite;
    padding: 16px;
    background-color: transparent;
  `

  return <AnimatedBox {...boxProps}>{children}</AnimatedBox>
}
