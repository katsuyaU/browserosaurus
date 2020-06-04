import { atom } from 'recoil'

import { Browser } from '../config/browsers'
import { Hotkeys, UrlHistoryItem } from '../main/store'

export const updateAvailableAtom = atom({
  key: 'updateAvailableAtom',
  default: false,
})

export type MenuState = 'history' | 'fav' | 'hotkeys' | false

export const openMenuAtom = atom<MenuState>({
  key: 'openMenuAtom',
  default: false,
})

export const urlIdAtom = atom<string | undefined>({
  key: 'urlIdAtom',
  default: undefined,
})

export const urlHistoryAtom = atom<UrlHistoryItem[]>({
  key: 'urlHistoryAtom',
  default: [],
})

export const browsersAtom = atom<Browser[]>({
  key: 'browsersAtom',
  default: [],
})

export const versionAtom = atom<string | undefined>({
  key: 'versionAtom',
  default: undefined,
})

export const favBrowserIdAtom = atom<string>({
  key: 'favBrowserIdAtom',
  default: '',
})

export const isDefaultBrowserAtom = atom<boolean>({
  key: 'isDefaultBrowserAtom',
  default: true,
})

export const areHotKeysEnabledAtom = atom<boolean>({
  key: 'areHotKeysEnabledAtom',
  default: true,
})

export const hotkeysAtom = atom<Hotkeys>({
  key: 'hotkeysAtom',
  default: {},
})