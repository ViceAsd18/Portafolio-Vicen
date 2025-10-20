import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import CertContenedor from './CertContenedor'

vi.mock('data/CertData', () => ({
  certificaciones: [
    {
      id: 1,
      titulo: 'Azure Fundamentals',
      emisor: 'Microsoft',
      fecha: '2024',
      logo: '/azure.png',
      categoria: 'Cloud',
      url: 'https://example.com/cert1',
      skills: ['Azure', 'Infraestructura']
    },
    {
      id: 2,
      titulo: 'DevOps Essentials',
      emisor: 'CertiProf',
      fecha: '2025',
      logo: '/devops.png',
      categoria: 'DevOps',
      url: 'https://example.com/cert2',
      skills: ['CI/CD', 'Automatización']
    },
    {
      id: 3,
      titulo: 'Python Programmer',
      emisor: 'Python Institute',
      fecha: '2025',
      logo: '/python.png',
      categoria: 'Programación',
      url: 'https://example.com/cert3',
      skills: ['Python', 'Desarrollo']
    },
    {
      id: 4,
      titulo: 'AI Fundamentals',
      emisor: 'Microsoft',
      fecha: '2024',
      logo: '/ai.png',
      categoria: 'Cloud',
      url: 'https://example.com/cert4',
      skills: ['IA', 'Machine Learning']
    }
  ]
}))

describe('CertContenedor', () => {
  let container: HTMLElement

  beforeEach(() => {
    vi.clearAllMocks()
    const result = render(<CertContenedor />)
    container = result.container
  })

  describe('Renderizado inicial', () => {
    it('renderiza todas las certificaciones y filtros por defecto', () => {
      expect(container.querySelector('.certificaciones-content')).toBeInTheDocument()
      
      // Todas las certificaciones visibles
      expect(screen.getByText('Azure Fundamentals')).toBeInTheDocument()
      expect(screen.getByText('DevOps Essentials')).toBeInTheDocument()
      expect(screen.getByText('Python Programmer')).toBeInTheDocument()
      expect(screen.getByText('AI Fundamentals')).toBeInTheDocument()
      
      // Todos los botones de filtro
      expect(screen.getByRole('button', { name: 'Todos' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Cloud' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'DevOps' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Programación' })).toBeInTheDocument()
    })

    it('pasa props correctamente a CertCard', () => {
      expect(screen.getAllByText(/Microsoft · 2024/).length).toBe(2)
      expect(screen.getByText('CertiProf · 2025')).toBeInTheDocument()
      expect(screen.getByText('Python Institute · 2025')).toBeInTheDocument()
    })
  })

  describe('Funcionalidad de filtrado', () => {
    it.each([
      { categoria: 'Cloud', visible: ['Azure Fundamentals', 'AI Fundamentals'], oculto: ['DevOps Essentials', 'Python Programmer'], count: 2 },
      { categoria: 'DevOps', visible: ['DevOps Essentials'], oculto: ['Azure Fundamentals', 'Python Programmer', 'AI Fundamentals'], count: 1 },
      { categoria: 'Programación', visible: ['Python Programmer'], oculto: ['Azure Fundamentals', 'DevOps Essentials', 'AI Fundamentals'], count: 1 }
    ])('filtra correctamente por $categoria', ({ categoria, visible, oculto, count }) => {
      fireEvent.click(screen.getByRole('button', { name: categoria }))
      
      visible.forEach(titulo => {
        expect(screen.getByText(titulo)).toBeInTheDocument()
      })
      
      oculto.forEach(titulo => {
        expect(screen.queryByText(titulo)).not.toBeInTheDocument()
      })
      
      expect(container.querySelectorAll('.cert-card').length).toBe(count)
    })

    it('vuelve a mostrar todas al hacer clic en "Todos"', () => {
      fireEvent.click(screen.getByRole('button', { name: 'Cloud' }))
      expect(screen.queryByText('DevOps Essentials')).not.toBeInTheDocument()
      
      fireEvent.click(screen.getByRole('button', { name: 'Todos' }))
      expect(screen.getByText('DevOps Essentials')).toBeInTheDocument()
      expect(container.querySelectorAll('.cert-card').length).toBe(4)
    })

    it('cambia correctamente entre filtros', () => {
      fireEvent.click(screen.getByRole('button', { name: 'Cloud' }))
      expect(screen.getByText('Azure Fundamentals')).toBeInTheDocument()
      
      fireEvent.click(screen.getByRole('button', { name: 'DevOps' }))
      expect(screen.getByText('DevOps Essentials')).toBeInTheDocument()
      expect(screen.queryByText('Azure Fundamentals')).not.toBeInTheDocument()
    })
  })

  describe('Estructura y layout', () => {
    it('aplica estilos correctos al contenedor', () => {
      const contenedor = container.querySelector('.certificaciones-content') as HTMLElement
      
      expect(contenedor).toHaveStyle({
        width: '100%',
        maxWidth: '1400px',
        margin: '0 auto',
        textAlign: 'center',
        padding: '0 20px'
      })
    })

    it('usa layout de grid con Ant Design Row/Col', () => {
      expect(container.querySelector('.ant-row')).toBeInTheDocument()
      expect(container.querySelectorAll('.ant-col').length).toBeGreaterThan(0)
    })
  })
})
