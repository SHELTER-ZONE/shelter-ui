import type { Component } from 'vue'

export interface SZStatusMaskProps {
  status: string | 'success' | 'error' | 'warning'
  iconSize?: number
  icon?: Component
  color?: string
  text?: string
  show?: boolean
}
