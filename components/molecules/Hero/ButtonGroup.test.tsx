import { render, screen } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import ButtonGroup from './ButtonGroup'

describe('ButtonGroup', () => {
  let container: HTMLElement

  beforeEach(() => {
    const result = render(<ButtonGroup />)
    container = result.container
  })

  afterEach(() => {
    cleanup()
  })

  describe('Renderizado', () => {
    it('renderiza el contenedor con 2 enlaces (LinkedIn y GitHub) en orden correcto', () => {
      expect(container.querySelector('.button-group')).toBeInTheDocument()
      expect(screen.getByText('LinkedIn')).toBeInTheDocument()
      expect(screen.getByText('GitHub')).toBeInTheDocument()
      
      const buttons = container.querySelectorAll('.btn-primary')
      expect(buttons.length).toBe(2)
      expect(buttons[0]).toHaveTextContent('LinkedIn')
      expect(buttons[1]).toHaveTextContent('GitHub')
    })
  })

  describe('Enlaces y navegación', () => {
    it.each([
      { texto: 'LinkedIn', href: 'https://www.linkedin.com/in/vicente-ram%C3%ADrez-21336b336/' },
      { texto: 'GitHub', href: 'https://github.com/ViceAsd18' }
    ])('$texto tiene href correcto y abre en nueva pestaña', ({ texto, href }) => {
      const link = screen.getByText(texto).closest('a')
      
      expect(link).toHaveAttribute('href', href)
      expect(link).toHaveAttribute('target', '_blank')
    })
  })

  describe('Íconos', () => {
    it('ambos enlaces contienen íconos con filtro de inversión y alt para accesibilidad', () => {
      const linkedinLink = screen.getByText('LinkedIn').closest('a')
      const githubLink = screen.getByText('GitHub').closest('a')
      
      const linkedinIcon = linkedinLink?.querySelector('img')
      const githubIcon = githubLink?.querySelector('img')
      
      // Verificar que existen
      expect(linkedinIcon).toBeInTheDocument()
      expect(githubIcon).toBeInTheDocument()
      
      // Verificar tamaños
      expect(linkedinIcon).toHaveAttribute('width', '22')
      expect(githubIcon).toHaveAttribute('width', '20')
      
      // Verificar filtro y accesibilidad
      const icons = container.querySelectorAll('.btn-primary img')
      icons.forEach(icon => {
        expect(icon).toHaveAttribute('alt')
        expect(icon).toHaveAttribute(
          'style',
          expect.stringMatching(/filter:\s*invert\(1\)\s+brightness\(1\.2\)/)
        )
      })
    })
  })

  describe('Layout y estilos', () => {
    it('usa flexbox responsive con gap y wrap', () => {
      const buttonGroup = container.querySelector('.button-group') as HTMLElement
      
      expect(buttonGroup).toHaveStyle({
        display: 'flex',
        gap: '24px',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '40px',
        flexWrap: 'wrap'
      })
    })
  })
})
