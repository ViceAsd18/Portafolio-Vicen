import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import ProjectCard from './ProjectCard'

describe('ProjectCard', () => {
  const defaultProps = {
    id: 'proyecto-1',
    titulo: 'Sistema de Gestión',
    resumen: 'Una aplicación web completa para gestionar proyectos',
    cover: '/images/proyecto1.jpg',
    tecnologias: [
      { src: '/tech/react.svg', name: 'React' },
      { src: '/tech/typescript.svg', name: 'TypeScript' },
      { src: '/tech/nodejs.svg', name: 'Node.js' }
    ],
    repoUrl: 'https://github.com/usuario/proyecto'
  }

  afterEach(() => cleanup())

  describe('Renderizado básico', () => {
    it('renderiza estructura, título h2, resumen p e imagen de portada', () => {
      const { container } = render(<ProjectCard {...defaultProps} />)
      const article = container.querySelector('article') as HTMLElement
      expect(article).toBeInTheDocument()

      const titulo = screen.getByText('Sistema de Gestión')
      const resumen = screen.getByText('Una aplicación web completa para gestionar proyectos')
      expect(titulo.tagName.toLowerCase()).toBe('h2')
      expect(resumen.tagName.toLowerCase()).toBe('p')

      const portada = screen.getByAltText('Sistema de Gestión') as HTMLImageElement
      expect(portada).toHaveAttribute('src', '/images/proyecto1.jpg')
    })

    it('renderiza el enlace "Ver Código" con href correcto', () => {
      render(<ProjectCard {...defaultProps} />)
      const link = screen.getByText('Ver Código').closest('a')
      expect(link).toHaveAttribute('href', 'https://github.com/usuario/proyecto')
    })
  })

  describe('Tecnologías', () => {
    it('muestra tecnologías por nombre y aplica tamaño 32px a los íconos', () => {
      const { container } = render(<ProjectCard {...defaultProps} />)
      expect(screen.getByText('React')).toBeInTheDocument()
      expect(screen.getByText('TypeScript')).toBeInTheDocument()
      expect(screen.getByText('Node.js')).toBeInTheDocument()

      const images = Array.from(container.querySelectorAll('img'))
      const techImages = images.slice(1)
      techImages.forEach(img => {
        const style = img.getAttribute('style') || ''
        expect(style).toContain('width: 32px')
        expect(style).toContain('height: 32px')
      })
    })

    it.each([
      { tecnologias: [], count: 0 },
      { tecnologias: [{ src: '/tech/react.svg', name: 'React' }], count: 1 },
      { tecnologias: [
          { src: '/tech/react.svg', name: 'React' },
          { src: '/tech/vue.svg', name: 'Vue' },
          { src: '/tech/angular.svg', name: 'Angular' },
          { src: '/tech/svelte.svg', name: 'Svelte' },
          { src: '/tech/nextjs.svg', name: 'Next.js' }
        ], count: 5 }
    ])('renderiza correctamente cantidad de tecnologías: $count', ({ tecnologias, count }) => {
      const props = { ...defaultProps, tecnologias }
      const { container } = render(<ProjectCard {...props} />)
      const images = Array.from(container.querySelectorAll('img'))
      const techImages = images.slice(1)
      expect(techImages.length).toBe(count)
    })

    it('muestra solo las tecnologías con nombre cuando algunas no lo tienen', () => {
      const props = {
        ...defaultProps,
        tecnologias: [
          { src: '/tech/react.svg' },
          { src: '/tech/typescript.svg', name: 'TypeScript' }
        ]
      }
      render(<ProjectCard {...props} />)
      expect(screen.getByText('TypeScript')).toBeInTheDocument()
    })
  })

  describe('Estilos y layout', () => {
    it('aplica estilos clave de tarjeta (flex column, gap, colores)', () => {
      const { container } = render(<ProjectCard {...defaultProps} />)
      const article = container.querySelector('article') as HTMLElement
      expect(article).toHaveStyle({
        background: 'rgba(15,23,42,0.9)',
        borderRadius: '16px',
        color: '#e2e8f0',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        width: '100%',
        height: '100%',
        padding: '16px 0px 16px'
      })

      // Tipografía básica
      const titulo = screen.getByText('Sistema de Gestión')
      const resumen = screen.getByText('Una aplicación web completa para gestionar proyectos')
      expect(titulo).toHaveStyle({ fontSize: '22px', textAlign: 'center' })
      expect(resumen).toHaveStyle({ fontSize: '15px', textAlign: 'center', color: '#cbd5e1' })
    })

    it('contenedor de portada con aspect-ratio 16:9 y contenedor de tecnologías con flex + gap', () => {
      const { container } = render(<ProjectCard {...defaultProps} />)
      const imageContenedor = container.querySelector('article > div:first-child') as HTMLElement
      const styleAttr = imageContenedor.getAttribute('style') || ''
      expect(styleAttr).toContain('aspect-ratio: 16 / 9')

      const techContainer = container.querySelector('article > div:nth-child(3)') as HTMLElement
      expect(techContainer).toHaveStyle({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '14px'
      })
    })
  })

  describe('Variaciones de contenido', () => {
    it.each([
      {
        titulo: 'E-commerce Platform',
        resumen: 'Plataforma de comercio electrónico con carrito de compras'
      },
      {
        titulo: 'Sistema Integral de Gestión Empresarial y Control de Inventarios',
        resumen: 'Una aplicación web completa y robusta diseñada para gestionar todos los aspectos de un negocio, incluyendo inventario, ventas, compras, clientes y reportes detallados con análisis en tiempo real'
      },
      {
        titulo: 'App de Gestión & Control',
        resumen: 'Aplicación con TypeScript, React & Node.js ⚛️'
      }
    ])('renderiza correctamente textos: "$titulo"', ({ titulo, resumen }) => {
      const props = { ...defaultProps, titulo, resumen }
      render(<ProjectCard {...props} />)
      expect(screen.getByText(titulo)).toBeInTheDocument()
      expect(screen.getByText(resumen)).toBeInTheDocument()
    })

    it('renderiza correctamente sin repoUrl', () => {
      const props = { ...defaultProps, repoUrl: undefined }
      render(<ProjectCard {...props} />)
      const boton = screen.getByText('Ver Código')
      expect(boton).toBeInTheDocument()
    })
  })
})
