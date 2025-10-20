import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import ImagenPortada from './ImagenPortada'

describe('ImagenPortada', () => {
  it('renderiza una imagen con src y alt, y aplica estilos base', () => {
    render(<ImagenPortada src="/cover.jpg" alt="Portada" />)
    const img = screen.getByRole('img', { name: 'Portada' }) as HTMLImageElement
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', '/cover.jpg')
    expect(img).toHaveStyle('width: 100%')
    expect(img).toHaveStyle('height: 100%')
    expect(img).toHaveStyle('object-fit: cover')
    expect(img).toHaveStyle('display: block')
  })
})
