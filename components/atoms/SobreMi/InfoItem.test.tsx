import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import InfoItem from './InfoItem'

describe('InfoItem', () => {
  it('renderiza ícono y texto dentro de un contenedor con estilos base', () => {
    render(<InfoItem icon={<span data-testid="ico">@</span>} texto="Contacto" />)
    const container = screen.getByText('Contacto').closest('div') as HTMLElement
    expect(container).toHaveStyle('display: flex')
    expect(container).toHaveStyle('align-items: center')
    expect(container).toHaveStyle('gap: 8px')
    // Icono visual
    const iconWrapper = container.querySelector('span') as HTMLElement
    expect(iconWrapper).toHaveStyle('font-size: 18px')
    expect(screen.getByTestId('ico')).toBeInTheDocument()
  })

  it('cuando se pasa href renderiza un enlace con target _blank y rel seguro', () => {
    render(<InfoItem icon={<span>*</span>} texto="GitHub" href="https://github.com" />)
    const link = screen.getByRole('link', { name: 'GitHub' }) as HTMLAnchorElement
    expect(link).toHaveAttribute('href', 'https://github.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    expect(link).toHaveStyle('text-decoration: none')
    expect(link).toHaveStyle('opacity: 0.9')
  })

  it('cuando no hay href renderiza el texto en span (no link)', () => {
    render(<InfoItem icon={<span>#</span>} texto="Sin enlace" />)
    expect(screen.queryByRole('link')).toBeNull()
    const text = screen.getByText('Sin enlace')
    expect(text.tagName.toLowerCase()).toBe('span')
  })
})
