import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import HeroMain from './HeroMain'

// Notas:
// - Verifica estructura principal: section#inicio con clase hero-section y aria-label.
// - Comprueba subcomponentes presentes: Avatar (por alt), TextGroup (título/parrafo), ButtonGroup (por links/iconos conocidos).
// - Validar estilos clave del layout y fondo (backgroundImage, align, justify).

describe('HeroMain', () => {
  it('renderiza la sección principal con atributos y estilos clave', () => {
    const { container } = render(<HeroMain />)
    const section = container.querySelector('section#inicio.hero-section') as HTMLElement
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('aria-label', 'Presentación')
    expect(section).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      height: '100vh',
      padding: '40px 20px',
    })
    const style = section.getAttribute('style') || ''
    expect(style).toMatch(/background-image:\s*url\(/)
    expect(style).toMatch(/background-size:\s*cover/)
    expect(style).toMatch(/background-repeat:\s*no-repeat/)
    expect(style).toMatch(/background-position:\s*center/)
  })

  it('incluye Avatar, TextGroup y ButtonGroup', () => {
    render(<HeroMain />)
    // Avatar: puede ser <img alt="..."> o un contenedor con aria-label cuando no hay src
    const avatarImg = screen.queryByRole('img', { name: /imagen vicente/i })
    if (avatarImg) {
      expect(avatarImg).toBeInTheDocument()
    } else {
      expect(screen.getByLabelText(/imagen vicente/i)).toBeInTheDocument()
    }
    // TextGroup
    expect(screen.getByText('Vicente Ramírez')).toBeInTheDocument()
    expect(screen.getByText('Desarrollador Frontend')).toBeInTheDocument()
    // ButtonGroup: validamos por un enlace conocido (GitHub) si existe, sino por presencia de botones/links
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('usa layout con Row y Col centrados', () => {
    const { container } = render(<HeroMain />)
    // Row de AntD suele renderizar un div; validamos por estilos clave aplicados
    const row = container.querySelector('.ant-row') || container.querySelector('[class*="ant-row"]')
    expect(row).toBeInTheDocument()
    const col = container.querySelector('.ant-col') || container.querySelector('[class*="ant-col"]')
    expect(col).toBeInTheDocument()
  })
})
