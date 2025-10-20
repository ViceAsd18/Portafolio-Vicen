import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ProyectosSection from './ProyectosSection'

describe('ProyectosSection', () => {
  const renderSection = () => render(<ProyectosSection />)

  it('renderiza la sección con título centrado', () => {
    const { container } = renderSection()
    const section = container.querySelector('section#proyectos') as HTMLElement
    expect(section).toBeInTheDocument()

    const titulo = screen.getByText(/proyectos/i)
    expect(titulo).toBeInTheDocument()
    expect(titulo).toHaveStyle({ textAlign: 'center' })
  })

  it('muestra el contenedor grid de proyectos', () => {
    const { container } = renderSection()
    const contenedor = container.querySelector('.contenedor-proyectos') as HTMLElement
    expect(contenedor).toBeInTheDocument()
    // Comprobaciones básicas de layout configurado vía grid
    expect(contenedor.getAttribute('style') || '').toMatch(/grid/i)
    expect(contenedor.getAttribute('style') || '').toMatch(/gap: 28px|gap: 28;/i)
  })

  it('renderiza las 3 ProjectCard con sus títulos y botón', () => {
    renderSection()
    // Títulos de las tarjetas
    expect(screen.getByText(/clínica médica/i)).toBeInTheDocument()
    expect(screen.getByText(/huerto hogar/i)).toBeInTheDocument()
    expect(screen.getByText(/edustream/i)).toBeInTheDocument()

    // Resúmenes (comprobación parcial para evitar fragilidad)
    expect(screen.getByText(/gestionar pacientes/i)).toBeInTheDocument()
    expect(screen.getByText(/productos frescos del campo/i)).toBeInTheDocument()
    expect(screen.getByText(/promoción de cursos/i)).toBeInTheDocument()

    // Botones/Enlaces "Ver Código" (uno por tarjeta) - AntD puede renderizar <a>
    const botones = screen.queryAllByRole('button', { name: /ver código/i })
    const enlaces = screen.queryAllByRole('link', { name: /ver código/i })
    expect(botones.length + enlaces.length).toBe(3)
  })
})
