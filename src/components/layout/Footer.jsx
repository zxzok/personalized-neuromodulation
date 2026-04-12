import { useTranslation } from '../../i18n'
import { useTheme } from '../../theme'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const isTesla = theme === 'tesla'
  const isAcademic = theme === 'academic'

  return (
    <footer className={`py-14 ${
      isTesla ? 'bg-black text-white/60' :
      isAcademic ? 'bg-slate-800 text-slate-400' :
      'bg-navy text-white/70'
    }`}>
      <div className="section-container">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="font-semibold text-white mb-3">
              <span className="text-cyan">NSFC</span> 62176129
            </div>
            <p className="text-[13px] leading-relaxed">
              {t('contact.funding')}
            </p>
          </div>
          <div>
            <div className="font-medium text-white mb-3">
              {t('nav.researchDetail')}
            </div>
            <Link to="/research/subtyping" className="text-[13px] hover:text-cyan transition-colors block mb-2">
              {t('nav.subtyping')}
            </Link>
            <Link to="/research/network-control" className="text-[13px] hover:text-cyan transition-colors block mb-2">
              {t('nav.networkControl')}
            </Link>
            <Link to="/research/biomarkers" className="text-[13px] hover:text-cyan transition-colors block mb-2">
              {t('nav.biomarkers')}
            </Link>
            <Link to="/research/translation" className="text-[13px] hover:text-cyan transition-colors block">
              {t('nav.translation')}
            </Link>
          </div>
          <div>
            <div className="font-medium text-white mb-3">
              {t('nav.publications')}
            </div>
            <Link to="/publications" className="text-[13px] hover:text-cyan transition-colors block mb-2">
              {t('results.viewAll')} &rarr;
            </Link>
            <Link to="/patents" className="text-[13px] hover:text-cyan transition-colors block">
              {t('nav.patents')} &rarr;
            </Link>
          </div>
          <div>
            <div className="font-medium text-white mb-3">
              {t('contact.heading')}
            </div>
            <p className="text-[13px] leading-relaxed mb-3">
              Nanjing Medical University, Nanjing, China
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="https://scholar.google.com/citations?user=qEIz2soAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                aria-label="Google Scholar"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
                </svg>
                Scholar
              </a>
              <a
                href="https://github.com/zxzok"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[11px] font-medium bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className={`border-t pt-6 text-center text-xs space-y-2 ${
          isTesla ? 'border-white/10' : isAcademic ? 'border-white/10' : 'border-white/10'
        }`}>
          <div>&copy; {t('contact.copyright')}</div>
          <div>
            {t('contact.reprint')}{' '}
            <a href="mailto:zhangxizhe@njmu.edu.cn" className="text-cyan hover:underline">zhangxizhe@njmu.edu.cn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
