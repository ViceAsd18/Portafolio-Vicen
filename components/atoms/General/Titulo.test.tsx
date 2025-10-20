import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Titulo from './Titulo'

describe('Titulo', () => {
  it('renderiza un h2 por defecto cuando no se especifica nivel', () => {
    render(<Titulo texto="Mi Título" />)
    const el = screen.getByText(/mi título/i)
    expect(el.tagName).toBe('H2')
  })

  it('respeta el nivel pasado por prop (nivel=3 -> h3)', () => {
    render(<Titulo texto="Nivel 3" nivel={3} />)
    const el = screen.getByText(/nivel 3/i)
    expect(el.tagName).toBe('H3')
  })

  it('aplica la variante correcta (tituloTercero) con su color por defecto', () => {
    render(<Titulo texto="Tercero" variante="tituloTercero" />)
    const el = screen.getByText(/tercero/i)
    expect(el).toBeInTheDocument()
    // color por defecto de tituloTercero
    expect(el).toHaveStyle({ color: '#cbd5e1' })
  })

  it('permite sobreescribir el color con la prop color', () => {
    render(<Titulo texto="Color" variante="tituloTercero" color="#ff0000" />)
    const el = screen.getByText(/color/i)
    expect(el).toHaveStyle({ color: '#ff0000' })
    // Aseguramos que no sea el color por defecto
    expect(el).not.toHaveStyle({ color: '#cbd5e1' })
  })

  it('aplica align, margin y size correctamente', () => {
    render(<Titulo texto="Estilos" align="center" margin="12px 0" size={40} />)
    const el = screen.getByText(/estilos/i)
    expect(el).toHaveStyle({ textAlign: 'center' })
    expect(el).toHaveStyle({ margin: '12px 0' })
    // React inline style with number -> px, comprobamos la presencia de 40px
    expect(el.getAttribute('style') || '').toMatch(/font-size:\s*40px/)
  })
})
