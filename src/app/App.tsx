import { I18nProvider } from '../shared/i18n/I18nContext'
import { PortfolioPage } from '../pages/portfolio/ui/PortfolioPage'

export default function App() {
  return (
    <I18nProvider>
      <PortfolioPage />
    </I18nProvider>
  )
}
