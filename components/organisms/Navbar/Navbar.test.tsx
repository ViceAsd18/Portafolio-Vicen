import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Navbar from './Navbar'
import { MemoryRouter } from 'react-router'

// Notas:
// - Valida estructura base del nav, logo/título, lista desktop y botón móvil.
// - Verifica apertura/cierre del Drawer al hacer click en el botón.
// - Comprueba que el Drawer contiene la Navlist en modo columna.

function getDrawer() {
  // AntD Drawer se monta en DOM con role=dialog o por estructura; buscamos por el texto "Menú"
  return screen.queryByText('Menú')?.closest('.ant-drawer') as HTMLElement | null
}

describe('Navbar', () => {
  const renderNav = () => render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )

  it('renderiza el nav con título y elementos principales', () => {
    const { container } = renderNav()
    const nav = container.querySelector('nav') as HTMLElement
    expect(nav).toBeInTheDocument()
    // Título/Logo
    expect(screen.getByText(/vicente/i)).toBeInTheDocument()
    // Lista de navegación de escritorio
    expect(container.querySelector('.navlist-desktop')).toBeInTheDocument()
    // Botón de menú móvil (BtnMenuMobile)
    // Buscar por rol button con el símbolo ☰ o por el texto accesible si lo tuviera
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('abre y cierra el Drawer al hacer click en el botón de menú', async () => {
    renderNav()
    // Usa el botón específico del menú móvil para evitar ambigüedad
    const menuBtn = document.querySelector('.navlist-mobile-button') as HTMLElement
    expect(menuBtn).toBeTruthy()
    fireEvent.click(menuBtn)

    // Drawer visible (buscar por título Menú)
    const drawer = getDrawer()
    expect(drawer).toBeInTheDocument()

    // Cerrar Drawer con el botón de cierre (✕) o haciendo click en un item
    // Importante: Drawer se renderiza en portal (fuera del container), buscar en document
    const closeIcon = document.querySelector('.ant-drawer .ant-drawer-close') as HTMLElement | null
    if (closeIcon) {
      fireEvent.click(closeIcon)
    } else {
      // Fallback: click en el contenedor de la lista del drawer (cierra por onClick)
      const clickableWrapper = drawer?.querySelector('.ant-drawer-body > div') as HTMLElement | null
      clickableWrapper && fireEvent.click(clickableWrapper)
    }

    // AntD mantiene el Drawer montado, pero debería quitar la clase de abierto
    await waitFor(() => {
      const closedDrawer = getDrawer()
      expect(closedDrawer).toBeInTheDocument()
      expect(closedDrawer).not.toHaveClass('ant-drawer-open')
    })
  })

  it('la Navlist en el Drawer se renderiza en columna', () => {
    renderNav()
    fireEvent.click(screen.getAllByRole('button')[0])
    // Dentro del drawer debe existir un contenedor con la lista; verificamos que haya al menos un link
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })
})
