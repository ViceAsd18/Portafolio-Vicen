import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CertificacionesSection from './CertificacionesSection'

// Notas:
// - SectionContenedor se usa con variante="glass" y className="certificaciones-section".
// - Titulo centra el texto "Certificaciones" con size=40 y margin inferior.
// - Debe incluir el contenedor de certificados (CertContenedor) que renderiza el contenido.

describe('CertificacionesSection', () => {
  it('renderiza el contenedor de la sección con clase y variante esperada', () => {
    const { container } = render(<CertificacionesSection />)
    const root = container.querySelector('.certificaciones-section') as HTMLElement
    expect(root).toBeInTheDocument()
    // Estilos clave del SectionContenedor pueden no estar explícitos aquí, pero validamos estructura.
  })

  it('muestra el título centrado con tamaño adecuado', () => {
    render(<CertificacionesSection />)
    const titulo = screen.getByText('Certificaciones')
    expect(titulo).toBeInTheDocument()
    expect(['h1','h2','h3','h4','h5','h6']).toContain(titulo.tagName.toLowerCase())
    expect(titulo).toHaveStyle({ textAlign: 'center', fontSize: '40px', margin: '0px 0px 20px' })
  })

  it('incluye el contenedor de certificaciones', () => {
    const { container } = render(<CertificacionesSection />)
    // Buscamos el contenedor específico por su clase declarada en CertContenedor
    const content = container.querySelector('.certificaciones-content') as HTMLElement
    expect(content).toBeInTheDocument()
    // Debe contener la barra de filtros y una grilla (Row) de AntD
    const row = content.querySelector('.ant-row') || content.querySelector('[class*="ant-row"]')
    expect(row).toBeInTheDocument()
  })
})
