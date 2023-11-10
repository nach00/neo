import { Button, H3, Paragraph, Sheet, useToastController, XStack, YStack } from '@my/ui'
import { ArrowBigRightDash, ChevronDown, ChevronUp } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { useLink } from 'solito/link'

export function HomeScreen() {
  const linkProps = useLink({
    href: '/user/nate',
  })

  return (
    <YStack jc="center" ai="center" p="$4" space>
      <YStack space="$4" width={'100%'}>
        {/*SECTION 1*/}
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
            <YStack space="" width={'100%'}>
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
              <Button icon={ArrowBigRightDash}>Go</Button>
            </YStack>
          </XStack>

          {/*WIDGETS*/}
          <YStack flex={1} space="$2">
            <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
            <XStack flex={1} space="$2">
              <YStack flex={1} backgroundColor="$color" borderRadius="$3" padding="$2" />
              <YStack flex={1} backgroundColor="$color" borderRadius="$3" padding="$2" />
            </XStack>
          </YStack>
        </XStack>

        {/*SECTION 2*/}
        <XStack flex={1} space="$2">
          <YStack flex={1} backgroundColor="$color" borderRadius="$3" padding="$2" />

          <YStack
            flex={2}
            space="$2"
            borderWidth={2}
            borderColor="$color"
            borderRadius="$4"
            padding="$2"
          >
            <XStack
              flex={1}
              space="$2"
              borderWidth={2}
              borderColor="$color"
              borderRadius="$4"
              padding="$2"
              jc="center"
            >
              <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
              <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
              <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
              <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
            </XStack>
            <YStack backgroundColor="$color" borderRadius="$3" padding="$2" />
          </YStack>
          <YStack flex={1} backgroundColor="$color" borderRadius="$3" padding="$2" />
        </XStack>

        {/*SECTION 3*/}
        <XStack flex={1} space="$2">
          {/*STATS*/}
          <YStack
            flex={1}
            space="$2"
            borderWidth={2}
            borderColor="$color"
            borderRadius="$4"
            padding="$2"
          >
            <XStack
              flex={1}
              space="$2"
              borderWidth={2}
              borderColor="$color"
              borderRadius="$4"
              padding="$2"
            >
              <YStack flex={1} backgroundColor="$color" borderRadius="$3" padding="$2" />
              <YStack flex={1} backgroundColor="$color" borderRadius="$3" padding="$2" />
              <YStack flex={1} backgroundColor="$color" borderRadius="$3" padding="$2" />
            </XStack>
          </YStack>

          {/*CONNECT*/}
          <YStack flex={1} backgroundColor="$color" borderRadius="$3" padding="$2" />
        </XStack>

        {/*<H1 ta="center">Welcome to Tamagui.</H1>*/}
        {/*<Paragraph ta="center">*/}
        {/*  Here's a basic starter to show navigating from one screen to another. This screen uses the*/}
        {/*  same code on Next.js and React Native.*/}
        {/*</Paragraph>*/}

        {/*<Separator />*/}
        {/*<Paragraph ta="center">*/}
        {/*  Made by{' '}*/}
        {/*  <Anchor color="$color12" href="https://twitter.com/natebirdman" target="_blank">*/}
        {/*    @natebirdman*/}
        {/*  </Anchor>*/}
        {/*  ,{' '}*/}
        {/*  <Anchor*/}
        {/*    color="$color12"*/}
        {/*    href="https://github.com/tamagui/tamagui"*/}
        {/*    target="_blank"*/}
        {/*    rel="noreferrer"*/}
        {/*  >*/}
        {/*    give it a ⭐️*/}
        {/*  </Anchor>*/}
        {/*</Paragraph>*/}
      </YStack>

      {/*<XStack>*/}
      {/*  <Button {...linkProps}>Link to user</Button>*/}
      {/*</XStack>*/}

      {/*<SheetDemo />*/}
    </YStack>
  )
}

function SheetDemo() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(0)
  const toast = useToastController()

  return (
    <>
      <Button
        size="$6"
        icon={open ? ChevronDown : ChevronUp}
        circular
        onPress={() => setOpen((x) => !x)}
      />
      <Sheet
        modal
        animation="medium"
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        position={position}
        onPositionChange={setPosition}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />
        <Sheet.Frame ai="center" jc="center">
          <Sheet.Handle />
          <Button
            size="$6"
            circular
            icon={ChevronDown}
            onPress={() => {
              setOpen(false)
              toast.show('Sheet closed!', {
                message: 'Just showing how toast works...',
              })
            }}
          />
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
