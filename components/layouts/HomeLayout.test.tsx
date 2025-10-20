import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

// Mock de los organismos para centrar el test en la estructura del layout
vi.mock('components/organisms/Navbar/Navbar', () => ({ default: () => <nav data-testid="mock-navbar" /> }))
vi.mock('components/organisms/Hero/HeroMain', () => ({ default: () => <section data-testid="mock-hero">HeroMock</section> }))
vi.mock('components/organisms/Proyectos/ProyectosSection', () => ({ default: () => <section data-testid="mock-proyectos">ProyectosMock</section> }))
vi.mock('components/organisms/SobreMi/SobreMiSection', () => ({ default: () => <section data-testid="mock-sobre-mi">SobreMiMock</section> }))
vi.mock('components/organisms/Tecnologias/TecnologiasSection', () => ({ default: () => <section data-testid="mock-tecnologias">TecnologiasMock</section> }))
vi.mock('components/organisms/Certificaciones/CertificacionesSection', () => ({ default: () => <section data-testid="mock-certificaciones">CertificacionesMock</section> }))

import HomeLayout from './HomeLayout'

describe('HomeLayout', () => {
  it('renderiza NavBar y las secciones principales', () => {
    const { container } = render(<HomeLayout />)

    // NavBar mock
    expect(screen.getByTestId('mock-navbar')).toBeInTheDocument()

    // Main layout y clases
    const main = container.querySelector('main.main-layout')
    expect(main).toBeInTheDocument()

    // Secciones mock (verificamos que se han montado los mocks en sus contenedores)
    expect(screen.getByTestId('mock-hero')).toBeInTheDocument()
    expect(screen.getByTestId('mock-sobre-mi')).toBeInTheDocument()
    expect(screen.getByTestId('mock-proyectos')).toBeInTheDocument()
    expect(screen.getByTestId('mock-tecnologias')).toBeInTheDocument()
    expect(screen.getByTestId('mock-certificaciones')).toBeInTheDocument()

    // Contenedor de contenido con clase
    const contenido = container.querySelector('.contenido-pagina')
    expect(contenido).toBeInTheDocument()
    expect(contenido?.getAttribute('style') || '').toMatch(/max-width: 1600px|maxWidth: 1600px/)
  })
})
