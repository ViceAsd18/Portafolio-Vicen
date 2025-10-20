import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import InfoGroup from './InfoGroup'


describe('InfoGroup', () => {
  afterEach(() => cleanup())

  const renderInfoGroup = () => render(<InfoGroup />)
  const textos = [
    'Chile',
    'vicen.ramirezg@duoc.cl',
    'github.com/ViceAsd18',
    'in/vicente-ramírez-garay',
  ]

  describe('Renderizado básico', () => {
    it('renderiza el componente y todos los textos', () => {
      const { container } = renderInfoGroup()
      expect(container.firstChild).toBeInTheDocument()
      textos.forEach(text => {
        expect(screen.getByText(text)).toBeInTheDocument()
      })
    })
    it('renderiza exactamente 4 items de información', () => {
      renderInfoGroup()
      expect(textos.filter(text => screen.getByText(text)).length).toBe(4)
    })
  })

  describe('Estructura y orden', () => {
    it('Chile está separado del grupo de contacto', () => {
      const { container } = renderInfoGroup()
      const contenedor = container.firstChild as HTMLElement
      expect(contenedor.children.length).toBe(2)
    })
    it('el grupo de contacto contiene 3 items', () => {
      const { container } = renderInfoGroup()
      const contenedor = container.firstChild as HTMLElement
      const contactGroup = contenedor.children[1]
      expect(contactGroup.children.length).toBe(3)
    })
    it('los items están en el orden correcto', () => {
      renderInfoGroup()
      const allText = screen.getByText('Chile').parentElement?.parentElement?.textContent || ''
      expect(allText.indexOf('Chile')).toBeLessThan(allText.indexOf('vicen.ramirezg@duoc.cl'))
    })
  })

  describe('Estilos clave', () => {
    it('aplica estilos principales al contenedor', () => {
      const { container } = renderInfoGroup()
      const contenedor = container.firstChild as HTMLElement
      expect(contenedor).toHaveStyle({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
        marginTop: '20px',
      })
    })
    it('el grupo de contacto usa flexbox y gap', () => {
      const { container } = renderInfoGroup()
      const contenedor = container.firstChild as HTMLElement
      const contactGroup = contenedor.children[1] as HTMLElement
      expect(contactGroup).toHaveStyle({
        display: 'flex',
        gap: '20px',
        flexWrap: 'wrap',
      })
      const style = contactGroup.getAttribute('style')
      expect(style).toContain('flex-wrap: wrap')
    })
  })

  describe('Iconos', () => {
    it('renderiza los iconos de Ant Design (role="img")', () => {
      const { container } = renderInfoGroup()
      const icons = container.querySelectorAll('[role="img"]')
      expect(icons.length).toBeGreaterThanOrEqual(4)
    })
    it('usa iconos SVG de Ant Design', () => {
      const { container } = renderInfoGroup()
      const icons = container.querySelectorAll('svg')
      expect(icons.length).toBeGreaterThanOrEqual(4)
    })
  })

  describe('Enlaces y accesibilidad', () => {
    it('el email y Chile no son enlaces', () => {
      renderInfoGroup()
      expect(screen.getByText('Chile').closest('a')).toBeNull()
      expect(screen.getByText('vicen.ramirezg@duoc.cl').closest('a')).toBeNull()
    })
    it.each([
      {
        text: 'github.com/ViceAsd18',
        href: 'https://github.com/ViceAsd18',
      },
      {
        text: 'in/vicente-ramírez-garay',
        href: 'https://www.linkedin.com/in/vicente-ram%C3%ADrez-garay/',
      },
    ])('el enlace de $text tiene href correcto y atributos de seguridad', ({ text, href }) => {
      renderInfoGroup()
      const link = screen.getByText(text).closest('a')
      expect(link).toHaveAttribute('href', href)
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
    it('los enlaces sociales abren en nueva pestaña', () => {
      renderInfoGroup()
      expect(screen.getByText('github.com/ViceAsd18').closest('a')).toHaveAttribute('target', '_blank')
      expect(screen.getByText('in/vicente-ramírez-garay').closest('a')).toHaveAttribute('target', '_blank')
    })
    it('los enlaces tienen rel="noopener noreferrer" para seguridad', () => {
      renderInfoGroup()
      expect(screen.getByText('github.com/ViceAsd18').closest('a')).toHaveAttribute('rel', 'noopener noreferrer')
      expect(screen.getByText('in/vicente-ramírez-garay').closest('a')).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
