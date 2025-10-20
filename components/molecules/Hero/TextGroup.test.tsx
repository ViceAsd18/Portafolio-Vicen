import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import TextGroup from './TextGroup'

describe('TextGroup', () => {
  const defaultProps = {
    titulo: 'Hola, soy Vicente Ramírez',
    parrafo: 'Desarrollador Full Stack'
  }

  let container: HTMLElement

  beforeEach(() => {
    const result = render(<TextGroup {...defaultProps} />)
    container = result.container
  })

  afterEach(() => {
    cleanup()
  })

  describe('Renderizado y estructura', () => {
    it('renderiza h1 y p con contenido correcto en orden', () => {
      expect(screen.getByText('Hola, soy Vicente Ramírez')).toBeInTheDocument()
      expect(screen.getByText('Desarrollador Full Stack')).toBeInTheDocument()
      
      const titulo = screen.getByText('Hola, soy Vicente Ramírez')
      const parrafo = screen.getByText('Desarrollador Full Stack')
      
      expect(titulo.tagName.toLowerCase()).toBe('h1')
      expect(parrafo.tagName.toLowerCase()).toBe('p')
      
      const div = container.firstChild as HTMLElement
      const children = Array.from(div.children)
      expect(children.length).toBe(2)
      expect(children[0].tagName.toLowerCase()).toBe('h1')
      expect(children[1].tagName.toLowerCase()).toBe('p')
    })
  })

  describe('Estilos', () => {
    it('aplica estilos correctos al título y párrafo', () => {
      const titulo = screen.getByText('Hola, soy Vicente Ramírez')
      const parrafo = screen.getByText('Desarrollador Full Stack')
      
      // Título: comprobamos que fontSize está presente y es mayor que el párrafo
      const tituloStyle = titulo.getAttribute('style') || ''
  expect(tituloStyle).toMatch(/font-size:\s*45px/)
  expect(tituloStyle).toMatch(/font-weight:\s*800/)

      // Párrafo: color y tamaño corregidos según componente Parrafo
      const parrafoStyle = parrafo.getAttribute('style') || ''
      expect(parrafoStyle).toMatch(/font-size:\s*30px/)
      // color proviene de '#a5b4fc' -> comprobamos hex o rgb equivalente parcial
      expect(parrafoStyle).toMatch(/a5b4fc|rgb\(/i)
      expect(parrafoStyle).toMatch(/text-align:\s*center|text-align:\s*center/i)
      expect(parrafoStyle).toMatch(/margin:\s*10px 0px/)

      // Comparación de tamaños (extraer números)
      const tituloSize = parseInt((tituloStyle.match(/font-size:\s*(\d+)px/) || [])[1] || '45')
      const parrafoSize = parseInt((parrafoStyle.match(/font-size:\s*(\d+)px/) || [])[1] || '30')
      expect(tituloSize).toBeGreaterThan(parrafoSize)
    })
  })

  describe('Contenido dinámico', () => {
    it.each([
      { 
        titulo: 'Bienvenido a mi portafolio', 
        parrafo: 'Experto en React y Node.js' 
      },
      { 
        titulo: 'Este es un título muy largo que podría ocupar múltiples líneas', 
        parrafo: 'Párrafo largo con mucha información sobre habilidades técnicas' 
      },
      { 
        titulo: '¡Hola! Soy desarrollador & diseñador', 
        parrafo: 'JavaScript, TypeScript & React.js ⚛️' 
      }
    ])('renderiza correctamente: "$titulo"', ({ titulo, parrafo }) => {
      cleanup()
      render(<TextGroup titulo={titulo} parrafo={parrafo} />)
      
      expect(screen.getByText(titulo)).toBeInTheDocument()
      expect(screen.getByText(parrafo)).toBeInTheDocument()
    })

    it('actualiza el contenido cuando cambian las props', () => {
      cleanup()
      const { rerender } = render(<TextGroup {...defaultProps} />)
      
      expect(screen.getByText('Hola, soy Vicente Ramírez')).toBeInTheDocument()
      
      rerender(<TextGroup titulo="Nuevo título" parrafo="Nuevo párrafo" />)
      
      expect(screen.getByText('Nuevo título')).toBeInTheDocument()
      expect(screen.getByText('Nuevo párrafo')).toBeInTheDocument()
      expect(screen.queryByText('Hola, soy Vicente Ramírez')).not.toBeInTheDocument()
    })
  })
})
