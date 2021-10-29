import { DARK_MODE, LIGHT_MODE } from '../types'

export function darkMode() {
  return { type: DARK_MODE, payload: false }
}
export function lightMode() {
  return { type: LIGHT_MODE, payload: true }
}
