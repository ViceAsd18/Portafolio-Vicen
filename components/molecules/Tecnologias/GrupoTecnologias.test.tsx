import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import GrupoTecnologias from './GrupoTecnologias'

const tecnologias = [
  { src: '/iconos/react.svg', name: 'React', size: 60 },
  { src: '/iconos/typescript.svg', name: 'TypeScript', size: 50 },
  { src: '/iconos/aws.svg', name: 'AWS', size: 40 },
]

describe('GrupoTecnologias', () => {
  it('renderiza el componente y estructura principal', () => {
    const { container } = render(<GrupoTecnologias titulo="Frontend" tecnologias={tecnologias} />)
    expect(container.firstChild).toBeInTheDocument()
    expect(container.firstChild).toHaveStyle({
      background: 'rgba(17, 24, 39, 0.85)',
      borderRadius: '12px',
      color: '#fff',
    })
  })

  it('renderiza el título recibido como heading con estilos', () => {
    render(<GrupoTecnologias titulo="Frontend" tecnologias={tecnologias} />)
    const titulo = screen.getByText('Frontend')
    expect(titulo).toBeInTheDocument()
    expect(['h1','h2','h3','h4','h5','h6']).toContain(titulo.tagName.toLowerCase())
    expect(titulo).toHaveStyle({ fontSize: '20px', textAlign: 'left' })
  })

  it('renderiza todos los logos con sus props', () => {
    render(<GrupoTecnologias titulo="Frontend" tecnologias={tecnologias} />)
    tecnologias.forEach(tec => {
      const logo = screen.getByAltText(tec.name)
      expect(logo).toBeInTheDocument()
      expect(logo).toHaveAttribute('src', tec.src)
      // El tamaño se aplica como width/height en el style
      const style = logo.getAttribute('style') || ''
      expect(style).toContain(`width: ${tec.size}px`)
      expect(style).toContain(`height: ${tec.size}px`)
    })
  })

  it('el contenedor de logos usa flex y wrap', () => {
    const { container } = render(<GrupoTecnologias titulo="Frontend" tecnologias={tecnologias} />)
    // Buscar el Space de AntD (div con display flex y marginTop)
    const space = container.querySelector('div[style*="margin-top: 16px"]')
    expect(space).toBeInTheDocument()
    expect(space?.getAttribute('style')).toContain('display: flex')
    expect(space?.getAttribute('style')).toContain('justify-content: flex-start')
  })
})
