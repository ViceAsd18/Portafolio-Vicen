import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import CertSkill from './CertSkill'

describe('CertSkill', () => {
  afterEach(() => cleanup())

  describe('Renderizado', () => {
    it('muestra el texto proporcionado', () => {
      render(<CertSkill texto="TypeScript" />)
      expect(screen.getByText('TypeScript')).toBeInTheDocument()
    })
  })

  describe('Integración con AntD', () => {
    it('usa el componente Tag (clase base ant-tag presente)', () => {
      render(<CertSkill texto="React" />)
      const node = screen.getByText('React')
      const tag = node.closest('.ant-tag') as HTMLElement | null
      expect(tag).not.toBeNull()
      expect(tag!).toHaveClass('ant-tag')
    })
  })

  describe('Estilos clave', () => {
    it('aplica estilos inline esenciales (background, color, border, radios, padding)', () => {
      render(<CertSkill texto="Vitest" />)
      const node = screen.getByText('Vitest')
      const tag = node.closest('.ant-tag') as HTMLElement

      expect(tag).toHaveStyle({ background: 'rgba(56,189,248,0.08)', color: '#e2e8f0' })
      expect(tag).toHaveStyle('font-size: 13px')
      expect(tag).toHaveStyle('border-radius: 8px')
      expect(tag).toHaveStyle('padding: 2px 10px')

      // Validaciones por atributo style para shorthands no normalizados por jsdom
      const style = tag.getAttribute('style') || ''
      expect(style).toMatch(/border:\s*1px\s+solid\s+rgba\(56,\s*189,\s*248,\s*0\.25\)/)
      expect(style).toMatch(/box-shadow:\s*0\s+0\s+6px\s+rgba\(56,\s*189,\s*248,\s*0\.15\)/)
      expect(style).toMatch(/margin:\s*2px/)
    })
  })
})
