import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import BtnPrimary from './BtnPrimary'

describe('BtnPrimary', () => {
  it('renderiza un enlace con label, href y target _blank', () => {
    render(<BtnPrimary label="Ver más" href="https://example.com" />)
    const link = screen.getByRole('link', { name: 'Ver más' }) as HTMLAnchorElement
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveClass('btn-primary')
  })

  it('aplica estilos base (display inline-flex, background, color)', () => {
    render(<BtnPrimary label="Estilos" href="#" />)
    const link = screen.getByRole('link', { name: 'Estilos' })
    expect(link).toHaveStyle('display: inline-flex')
    expect(link).toHaveStyle('background: #0B1220')
    expect(link).toHaveStyle('color: #E5E7EB')
    expect(link).toHaveStyle('border-radius: 12px')
  })

  it('renderiza el icono si se pasa', () => {
    render(<BtnPrimary label="Con Icono" href="#" icon={<span data-testid="icon">★</span>} />)
    const link = screen.getByRole('link', { name: /Con Icono/ })
    expect(link).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
