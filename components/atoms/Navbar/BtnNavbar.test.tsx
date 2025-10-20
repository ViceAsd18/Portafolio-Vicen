import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router'
import BtnNavbar from './BtnNavbar'

describe('BtnNavbar', () => {
  it('renderiza un NavLink con texto y destino', () => {
    render(
      <MemoryRouter>
        <BtnNavbar to="/proyectos" texto="Proyectos" />
      </MemoryRouter>
    )

    const link = screen.getByRole('link', { name: 'Proyectos' }) as HTMLAnchorElement
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/proyectos')
    expect(link).toHaveClass('btn-navbar')
  })

  it('aplica estilos base (padding, color y border-radius)', () => {
    render(
      <MemoryRouter>
        <BtnNavbar to="/home" texto="Inicio" />
      </MemoryRouter>
    )
    const link = screen.getByRole('link', { name: 'Inicio' })
    expect(link).toHaveStyle('padding: 8px 16px')
    expect(link).toHaveStyle('border-radius: 9999px')
    expect(link).toHaveStyle('color: #E5E7EB')
  })
})
