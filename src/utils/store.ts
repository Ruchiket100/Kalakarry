import { atom } from 'jotai'

export const cloudAtom = atom<{auth_token? : string}>({});
export const noAtom = atom(0)