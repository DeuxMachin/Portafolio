import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { I18nProvider } from '../shared/i18n/I18nContext'
import { PortfolioPage } from '../pages/portfolio/ui/PortfolioPage'
import { ProjectPage } from '../pages/project-detail/ui/ProjectPage'

export default function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/proyecto/:id" element={<ProjectPage />} />
        </Routes>
      </I18nProvider>
    </BrowserRouter>
  )
}
