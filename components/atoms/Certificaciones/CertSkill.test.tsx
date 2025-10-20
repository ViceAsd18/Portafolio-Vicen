import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CertSkill from './CertSkill'

describe('CertSkill', () => {
  it('renderiza el texto proporcionado', () => {
    render(<CertSkill texto="TypeScript" />)
    const tag = screen.getByText('TypeScript')
    expect(tag).toBeInTheDocument()
  })

  it('usa el componente Tag de AntD (clase base presente)', () => {
    render(<CertSkill texto="React" />)
    const node = screen.getByText('React')
    // AntD Tag debería tener la clase base 'ant-tag' en el contenedor
    const tag = node.closest('.ant-tag') as HTMLElement | null
    expect(tag).not.toBeNull()
    expect(tag!).toHaveClass('ant-tag')
  })

  it('aplica los estilos inline esperados', () => {
    render(<CertSkill texto="Vitest" />)
    const node = screen.getByText('Vitest')
    const tag = node.closest('.ant-tag') as HTMLElement

    // Verificamos un subconjunto estable de estilos importantes
    expect(tag).toHaveStyle({
      background: 'rgba(56,189,248,0.08)',
      color: '#e2e8f0'
    })

    // El shorthand 'border' no siempre aparece en getComputedStyle en JSDOM,
    // por lo que validamos el atributo style directamente con coincidencia parcial
    expect(tag).toHaveAttribute(
      'style',
      expect.stringMatching(/border:\s*1px\s+solid\s+rgba\(56,\s*189,\s*248,\s*0\.25\)/)
    )

    // Y algunos valores con unidades que React añade automáticamente
    expect(tag).toHaveStyle('font-size: 13px')
    expect(tag).toHaveStyle('border-radius: 8px')
    expect(tag).toHaveStyle('padding: 2px 10px')
  })
})
