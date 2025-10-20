import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Parrafo from './Parrafo'

describe('Parrafo', () => {
  it('renderiza el texto con estilos base y tamaño por defecto', () => {
    render(<Parrafo texto="Hola mundo" />)
    const p = screen.getByText('Hola mundo')
    expect(p.tagName.toLowerCase()).toBe('p')
    expect(p).toHaveStyle('font-size: 18px')
    expect(p).toHaveStyle('text-align: left')
    expect(p).toHaveStyle('margin: 0')
    // line-height numérico se serializa como valor sin unidad
    expect(p).toHaveStyle('line-height: 1.5')
    // font-weight por defecto 400
    expect(p).toHaveStyle('font-weight: 400')
  })

  it('aplica tamaño, color, alineación y margin personalizados', () => {
    render(
      <Parrafo texto="Config" size={20} color="#123456" align="center" margin="8px 0" />
    )
    const p = screen.getByText('Config')
    expect(p).toHaveStyle('font-size: 20px')
    expect(p).toHaveStyle('color: #123456')
    expect(p).toHaveStyle('text-align: center')
    expect(p).toHaveStyle('margin: 8px 0')
  })

  it('no establece color si no se pasa la prop', () => {
    render(<Parrafo texto="Sin color" />)
    const p = screen.getByText('Sin color')
    // La propiedad color no debería existir en el atributo style inline
    expect(p.getAttribute('style') || '').not.toMatch(/color:/i)
  })
})
