import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import CertFiltroBar from './CertFiltroBar'

describe('CertFiltroBar', () => {
  const categorias = ['Todos', 'Cloud', 'DevOps', 'Programación']
  let onChangeFiltro: ReturnType<typeof vi.fn>
  
  beforeEach(() => {
    onChangeFiltro = vi.fn()
  })

  afterEach(() => {
    cleanup()
  })

  describe('Renderizado', () => {
    it('renderiza el contenedor y todos los botones de categorías', () => {
      const { container } = render(
        <CertFiltroBar categorias={categorias} activa="Todos" onChangeFiltro={onChangeFiltro} />
      )
      
      expect(container.querySelector('.cert-filtro-bar')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Todos' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Cloud' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'DevOps' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Programación' })).toBeInTheDocument()
      expect(container.querySelectorAll('.ant-btn').length).toBe(4)
    })

    it.each([
      { categorias: ['Todos', 'Frontend', 'Backend'], visible: ['Todos', 'Frontend', 'Backend'], noVisible: 'Cloud' },
      { categorias: ['Todos'], visible: ['Todos'], noVisible: 'Cloud' },
      { categorias: ['Todos', 'Cloud & Azure', 'DevOps/CI-CD'], visible: ['Cloud & Azure', 'DevOps/CI-CD'], noVisible: null }
    ])('renderiza correctamente con diferentes listas de categorías', ({ categorias, visible, noVisible }) => {
      render(<CertFiltroBar categorias={categorias} activa="Todos" onChangeFiltro={onChangeFiltro} />)
      
      visible.forEach(cat => {
        expect(screen.getByRole('button', { name: cat })).toBeInTheDocument()
      })
      
      if (noVisible) {
        expect(screen.queryByRole('button', { name: noVisible })).not.toBeInTheDocument()
      }
    })
  })

  describe('Interacciones', () => {
    it.each([
      { categoria: 'Cloud' },
      { categoria: 'DevOps' },
      { categoria: 'Programación' }
    ])('llama a onChangeFiltro con "$categoria" al hacer clic', ({ categoria }) => {
      render(<CertFiltroBar categorias={categorias} activa="Todos" onChangeFiltro={onChangeFiltro} />)
      
      fireEvent.click(screen.getByRole('button', { name: categoria }))
      
      expect(onChangeFiltro).toHaveBeenCalledWith(categoria)
    })

    it('permite múltiples clics en el mismo botón', () => {
      render(<CertFiltroBar categorias={categorias} activa="Todos" onChangeFiltro={onChangeFiltro} />)
      
      const cloudButton = screen.getByRole('button', { name: 'Cloud' })
      fireEvent.click(cloudButton)
      fireEvent.click(cloudButton)
      fireEvent.click(cloudButton)
      
      expect(onChangeFiltro).toHaveBeenCalledTimes(3)
      expect(onChangeFiltro).toHaveBeenCalledWith('Cloud')
    })
  })

  describe('Estilos', () => {
    it('aplica estilos diferentes al botón activo vs inactivo', () => {
      render(<CertFiltroBar categorias={categorias} activa="Cloud" onChangeFiltro={onChangeFiltro} />)
      
      const cloudButton = screen.getByRole('button', { name: 'Cloud' }) as HTMLElement
      const todosButton = screen.getByRole('button', { name: 'Todos' }) as HTMLElement
      
      // Botón activo
      expect(cloudButton).toHaveStyle({
        background: 'rgba(59,130,246,0.25)',
        color: '#e2e8f0'
      })
      expect(cloudButton.getAttribute('style')).toMatch(/box-shadow:\s*0\s+0\s+12px/)
      
      // Botón inactivo
      expect(todosButton).toHaveStyle({
        background: 'rgba(255,255,255,0.05)',
        color: '#e2e8f0'
      })
    })

    it('actualiza los estilos cuando cambia la categoría activa', () => {
      const { rerender } = render(
        <CertFiltroBar categorias={categorias} activa="Todos" onChangeFiltro={onChangeFiltro} />
      )
      
      let todosButton = screen.getByRole('button', { name: 'Todos' }) as HTMLElement
      expect(todosButton).toHaveStyle({ background: 'rgba(59,130,246,0.25)' })
      
      rerender(<CertFiltroBar categorias={categorias} activa="Cloud" onChangeFiltro={onChangeFiltro} />)
      
      todosButton = screen.getByRole('button', { name: 'Todos' }) as HTMLElement
      const cloudButton = screen.getByRole('button', { name: 'Cloud' }) as HTMLElement
      
      expect(todosButton).toHaveStyle({ background: 'rgba(255,255,255,0.05)' })
      expect(cloudButton).toHaveStyle({ background: 'rgba(59,130,246,0.25)' })
    })

    it('aplica estilos consistentes al contenedor y botones', () => {
      const { container } = render(
        <CertFiltroBar categorias={categorias} activa="Todos" onChangeFiltro={onChangeFiltro} />
      )
      
      const filtroBar = container.querySelector('.cert-filtro-bar') as HTMLElement
      expect(filtroBar).toHaveStyle({
        display: 'flex',
        gap: '8px',
        width: '90%'
      })
      
      const button = screen.getByRole('button', { name: 'Cloud' }) as HTMLElement
      expect(button.getAttribute('style')).toMatch(/border-radius:\s*20px/)
      expect(button.getAttribute('style')).toMatch(/padding:\s*6px\s+18px/)
      expect(button.getAttribute('style')).toMatch(/transition:\s*all\s+0\.25s/)
    })
  })
})
