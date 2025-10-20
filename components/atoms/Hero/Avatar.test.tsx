import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Avatar from './Avatar'

describe('Avatar', () => {
  it('renderiza un contenedor circular con aria-label y muestra fallback cuando no hay src', () => {
    render(<Avatar alt="Foto de perfil" />)
    const container = screen.getByLabelText('Foto de perfil')
    expect(container).toBeInTheDocument()
    expect(container).toHaveStyle('border-radius: 50%')
    expect(container).toHaveStyle('display: flex')
    // Fallback
    expect(container.querySelector('img')).toBeNull()
    expect(screen.getByText('V')).toBeInTheDocument()
  })

  it('cuando hay src, renderiza la imagen con alt y ajusta el tamaño', () => {
    render(<Avatar alt="Avatar" src="/avatar.png" size={128} />)
    const container = screen.getByLabelText('Avatar') as HTMLElement
    expect(container).toHaveStyle('width: 128px')
    expect(container).toHaveStyle('height: 128px')

    const img = screen.getByRole('img', { name: 'Avatar' }) as HTMLImageElement
    expect(img).toHaveAttribute('src', '/avatar.png')
    expect(img).toHaveStyle('object-fit: cover')
    expect(img).toHaveStyle('display: block')
  })

  it('usa tamaño por defecto 160 cuando no se provee size', () => {
    render(<Avatar alt="Default" src="/photo.jpg" />)
    const container = screen.getByLabelText('Default') as HTMLElement
    expect(container).toHaveStyle('width: 160px')
    expect(container).toHaveStyle('height: 160px')
  })
})
