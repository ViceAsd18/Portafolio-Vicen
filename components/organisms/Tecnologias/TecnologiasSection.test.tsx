import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TecnologiasSection from './TecnologiasSection'

describe('TecnologiasSection', () => {
  const renderSection = () => render(<TecnologiasSection />)

  it('renderiza la sección con clase tecnologias-section y layout de grid', () => {
    const { container } = renderSection()
    const section = container.querySelector('.tecnologias-section') as HTMLElement
    expect(section).toBeInTheDocument()
    // AntD Row/Col existen
    expect(container.querySelector('.ant-row')).toBeInTheDocument()
    expect(container.querySelectorAll('.ant-col').length).toBeGreaterThanOrEqual(4)
  })

  it('muestra los grupos con sus títulos', () => {
    renderSection()
    const grupos = ['Frontend', 'Backend', 'Herramientas', 'Aprendiendo']
    for (const titulo of grupos) {
      expect(screen.getByText(new RegExp(titulo, 'i'))).toBeInTheDocument()
    }
  })

  it('cada grupo renderiza sus logos', () => {  
    renderSection()
    // Verificamos algunos logos representativos por nombre exacto para evitar ambigüedades
    // Frontend
    expect(screen.getByText('HTML')).toBeInTheDocument()
    expect(screen.getByText('CSS')).toBeInTheDocument()
    expect(screen.getByText('JavaScript')).toBeInTheDocument()
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Bootstrap')).toBeInTheDocument()
    
    // Backend
    expect(screen.getByText('Java')).toBeInTheDocument()
    expect(screen.getByText('Spring')).toBeInTheDocument()
    expect(screen.getByText('MySQL')).toBeInTheDocument()
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('Oracle DB')).toBeInTheDocument()
    
    // Herramientas
    expect(screen.getByText('VS Code')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('Postman')).toBeInTheDocument()
    expect(screen.getByText('IntelliJ IDEA')).toBeInTheDocument()
    expect(screen.getByText('Figma')).toBeInTheDocument()
    
    // Aprendiendo
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('Git')).toBeInTheDocument()
    expect(screen.getByText('AWS')).toBeInTheDocument()
  })
})
