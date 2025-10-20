import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import Boton from './Boton'

describe('Boton', () => {
  const texto = 'Ir a proyectos'

  it('renderiza como botón cuando no hay href', () => {
    render(<Boton texto={texto} />)
    const btn = screen.getByRole('button', { name: texto })
    // AntD button debería tener la clase base
    expect(btn).toHaveClass('ant-btn')
    // Debe ser un <button>
    expect(btn.tagName.toLowerCase()).toBe('button')
  })

  it('dispara onClick cuando se hace click (sin href)', () => {
    const onClick = vi.fn()
    render(<Boton texto={texto} onClick={onClick} />)
    const btn = screen.getByRole('button', { name: texto })
    fireEvent.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('renderiza como enlace cuando se pasa href y usa target por defecto _blank', () => {
    render(<Boton texto={texto} href="https://example.com" />)
    const node = screen.getByText(texto)
    const link = node.closest('a') as HTMLAnchorElement | null
    expect(link).not.toBeNull()
    expect(link!).toHaveClass('ant-btn')
    expect(link!).toHaveAttribute('href', 'https://example.com')
    expect(link!).toHaveAttribute('target', '_blank')
  })

  it('permite sobreescribir el target cuando hay href', () => {
    render(<Boton texto={texto} href="/local" target="_self" />)
    const node = screen.getByText(texto)
    const link = node.closest('a') as HTMLAnchorElement | null
    expect(link).not.toBeNull()
    expect(link!).toHaveAttribute('target', '_self')
  })

  it('aplica estilos inline base (gradiente, borde y color)', () => {
    render(<Boton texto={texto} />)
    const btn = screen.getByRole('button', { name: texto }) as HTMLElement

    // Con jsdom es más confiable validar el atributo style con coincidencias parciales
    expect(btn).toHaveAttribute(
      'style',
      expect.stringMatching(/background:\s*linear-gradient\(/)
    )
    expect(btn).toHaveAttribute(
      'style',
      expect.stringMatching(/border:\s*1px\s+solid\s+rgba\(147,\s*197,\s*253,\s*0\.3\)/)
    )
    expect(btn).toHaveStyle({ color: '#f8fafc' })
  })
})
