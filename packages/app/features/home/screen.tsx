// import { H1, Theme, XStack, YStack } from '@my/ui'
import { Button, H1, H3, Paragraph, Text, Theme, XStack, YStack } from '@my/ui'
import React from 'react'
import { LinearGradient } from '@tamagui/linear-gradient'
import { ArrowBigRightDash, Box } from '@tamagui/lucide-icons'

export function HomeScreen() {
  return (
    <YStack f={1} ai="center">
      <YStack f={1} p="$4" space maw={1200} w="100%">
        {/*SECTION 1*/}
        <XStack f={2} space w="100%" h="$20">
          <About />
          <Widgets />
        </XStack>

        {/*SECTION 2*/}
        <XStack f={2} space w="100%" h="$20">
          <XStack f={1}>
            <Ad />
          </XStack>
          <XStack f={2}>
            <Services />
          </XStack>
          <XStack f={1}>
            <Profiles />
          </XStack>
        </XStack>

        {/*SECTION 3*/}
        <XStack f={1} space w="100%" h="$15">
          <Stats />
          <Connect />
        </XStack>
      </YStack>
    </YStack>
  )
}
function About() {
  return (
    <Theme name="red">
      <Container>
        <XStack f={1} jc="center" ai="center" space>
          <Box size={64} />
          <YStack>
            <Paragraph>Hi there, I'm</Paragraph>
            <H1>Natcha Pradappet</H1>
            <Paragraph>Designer & Developer</Paragraph>
            <Button>
              <Box size={16} /> Go
            </Button>
          </YStack>
        </XStack>
      </Container>
    </Theme>
  )
}

function Widgets() {
  return (
    <YStack flex={1} space="$2">
      <Theme name="blue">
        <Container>
          <Paragraph>FeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeaturedFeatured</Paragraph>
        </Container>
      </Theme>
      <XStack flex={4} space="$2">
        <Theme name="pink">
          <Container>
            <YStack f={1} jc="center" ai="center" space>
              <Box size={64} />
              <XStack f={1} ai="center" jc="space-between" space w="100%">
                <YStack>
                  <Paragraph>Name</Paragraph>
                  <H3>Credentials</H3>
                </YStack>
                <Button chromeless icon={ArrowBigRightDash} opacity={0.5} />
              </XStack>
            </YStack>
          </Container>
        </Theme>
        <Theme name="yellow">
          <Container>
            <YStack f={1} jc="center" ai="center" space>
              <Box size={64} />
              <XStack f={1} ai="center" jc="space-between" space w="100%">
                <YStack>
                  <Paragraph>Name</Paragraph>
                  <H3>Projects</H3>
                </YStack>
                <Button chromeless icon={ArrowBigRightDash} opacity={0.5} />
              </XStack>
            </YStack>
          </Container>
        </Theme>
      </XStack>
    </YStack>
  )
}

function Ad() {
  return (
    <Theme name="yellow">
      <Container>
        <YStack f={1} jc="center" ai="center" space h="100%">
          <Box size={64} />
          <XStack pos="absolute" b="0" l="0" f={1} ai="center" jc="space-between" space w="100%">
            <YStack>
              <Paragraph>See my web ad!</Paragraph>
              <H3>Darn Tootin'</H3>
              <Text color="red" hoverStyle={{ color: 'blue' }}>
                Hi
              </Text>
            </YStack>
            <Button
              chromeless
              icon={ArrowBigRightDash}
              o={0.5}
              size="$7"
              p="$0"
              hoverStyle={{ o: 1, bc: 'none' }}
            />
          </XStack>
        </YStack>
      </Container>
    </Theme>
  )
}

function Ad2() {
  return (
    <Theme name="yellow">
      <Container>
        <YStack f={1} jc="center" ai="center" space>
          <Box size={64} />
          <XStack f={1} ai="center" jc="space-between" space w="100%">
            <YStack>
              <Paragraph>See my web ad!</Paragraph>
              <H3>Darn Tootin'</H3>
            </YStack>
            <Button chromeless icon={ArrowBigRightDash} opacity={0.5} />
          </XStack>
        </YStack>
      </Container>
    </Theme>
  )
}

function Services() {
  return (
    <Theme name="orange">
      <Container>
        <YStack f={1} h="100%">
          <XStack f={1} jc="center" ai="center" space>
            <Box size={64} />
            <Box size={64} />
            <Box size={64} />
            <Box size={64} />
          </XStack>
          <H3>Services</H3>
        </YStack>
      </Container>
    </Theme>
  )
}

function Profiles() {
  return (
    <Theme name="green">
      <Container>
        <YStack f={1} h="100%" space>
          <Theme name="green">
            <InnerContainer>
              <XStack f={1} h="100%" space>
                <RoundContainer>
                  <Box size={32} />
                </RoundContainer>
                <RoundContainer>
                  <Box size={32} />
                </RoundContainer>
                <RoundContainer>
                  <Box size={32} />
                </RoundContainer>
              </XStack>
            </InnerContainer>
          </Theme>
          <H3>Profiles</H3>
        </YStack>
      </Container>
    </Theme>
  )
}

function Stats() {
  return (
    <Theme name="purple">
      <Container>
        <YStack f={1} h="100%">
          <Theme name="purple">
            <XStack f={1} space>
              <InnerContainer>
                <YStack f={1} ai="center" jc="center" space="$4">
                  <Box size={32} />
                  <Paragraph>###</Paragraph>
                </YStack>
              </InnerContainer>
              <InnerContainer>
                <YStack f={1} ai="center" jc="center" space="$4">
                  <Box size={32} />
                  <Paragraph>###</Paragraph>
                </YStack>
              </InnerContainer>
              <InnerContainer>
                <YStack f={1} ai="center" jc="center" space="$4">
                  <Box size={32} />
                  <Paragraph>###</Paragraph>
                </YStack>
              </InnerContainer>
            </XStack>
          </Theme>
          {/*<H3>Stats</H3>*/}
        </YStack>
      </Container>
    </Theme>
  )
}

function Connect() {
  return (
    <Theme name="pink">
      <Container>
        <YStack f={1} h="100%" jc="flex-end">
          <H1>Let's work together</H1>
        </YStack>
      </Container>
    </Theme>
  )
}

function Container({ children }) {
  return (
    <LinearGradient
      br="$8"
      colors={['$color3', '$color1', '$color3']}
      start={[2, 3]}
      end={[3, 0]}
      bw="$1"
      boc="$color6"
      f={1}
      fw="wrap"
    >
      <XStack f={1} jc="center" ai="center" p="$4">
        {children}
      </XStack>
    </LinearGradient>
  )
}

function InnerContainer({ children }) {
  return (
    <LinearGradient
      br="$6"
      colors={['$color3', '$color1', '$color3']}
      start={[2, 3]}
      end={[3, 0]}
      bw="$1"
      boc="$color6"
      f={1}
      fw="wrap"
    >
      <XStack f={1} jc="center" ai="center" p="$4">
        {children}
      </XStack>
    </LinearGradient>
  )
}

function RoundContainer({ children }) {
  return (
    <LinearGradient
      br="$10"
      h="100%"
      colors={['$color3', '$color1', '$color3']}
      start={[2, 3]}
      end={[3, 0]}
      bw="$1"
      boc="$color6"
      f={1}
      fw="wrap"
    >
      <XStack f={1} jc="center" ai="center" p="$4">
        {children}
      </XStack>
    </LinearGradient>
  )
}
