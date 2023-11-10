// import { H1, Theme, XStack, YStack } from '@my/ui'
import { H1, Theme, XStack, YStack } from '@my/ui'
import React from 'react'
import { LinearGradient } from '@tamagui/linear-gradient'

export function HomeScreen() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4">
      {/*SECTION 1*/}
      <XStack space ai="center">
        <About />
        <Widgets />
      </XStack>

      {/*SECTION 2*/}
      <XStack space>
        <Blog />
        <Services />
        <Profiles />
      </XStack>

      {/*SECTION 3*/}
      <XStack space>
        <Stats />
        <Connect />
      </XStack>
    </YStack>
  )
}
function About() {
  return (
    <Theme name="red">
      <Container>
        <H1>Natcha</H1>
      </Container>
    </Theme>
  )
}

function Widgets() {
  return (
    <Theme name="blue">
      <Container>
        <H1>Widgets</H1>
      </Container>
    </Theme>
  )
}

function Blog() {
  return (
    <Theme name="yellow">
      <Container>
        <H1>Blog</H1>
      </Container>
    </Theme>
  )
}

function Services() {
  return (
    <Theme name="orange">
      <Container>
        <H1>Services</H1>
      </Container>
    </Theme>
  )
}

function Profiles() {
  return (
    <Theme name="green">
      <Container>
        <H1>Profiles</H1>
      </Container>
    </Theme>
  )
}

function Stats() {
  return (
    <Theme name="purple">
      <Container>
        <H1>Stats</H1>
      </Container>
    </Theme>
  )
}

function Connect() {
  return (
    <Theme name="pink">
      <Container>
        <H1>Connect</H1>
      </Container>
    </Theme>
  )
}

function Container({ children }) {
  return (
    <LinearGradient
      // ai="center"
      // w="$20"
      // h="$16"
      br="$4"
      colors={['$color2', '$color1', '$color2']}
      start={[2, 3]}
      end={[3, 0]}
      bw="$1"
      boc="$color6"
      // fw="wrap"
      // f={1}
      // dsp="flex"
      w="100%"
    >
      {children}
    </LinearGradient>
  )
}
