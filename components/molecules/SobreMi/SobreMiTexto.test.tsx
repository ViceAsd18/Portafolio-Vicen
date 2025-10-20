import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SobreMiTexto from './SobreMiTexto'

const textos = [
  'Soy estudiante de Ingeniería en Informática en Duoc UC (Mención Desarrollo de Software), tengo 19 años y me apasiona el desarrollo tanto frontend como backend. Además, me interesa aprender sobre cloud, especialmente AWS.',
  'Me considero una persona responsable y constante, con muchas ganas de seguir avanzando profesionalmente. Aprendo rápido cuando tengo un objetivo claro; me gusta resolver problemas probando distintas alternativas y entendiendo por qué algo funciona o no. Mantengo una actitud positiva frente a nuevos desafíos y aprovecho cada proyecto como una oportunidad para crecer.',
  'Mi objetivo a largo plazo es convertirme en un Ingeniero de Software, fortaleciendo mis conocimientos, criterio técnico y capacidad para aportar en el desarrollo de soluciones de calidad.',
  'Actualmente estoy disponible para participar en proyectos u oportunidades laborales donde pueda aportar, aprender y seguir creciendo como desarrollador. Busco colaborar en entornos que me permitan compatibilizar mis estudios con experiencia práctica.'
]

describe('SobreMiTexto', () => {
  it('renderiza el componente y estructura principal', () => {
    const { container } = render(<SobreMiTexto />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      display: 'flex',
      flexDirection: 'column',
    })
  })

  it('renderiza el título "Sobre mi" como heading con estilos', () => {
    render(<SobreMiTexto />)
    const titulo = screen.getByText('Sobre mi')
    expect(titulo).toBeInTheDocument()
    expect(['h1','h2','h3','h4','h5','h6']).toContain(titulo.tagName.toLowerCase())
    expect(titulo).toHaveStyle({ fontSize: '40px' })
  })

  it('incluye el componente InfoGroup', () => {
    render(<SobreMiTexto />)
    // InfoGroup tiene el texto Chile
    expect(screen.getByText('Chile')).toBeInTheDocument()
  })

  it('renderiza los 4 párrafos con su texto exacto y estilos', () => {
    render(<SobreMiTexto />)
    textos.forEach(texto => {
      const parrafo = screen.getByText(texto)
      expect(parrafo).toBeInTheDocument()
      expect(parrafo.tagName.toLowerCase()).toBe('p')
      expect(parrafo).toHaveStyle({ color: '#94a3b8', fontSize: '16px', margin: '16px 0px', textAlign: 'left' })
    })
  })
})
