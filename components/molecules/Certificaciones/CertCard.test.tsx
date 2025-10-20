import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import CertCard from './CertCard'

describe('CertCard', () => {
  const defaultProps = {
    logo: '/path/to/logo.png',
    titulo: 'React Developer Certification',
    emisor: 'Meta',
    fecha: '2024',
    skills: ['React', 'JavaScript', 'TypeScript'],
    url: 'https://example.com/cert'
  }

  afterEach(() => {
    cleanup()
  })

  describe('Renderizado de contenido', () => {
    let container: HTMLElement

    beforeEach(() => {
      const result = render(<CertCard {...defaultProps} />)
      container = result.container
    })

    it('renderiza título, emisor, fecha, skills y botón', () => {
      expect(screen.getByText('React Developer Certification')).toBeInTheDocument()
      expect(screen.getByText('Meta · 2024')).toBeInTheDocument()
      expect(screen.getByText('React')).toBeInTheDocument()
      expect(screen.getByText('JavaScript')).toBeInTheDocument()
      expect(screen.getByText('TypeScript')).toBeInTheDocument()
      
      const botonTexto = screen.getByText('Ver credencial')
      const link = botonTexto.closest('a') as HTMLAnchorElement
      expect(link).toHaveAttribute('href', 'https://example.com/cert')
    })

    it('renderiza el logo con src y alt correctos', () => {
      const logo = screen.getByAltText('Meta') as HTMLImageElement
      expect(logo).toHaveAttribute('src', '/path/to/logo.png')
    })
  })

  describe('Estilos y estructura', () => {
    let container: HTMLElement

    beforeEach(() => {
      const result = render(<CertCard {...defaultProps} />)
      container = result.container
    })

    it('aplica estructura de article con clase y estilos de card', () => {
      const article = container.querySelector('article.cert-card') as HTMLElement
      
      expect(article).toBeInTheDocument()
      expect(article).toHaveStyle({
        background: 'rgba(15,23,42,0.9)',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '280px',
        height: '400px'
      })
    })

    it('el título tiene estilos correctos', () => {
      const titulo = screen.getByText('React Developer Certification')
      
      expect(titulo.tagName.toLowerCase()).toBe('h2')
      expect(titulo).toHaveStyle({ 
        textAlign: 'center',
        fontSize: '18px'
      })
    })

    it('el emisor/fecha tiene estilos correctos', () => {
      const info = screen.getByText('Meta · 2024')
      
      expect(info.tagName.toLowerCase()).toBe('p')
      expect(info).toHaveStyle({ 
        textAlign: 'center',
        color: '#94a3b8'
      })
    })
  })

  describe('Casos edge', () => {
    it('maneja array vacío de skills', () => {
      const { container } = render(<CertCard {...defaultProps} skills={[]} />)
      expect(screen.getByText('React Developer Certification')).toBeInTheDocument()
    })

    it('maneja múltiples skills (5+)', () => {
      const { container } = render(<CertCard {...defaultProps} skills={['Vue', 'Angular', 'Svelte', 'Ember', 'Next.js']} />)
      
      expect(screen.getByText('Vue')).toBeInTheDocument()
      expect(screen.getByText('Next.js')).toBeInTheDocument()
    })

    it('maneja textos largos y caracteres especiales', () => {
      const { container } = render(<CertCard 
        {...defaultProps} 
        titulo="Advanced Full Stack & Redux: Guía Práctica"
        emisor="Universidad® Inc."
      />)
      
      expect(screen.getByText('Advanced Full Stack & Redux: Guía Práctica')).toBeInTheDocument()
      expect(screen.getByText(/Universidad® Inc\./)).toBeInTheDocument()
    })
  })
})
