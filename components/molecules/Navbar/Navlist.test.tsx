import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import { BrowserRouter } from 'react-router'
import Navlist from './Navlist'

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>)
}

describe('Navlist', () => {
  afterEach(() => {
    cleanup()
  })

  describe('Renderizado y enlaces', () => {
    it('renderiza 5 enlaces de navegación con hrefs correctos en orden', () => {
      const { container } = renderWithRouter(<Navlist />)
      
      const links = container.querySelectorAll('.btn-navbar')
      expect(links.length).toBe(5)
      
      const expectedLinks = [
        { texto: 'Inicio', href: '/#inicio' },
        { texto: 'Sobre mí', href: '/#sobre-mi' },
        { texto: 'Proyectos', href: '/#proyectos' },
        { texto: 'Tecnologías', href: '/#tecnologias' },
        { texto: 'Certificaciones', href: '/#certificaciones' }
      ]
      
      expectedLinks.forEach(({ texto, href }, index) => {
        expect(screen.getByText(texto)).toBeInTheDocument()
        const link = screen.getByText(texto).closest('a')
        expect(link).toHaveAttribute('href', href)
        expect(link).toHaveClass('btn-navbar')
        expect(links[index]).toHaveTextContent(texto)
      })
    })
  })

  describe('Estilos por dirección', () => {
    it('aplica estilos de fila (row): background oscuro, border-radius, gap 12px, padding, border y shadow', () => {
      const { container } = renderWithRouter(<Navlist direction="row" />)
      const navlist = container.firstChild as HTMLElement
      
      expect(navlist).toHaveStyle({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        padding: '6px 12px',
        background: 'rgba(17, 24, 39, 0.9)',
        borderRadius: '9999px'
      })
      
      const styleAttr = navlist.getAttribute('style') || ''
      expect(styleAttr).toMatch(/border:\s*1px\s+solid/)
      expect(styleAttr).toMatch(/box-shadow:\s*0\s+4px\s+12px/)
    })

    it('aplica estilos de columna (column): background transparent, sin border/shadow, gap 20px, sin padding', () => {
      const { container } = renderWithRouter(<Navlist direction="column" />)
      const navlist = container.firstChild as HTMLElement
      
      expect(navlist).toHaveStyle({
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        padding: '0px',
        background: 'transparent'
      })
      
      const styleAttr = navlist.getAttribute('style') || ''
      expect(styleAttr).toContain('flex-direction: column')
      expect(styleAttr).toContain('justify-content: flex-start')
      expect(styleAttr).toContain('border: medium')
      expect(styleAttr).toMatch(/border-radius:\s*0/)
      expect(styleAttr).toMatch(/box-shadow:\s*none/)
    })

    it('actualiza estilos al cambiar direction de row a column', () => {
      const { container, rerender } = renderWithRouter(<Navlist direction="row" />)
      
      let navlist = container.firstChild as HTMLElement
      expect(navlist).toHaveStyle({ flexDirection: 'row', gap: '12px' })
      
      rerender(<BrowserRouter><Navlist direction="column" /></BrowserRouter>)
      
      navlist = container.firstChild as HTMLElement
      expect(navlist).toHaveStyle({ flexDirection: 'column', gap: '20px' })
    })
  })
})
