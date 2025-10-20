import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Logo from './Logo'

describe('Logo', () => {
  const src = '/logo.png'

  it('renderiza solo la imagen cuando no se pasa name y usa alt por defecto "logo"', () => {
    render(<Logo src={src} />)
    const img = screen.getByRole('img', { name: 'logo' }) as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', src)
    expect(img).toHaveAttribute('alt', 'logo')
    expect(img).not.toHaveAttribute('title')
  })

  it('usa alt proporcionado y también lo coloca como title cuando no hay title ni name', () => {
    render(<Logo src={src} alt="Mi Alt" />)
    const img = screen.getByRole('img', { name: 'Mi Alt' })
    expect(img).toHaveAttribute('alt', 'Mi Alt')
    expect(img).toHaveAttribute('title', 'Mi Alt')
  })

  it('cuando se pasa name renderiza contenedor y el texto; alt y title heredan de name', () => {
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

  it('aplica size, radius, fit y filtro invertido cuando invertOnDark=true', () => {
    render(
      <Logo src={src} size={64} radius={12} fit="cover" invertOnDark />
    )
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
  // getComputedStyle normaliza colores a rgb()
  expect(label).toHaveStyle('color: rgb(255, 255, 0)')

    const container = label.closest('div') as HTMLElement
    expect(container).toHaveStyle('background: pink')
  })

  it('prioriza title sobre name y alt para el atributo title, y alt se mantiene', () => {
    render(<Logo src={src} name="Nombre" alt="Alternativo" title="Titulo" />)
    const img = screen.getByRole('img', { name: 'Alternativo' })
    expect(img).toHaveAttribute('alt', 'Alternativo')
    expect(img).toHaveAttribute('title', 'Titulo')
  })

  it('cuando hay name y alt pero sin title, alt se usa para alt y name para title', () => {
    render(<Logo src={src} name="Nombre" alt="Alternativo" />)
    const img = screen.getByRole('img', { name: 'Alternativo' })
    expect(img).toHaveAttribute('alt', 'Alternativo')
    expect(img).toHaveAttribute('title', 'Nombre')
  })

  it('usa layout en fila y gap personalizado cuando direction="row" y gap=12', () => {
    render(<Logo src={src} name="Fila" direction="row" gap={12} />)
    const label = screen.getByText('Fila')
    const container = label.closest('div') as HTMLElement
    expect(container).toHaveStyle('flex-direction: row')
    expect(container).toHaveStyle('gap: 12px')
  })
})
