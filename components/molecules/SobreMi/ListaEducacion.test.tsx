import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import ListaEducacion from './ListaEducacion'


// 💡 Prompt para GitHub Copilot:
// Refactoriza este test de Vitest para mantener el estándar de portafolio:
// - Mantén los bloques `describe` separados (Contenido, Estructura, Estilos, Imágenes).
// - Usa `beforeEach` con un render helper (`renderLista`).
// - Simplifica descripciones pero conserva claridad.
// - No elimines ninguna validación de jerarquía o estilos.
// - Mantén descripciones en español claro.


describe('ListaEducacion', () => {
  afterEach(() => cleanup())

  const renderLista = () => render(<ListaEducacion />)
  const instituciones = [
    {
      nombre: 'Duoc UC',
      carrera: 'Ingeniería en Informática',
      periodo: '2024 – Actualidad',
      alt: 'Duoc UC',
    },
    {
      nombre: 'Udemy',
      carrera: 'Spring Framework 6 & Spring Boot 3',
      periodo: '2025 enero – 2025 julio',
      alt: 'Udemy',
    },
  ]

  describe('Contenido y estructura', () => {
    it('renderiza el título "Educacion" como h2 con estilos correctos', () => {
      const { container } = renderLista()
      const titulo = screen.getByText('Educacion')
      expect(titulo).toBeInTheDocument()
      expect(titulo.tagName.toLowerCase()).toBe('h2')
      expect(titulo).toHaveStyle({ fontSize: '30px', fontWeight: 600 })
    })

    it.each(instituciones)('renderiza la institución $nombre con toda su información', (inst) => {
      renderLista()
      expect(screen.getByText(inst.nombre)).toBeInTheDocument()
      expect(screen.getByText(inst.carrera)).toBeInTheDocument()
      expect(screen.getByText(inst.periodo)).toBeInTheDocument()
      expect(screen.getByAltText(inst.alt)).toBeInTheDocument()
    })

    it('mantiene el orden correcto de instituciones', () => {
      const { container } = renderLista()
      const text = container.textContent || ''
      const duocIndex = text.indexOf('Duoc UC')
      const udemyIndex = text.indexOf('Udemy')
      expect(duocIndex).toBeLessThan(udemyIndex)
    })
  })

  describe('Estructura semántica', () => {
    it('usa jerarquía correcta de headings (h2 para título, h4 para instituciones)', () => {
      const { container } = renderLista()
      const h2 = container.querySelector('h2')
      const h4Elements = container.querySelectorAll('h4')
      expect(h2).toHaveTextContent('Educacion')
      expect(h4Elements.length).toBe(2)
      expect(h4Elements[0]).toHaveTextContent('Duoc UC')
      expect(h4Elements[1]).toHaveTextContent('Udemy')
    })

    it('el título está antes de las tarjetas de educación', () => {
      const { container } = renderLista()
      const contenedor = container.firstChild as HTMLElement
      const firstChild = contenedor.children[0]
      const hasH2 = firstChild.tagName.toLowerCase() === 'h2' || firstChild.querySelector('h2') !== null
      expect(hasH2).toBe(true)
    })
  })

  describe('Estilos y layout', () => {
    it('aplica flexbox vertical con gap de 24px al contenedor principal', () => {
      const { container } = renderLista()
      const contenedor = container.firstChild as HTMLElement
      expect(contenedor).toHaveStyle({
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      })
    })

    it('el contenedor de tarjetas también usa flexbox vertical con gap', () => {
      const { container } = renderLista()
      const contenedorPrincipal = container.firstChild as HTMLElement
      const contenedorTarjetas = contenedorPrincipal.children[1] as HTMLElement
      expect(contenedorTarjetas).toHaveStyle({
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      })
      expect(contenedorTarjetas.children.length).toBe(2)
    })
  })

  describe('Imágenes', () => {
    it.each(instituciones)('el logo de $nombre tiene src válido', (inst) => {
      renderLista()
      const logo = screen.getByAltText(inst.alt) as HTMLImageElement
      expect(logo.src).toBeTruthy()
    })
  })
})
