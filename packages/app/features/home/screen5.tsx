import { Button, H3, Paragraph, XStack, YStack } from '@my/ui'
import React from 'react'
import { ArrowBigRightDash } from '@tamagui/lucide-icons'

// import { BH3, XStack } from '@my/ui/types'

export function HomeScreen() {
  return (
    <YStack
      // width="100%"
      height="100%"
      ai="center"
      jc="center"
      backgroundColor=""
    >
      {/*SECTION 1*/}
      <XStack>
        <YStack
          backgroundColor="$color4"
          borderRadius="$3"
          p="$3"
          // maw={1200}
          // width="100%"
          // height="100%"
        >
          <XStack flex={1} space="$2">
            {/*ABOUT*/}
            <XStack
              // flex={1}
              space="$2"
              borderWidth={2}
              borderColor="$color"
              borderRadius="$4"
              padding="$2"
            >
              {/*PHOTO*/}
              <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />

              {/*DESCRIPTION*/}
              <YStack>
                <Paragraph backgroundColor="" borderRadius="$3" padding="$2">
                  HI, I'M
                </Paragraph>
                <H3 backgroundColor="" borderRadius="$3" padding="$2">
                  Natcha Pradappet.
                </H3>
                <Paragraph backgroundColor="" borderRadius="$3" padding="$2">
                  I'm a designer and developer based in Dallas, Texas. I'm currently managing client
                  projects at Planet Nacho. I'm interested in design systems, design tools, and
                  front-end development.
                </Paragraph>
                <Button backgroundColor="$color3" icon={ArrowBigRightDash}>
                  Go
                </Button>
              </YStack>
            </XStack>

            {/*WIDGETS*/}
            {/*<YStack flex={1} space="$2">*/}
            {/*  <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />*/}
            {/*  <XStack flex={1} space="$2">*/}
            {/*    <YStack flex={1} backgroundColor="$color" borderRadius="$3" padding="$2" />*/}
            {/*    <YStack flex={1} backgroundColor="$color" borderRadius="$3" padding="$2" />*/}
            {/*  </XStack>*/}
            {/*</YStack>*/}
          </XStack>
        </YStack>
        <YStack
          backgroundColor="$color4"
          borderRadius="$3"
          p="$3"
          // maw={1200}
          // width="100%"
          // height="100%"
        >
          <XStack flex={1} space="$2">
            {/*ABOUT*/}
            <XStack
              flex={1}
              space="$2"
              borderWidth={2}
              borderColor="$color"
              borderRadius="$4"
              padding="$2"
            >
              {/*PHOTO*/}
              <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />

              {/*DESCRIPTION*/}
              <YStack
                space=""
                // width={'100%'}
              >
                <Paragraph backgroundColor="" borderRadius="$3" padding="$2">
                  HI, I'M
                </Paragraph>
                <H3 backgroundColor="" borderRadius="$3" padding="$2">
                  Natcha Pradappet.
                </H3>
                <Paragraph backgroundColor="" borderRadius="$3" padding="$2">
                  I'm a designer and developer based in Dallas, Texas. I'm currently managing client
                  projects at Planet Nacho. I'm interested in design systems, design tools, and
                  front-end development.
                </Paragraph>
                <Button backgroundColor="$color3" icon={ArrowBigRightDash}>
                  Go
                </Button>
              </YStack>
            </XStack>

            {/*WIDGETS*/}
            {/*<YStack flex={1} space="$2">*/}
            {/*  <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />*/}
            {/*  <XStack flex={1} space="$2">*/}
            {/*    <YStack flex={1} backgroundColor="$color" borderRadius="$3" padding="$2" />*/}
            {/*    <YStack flex={1} backgroundColor="$color" borderRadius="$3" padding="$2" />*/}
            {/*  </XStack>*/}
            {/*</YStack>*/}
          </XStack>
        </YStack>
      </XStack>
    </YStack>
  )
}
