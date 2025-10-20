import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SobreMiSection from './SobreMiSection'

describe('SobreMiSection', () => {
  const renderSection = () => render(<SobreMiSection />)

  it('renderiza la sección con clase sobre-mi-section y layout de columnas', () => {
    const { container } = renderSection()
    const section = container.querySelector('.sobre-mi-section') as HTMLElement
    expect(section).toBeInTheDocument()

    // AntD Row/Col
    expect(container.querySelector('.ant-row')).toBeInTheDocument()
    const cols = container.querySelectorAll('.ant-col')
    expect(cols.length).toBeGreaterThanOrEqual(2)
  })

  it('incluye el texto principal y la lista de educación', () => {
    renderSection()
    // Título del bloque de texto
    expect(screen.getByText(/sobre mi/i)).toBeInTheDocument()
    // Título de la lista de educación
    expect(screen.getByText(/educacion/i)).toBeInTheDocument()
    // Elementos clave del resumen (usar getAllByText para permitir duplicados)
    expect(screen.getAllByText(/Ingeniería en Informática/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Spring Framework 6/i)).toBeInTheDocument()
    // Verificar instituciones
    expect(screen.getByText('Duoc UC')).toBeInTheDocument()
    expect(screen.getByText('Udemy')).toBeInTheDocument()
  })
})
