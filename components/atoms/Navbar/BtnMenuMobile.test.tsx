import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import BtnMenuMobile from './BtnMenuMobile'

describe('BtnMenuMobile', () => {
  it('renderiza un botón de antd con clase y tipo text', () => {
    const handleClick = vi.fn()
    render(<BtnMenuMobile onClick={handleClick} />)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveClass('navlist-mobile-button')
    // AntD agrega clases para type="text"
    expect(btn.className).toMatch(/ant-btn/)
    expect(btn.className).toMatch(/ant-btn-text/)
  })

  it('incluye el icono de menú y dispara onClick al hacer click', () => {
    const handleClick = vi.fn()
    render(<BtnMenuMobile onClick={handleClick} />)
    const btn = screen.getByRole('button')

    // Icono de AntD renderizado (checamos por el svg del icono)
    const svg = btn.querySelector('svg')
    expect(svg).not.toBeNull()

    fireEvent.click(btn)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
