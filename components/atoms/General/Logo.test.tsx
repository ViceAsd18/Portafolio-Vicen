import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'
import Logo from './Logo'

describe('Logo', () => {
  afterEach(() => cleanup())

  const src = '/logo.png'

  describe('Renderizado básico', () => {
    it('renderiza solo la imagen cuando no se pasa name y usa alt por defecto "logo"', () => {
      render(<Logo src={src} />)
      const img = screen.getByRole('img', { name: 'logo' }) as HTMLImageElement
      expect(img).toBeInTheDocument()
      expect(img).toHaveAttribute('src', src)
      expect(img).toHaveAttribute('alt', 'logo')
      expect(img).not.toHaveAttribute('title')
    })

    it('cuando se pasa name renderiza contenedor con texto y hereda alt/title de name', () => {
      render(<Logo src={src} name="Vicen" />)
      const label = screen.getByText('Vicen')
      expect(label).toBeInTheDocument()
      const img = screen.getByRole('img', { name: 'Vicen' })
      expect(img).toHaveAttribute('alt', 'Vicen')
      expect(img).toHaveAttribute('title', 'Vicen')

      const container = label.closest('div') as HTMLElement
      expect(container).toHaveStyle('display: flex')
      expect(container).toHaveStyle('flex-direction: column')
      expect(container).toHaveStyle('gap: 8px')
    })
  })

  describe('Atributos y prioridad', () => {
    it('usa alt proporcionado y también como title cuando no hay title ni name', () => {
      render(<Logo src={src} alt="Mi Alt" />)
      const img = screen.getByRole('img', { name: 'Mi Alt' })
      expect(img).toHaveAttribute('alt', 'Mi Alt')
      expect(img).toHaveAttribute('title', 'Mi Alt')
    })

    it.each([
      { name: 'Nombre', alt: 'Alternativo', title: 'Titulo', expectedAlt: 'Alternativo', expectedTitle: 'Titulo' },
      { name: 'Nombre', alt: 'Alternativo', title: undefined, expectedAlt: 'Alternativo', expectedTitle: 'Nombre' },
    ])('resuelve prioridad de atributos (title > name > alt)', ({ name, alt, title, expectedAlt, expectedTitle }) => {
      render(<Logo src={src} name={name} alt={alt} title={title as any} />)
      const img = screen.getByRole('img', { name: expectedAlt })
      expect(img).toHaveAttribute('alt', expectedAlt)
      expect(img).toHaveAttribute('title', expectedTitle)
    })
  })

  describe('Estilos clave', () => {
    it('aplica size, radius, fit y filtro invertido cuando invertOnDark=true', () => {
      render(<Logo src={src} size={64} radius={12} fit="cover" invertOnDark />)
      const img = screen.getByRole('img', { name: 'logo' })
      expect(img).toHaveStyle('width: 64px')
      expect(img).toHaveStyle('height: 64px')
      expect(img).toHaveStyle('border-radius: 12px')
      expect(img).toHaveStyle('object-fit: cover')
      expect(img).toHaveStyle('filter: brightness(0) invert(1)')
    })

    it('mezcla estilos personalizados para imagen, texto y contenedor', () => {
      render(
        <Logo
          src={src}
          name="Marca"
          style={{ filter: 'none' }}
          textStyle={{ color: 'yellow' }}
          containerStyle={{ background: 'pink' }}
        />
      )
      const img = screen.getByRole('img', { name: 'Marca' })
      expect(img).toHaveStyle('filter: none')

      const label = screen.getByText('Marca')
      expect(label).toHaveStyle('color: rgb(255, 255, 0)')

      const container = label.closest('div') as HTMLElement
      expect(container).toHaveStyle('background: pink')
    })
  })

  describe('Layout', () => {
    it('usa layout en fila y gap personalizado cuando direction="row" y gap=12', () => {
      render(<Logo src={src} name="Fila" direction="row" gap={12} />)
      const label = screen.getByText('Fila')
      const container = label.closest('div') as HTMLElement
      expect(container).toHaveStyle('flex-direction: row')
      expect(container).toHaveStyle('gap: 12px')
    })
  })
})
