import { Globe } from 'lucide-react'
import { useI18n } from '../i18n'

export default function LangToggle() {
  const { lang, setLang, dir, t } = useI18n()
  const next = lang === 'en' ? 'ar' : 'en'
  return (
    <button
      onClick={() => setLang(next)}
      className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span>{t('langToggle')}</span>
    </button>
  )
}
