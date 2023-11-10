import { shorthands } from '@tamagui/shorthands'

import { themes, tokens } from '@tamagui/themes'

import { createTamagui } from 'tamagui' // or '@tamagui/core'
const appConfig = createTamagui({
  themes,

  tokens,

  shorthands,
})
export type AppConfig = typeof appConfig
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}
export default appConfig
