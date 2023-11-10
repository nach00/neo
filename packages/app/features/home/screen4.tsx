import { Paragraph, XStack, YStack } from '@my/ui'
import React from 'react'

export function HomeScreen() {
  return (
    <YStack>
      <YStack jc="center" ai="center" p="$4" maw={1200}>
        <XStack space="$4" width="100%">
          <XStack flex={1} padding="$3" borderRadius="$3" backgroundColor="$red3">
            <Paragraph>Hi</Paragraph>
          </XStack>
          <XStack flex={1} padding="$3" borderRadius="$3" backgroundColor="$red3">
            <Paragraph>Hi</Paragraph>
          </XStack>
        </XStack>
      </YStack>
    </YStack>
  )
}
