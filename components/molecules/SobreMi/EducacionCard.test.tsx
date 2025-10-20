import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import EducacionCard from './EducacionCard'

describe('EducacionCard', () => {
  afterEach(() => cleanup())

  const defaultProps = {
    logo: '/logos/universidad.png',
    institucion: 'Universidad Tecnológica',
    titulo: 'Ingeniería en Sistemas',
    periodo: '2020 - 2024',
  }

  const renderCard = (props = defaultProps) => render(<EducacionCard {...props} />)

  describe('Renderizado básico', () => {
    it('muestra institución, título, periodo y logo', () => {
      const { container } = renderCard()
      expect(container.firstChild).toBeInTheDocument()

      expect(screen.getByText(defaultProps.institucion)).toBeInTheDocument()
      expect(screen.getByText(defaultProps.titulo)).toBeInTheDocument()
      expect(screen.getByText(defaultProps.periodo)).toBeInTheDocument()

      const logo = screen.getByAltText(defaultProps.institucion)
      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', defaultProps.logo)
    })
  })

  describe('Estructura y orden', () => {
    it('usa etiquetas semánticas correctas y ordena logo -> textos', () => {
      const { container } = renderCard()
      const card = container.firstChild as HTMLElement

      // Estructura principal
      const institucion = screen.getByText(defaultProps.institucion)
      const titulo = screen.getByText(defaultProps.titulo)
      const periodo = screen.getByText(defaultProps.periodo)

      expect(institucion.tagName.toLowerCase()).toBe('h4')
      expect(titulo.tagName.toLowerCase()).toBe('p')
      expect(periodo.tagName.toLowerCase()).toBe('p')

      // Orden: primero img, luego contenedor de textos
      const children = Array.from(card.children)
      expect(children.length).toBeGreaterThanOrEqual(2)
      const firstChild = children[0]
      const hasImage = firstChild.tagName.toLowerCase() === 'img' || firstChild.querySelector('img') !== null
      expect(hasImage).toBe(true)

      const textContainer = children[children.length - 1]
      expect(textContainer.tagName.toLowerCase()).toBe('div')
      expect(textContainer.querySelector('h4')).toBeInTheDocument()
      expect(textContainer.querySelectorAll('p').length).toBe(2)
      expect(textContainer.children.length).toBe(3)
    })
  })

  describe('Estilos clave', () => {
    it('aplica estilos principales al contenedor (flex, gap, padding, borde, fondo, transición)', () => {
      const { container } = renderCard()
      const card = container.firstChild as HTMLElement
      expect(card).toHaveStyle({
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        background: 'rgba(255,255,255,0.05)',
        padding: '16px 20px',
        borderRadius: '10px',
      })
      // Transición (usamos string ya que jsdom puede normalizar propiedades)
      expect(card.getAttribute('style')).toContain('transition')
    })

    it.each([
      {
        label: 'institución (h4)',
        text: defaultProps.institucion,
        styles: { fontSize: '16px', fontWeight: 600, color: '#cbd5e1' },
      },
      {
        label: 'título (p)',
        text: defaultProps.titulo,
        styles: { fontSize: '14px', color: '#cbd5e1', margin: '4px 0px' },
      },
      {
        label: 'periodo (p)',
        text: defaultProps.periodo,
        styles: { fontSize: '12px', color: '#94a3b8' },
      },
    ])('aplica estilos al texto de $label', ({ text, styles }) => {
      renderCard()
      // Cast permisivo para aceptar variantes con propiedades opcionales
      expect(screen.getByText(text)).toHaveStyle(styles as any)
    })

    it('aplica estilos al logo (radius, filtro, tamaño por defecto)', () => {
      renderCard()
      const logo = screen.getByAltText(defaultProps.institucion)
      const style = logo.getAttribute('style') || ''
      expect(style).toContain('border-radius: 8px')
      expect(style).toContain('filter: none')
      expect(style).toContain('width: 50px')
      expect(style).toContain('height: 50px')
    })
  })

  describe('Variaciones de contenido', () => {
    it.each([
      {
        props: {
          logo: '/logos/instituto.png',
          institucion: 'Instituto Politécnico',
          titulo: 'Técnico en Programación',
          periodo: '2018 - 2020',
        },
        expected: ['Instituto Politécnico', 'Técnico en Programación', '2018 - 2020'],
      },
      {
        props: { ...defaultProps, institucion: 'Universidad Tecnológica Nacional Regional Buenos Aires' },
        expected: ['Universidad Tecnológica Nacional Regional Buenos Aires'],
      },
      {
        props: {
          ...defaultProps,
          titulo:
            'Licenciatura en Ingeniería en Sistemas de Información y Tecnologías de la Información',
        },
        expected: [
          'Licenciatura en Ingeniería en Sistemas de Información y Tecnologías de la Información',
        ],
      },
      {
        props: {
          ...defaultProps,
          institucion: 'Universidad & Instituto Técnico',
          titulo: 'Ingeniería en Sistemas & TI',
        },
        expected: ['Universidad & Instituto Técnico', 'Ingeniería en Sistemas & TI'],
      },
      { props: { ...defaultProps, periodo: 'Ene 2020 - Dic 2024' }, expected: ['Ene 2020 - Dic 2024'] },
      { props: { ...defaultProps, periodo: '2020' }, expected: ['2020'] },
    ])('renderiza correctamente distintas variantes de contenido', ({ props, expected }) => {
      renderCard(props as typeof defaultProps)
      for (const text of expected as string[]) {
        expect(screen.getByText(text)).toBeInTheDocument()
      }
    })

    it('actualiza el contenido cuando cambian las props (rerender)', () => {
      const { rerender } = renderCard()
      expect(screen.getByText(defaultProps.institucion)).toBeInTheDocument()

      const newProps = {
        logo: '/logos/nuevo.png',
        institucion: 'Nueva Universidad',
        titulo: 'Nuevo Título',
        periodo: '2025 - 2029',
      }

      rerender(<EducacionCard {...newProps} />)
      expect(screen.getByText('Nueva Universidad')).toBeInTheDocument()
      expect(screen.getByText('Nuevo Título')).toBeInTheDocument()
      expect(screen.getByText('2025 - 2029')).toBeInTheDocument()
      expect(screen.queryByText(defaultProps.institucion)).not.toBeInTheDocument()
    })
  })
})
