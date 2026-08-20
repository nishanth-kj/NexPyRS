import { render, screen, waitFor } from '@testing-library/react'
import { vi, expect, test, beforeEach } from 'vitest'
import Home from './page'

// Mock fetch
const mockFetch = vi.fn()
global.fetch = mockFetch

// Mock sub-components that might cause issues with styles or complex logic
vi.mock('@/components/Footer', () => ({
    Footer: () => <footer data-testid="footer">Footer</footer>
}))

vi.mock('@/components/ThemeToggle', () => ({
    ThemeToggle: () => <button>ThemeToggle</button>
}))

vi.mock('@/components/Logo', () => ({
    Logo: () => <div data-testid="logo">Logo</div>
}))

beforeEach(() => {
    mockFetch.mockClear()
})

test('Home page renders title and feature cards', async () => {
    mockFetch.mockResolvedValueOnce({ ok: true }) // FastAPI
    mockFetch.mockResolvedValueOnce({ ok: true }) // Django

    render(<Home />)

    // Check main heading
    expect(screen.getByText(/The Ultimate Python/i)).toBeInTheDocument()
    expect(screen.getByText(/Full-Stack Monorepo/i)).toBeInTheDocument()

    // Check feature cards
    expect(screen.getByText('Next.js Frontend')).toBeInTheDocument()
    expect(screen.getByText('FastAPI Service')).toBeInTheDocument()
    expect(screen.getByText('Django Service')).toBeInTheDocument()

    // Wait for status check
    await waitFor(() => {
        const statusBadges = screen.getAllByText(/Online/i)
        // One for Next.js (hardcoded online), one for FastAPI, one for Django
        expect(statusBadges.length).toBeGreaterThanOrEqual(2)
    })
})

test('Home page shows offline status when services are down', async () => {
    mockFetch.mockRejectedValue(new Error('Network error'))

    render(<Home />)

    await waitFor(() => {
        const offlineBadges = screen.getAllByText(/Offline/i)
        expect(offlineBadges.length).toBeGreaterThanOrEqual(2)
    })
})
