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
      
      // Título
      expect(titulo).toHaveStyle({ 
        fontSize: '45px',
        fontWeight: 700
      })
      
      // Párrafo
      expect(parrafo).toHaveStyle({ 
        fontSize: '30px',
        color: 'rgb(0, 255, 255)',
        textAlign: 'center',
        margin: '10px 0px'
      })
      
      // Comparación de tamaños
      expect(parseInt(titulo.style.fontSize)).toBeGreaterThan(parseInt(parrafo.style.fontSize))
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
