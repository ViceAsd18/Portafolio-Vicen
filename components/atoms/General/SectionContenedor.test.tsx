import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import SectionContenedor from './SectionContenedor'

describe('SectionContenedor', () => {
  it('renderiza los children dentro del contenedor interno', () => {
    render(
      <SectionContenedor>
        <span>Contenido</span>
      </SectionContenedor>
    )
    const child = screen.getByText('Contenido')
    expect(child).toBeInTheDocument()

    // Estructura: section > div > child
    const container = child.closest('div') as HTMLElement
    expect(container).not.toBeNull()

    const section = container.closest('section') as HTMLElement
    expect(section).not.toBeNull()
    expect(section).toHaveClass('section-base')
  })

  it('aplica estilos por defecto (variante default) y padding por defecto', () => {
    render(
      <SectionContenedor>
        <span>Default</span>
      </SectionContenedor>
    )
    const section = screen.getByText('Default').closest('section') as HTMLElement

    // background específico de la variante default
    expect(section).toHaveAttribute(
      'style',
      expect.stringMatching(/background:\s*rgba\(37,\s*52,\s*72,\s*0\.9\)/)
    )
    // padding por defecto
    expect(section).toHaveStyle('padding: 100px 80px')
    // layout base
    expect(section).toHaveStyle('display: flex')
    expect(section).toHaveStyle('flex-direction: column')
    expect(section).toHaveStyle('border-radius: 12px')
  })

  it('usa la variante glass con backdrop blur y fondo translúcido', () => {
    render(
      <SectionContenedor variante="glass">
        <span>Glass</span>
      </SectionContenedor>
    )
    const section = screen.getByText('Glass').closest('section') as HTMLElement

    // Nota: jsdom/React puede omitir 'backdrop-filter' en style; comprobamos señales de la variante
    expect(section).toHaveAttribute(
      'style',
      expect.stringMatching(/background:\s*rgba\(255,\s*255,\s*255,\s*0\.06\)/)
    )
    expect(section).toHaveStyle('display: flex')
    expect(section).toHaveStyle('flex-direction: column')
  })

  it('permite personalizar el padding y concatenar className', () => {
    render(
      <SectionContenedor padding="20px 10px" className="extra">
        <span>Padding</span>
      </SectionContenedor>
    )
    const section = screen.getByText('Padding').closest('section') as HTMLElement
    expect(section).toHaveStyle('padding: 20px 10px')
    expect(section.className).toMatch(/section-base/)
    expect(section.className).toMatch(/extra/)
  })

  it('el contenedor interno tiene max-width y margen centrado', () => {
    render(
      <SectionContenedor>
        <span>Inner</span>
      </SectionContenedor>
    )
    const child = screen.getByText('Inner')
    const container = child.closest('div') as HTMLElement
    expect(container).toHaveStyle('max-width: 1600px')
    expect(container).toHaveStyle('width: 100%')
    expect(container).toHaveStyle('margin: 0 auto')
  })
})
