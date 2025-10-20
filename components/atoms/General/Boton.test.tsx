import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import Boton from './Boton'

describe('Boton', () => {
  afterEach(() => cleanup())

  const texto = 'Ir a proyectos'

  describe('Renderizado', () => {
    it('renderiza como botón cuando no hay href', () => {
      render(<Boton texto={texto} />)
      const btn = screen.getByRole('button', { name: texto })
      expect(btn).toHaveClass('ant-btn')
      expect(btn.tagName.toLowerCase()).toBe('button')
    })
  })

  describe('Interacción', () => {
    it('dispara onClick cuando se hace click (sin href)', () => {
      const onClick = vi.fn()
      render(<Boton texto={texto} onClick={onClick} />)
      const btn = screen.getByRole('button', { name: texto })
      fireEvent.click(btn)
      expect(onClick).toHaveBeenCalledTimes(1)
    })
  })

  describe('Enlaces', () => {
    it.each([
      { href: 'https://example.com', target: undefined, expected: '_blank' },
      { href: '/local', target: '_self', expected: '_self' },
    ])('renderiza como enlace con target correcto ($expected)', ({ href, target, expected }) => {
      render(<Boton texto={texto} href={href} target={target as any} />)
      const node = screen.getByText(texto)
      const link = node.closest('a') as HTMLAnchorElement | null
      expect(link).not.toBeNull()
      expect(link!).toHaveClass('ant-btn')
      expect(link!).toHaveAttribute('href', href)
      expect(link!).toHaveAttribute('target', expected)
    })
  })

  describe('Estilos', () => {
    it('aplica estilos inline base (gradiente, borde y color)', () => {
      render(<Boton texto={texto} />)
      const btn = screen.getByRole('button', { name: texto }) as HTMLElement
      expect(btn).toHaveAttribute('style', expect.stringMatching(/background:\s*linear-gradient\(/))
      expect(btn).toHaveAttribute('style', expect.stringMatching(/border:\s*1px\s+solid\s+rgba\(147,\s*197,\s*253,\s*0\.3\)/))
      expect(btn).toHaveStyle({ color: '#f8fafc' })
    })

    it('mezcla estilos externos con los base (style prop)', () => {
      render(<Boton texto={texto} style={{ marginTop: 8, background: 'red' }} />)
      const btn = screen.getByRole('button', { name: texto }) as HTMLElement
      expect(btn).toHaveStyle({ marginTop: '8px' })
      // El estilo externo debe poder sobreescribir el background si se pasa
      expect(btn.getAttribute('style') || '').toMatch(/background:\s*red/)
    })
  })
})
