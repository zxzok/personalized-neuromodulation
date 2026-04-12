import { useTranslation } from '../../i18n'
import ScrollReveal from '../shared/ScrollReveal'

const profiles = [
  {
    id: 'scholar',
    url: 'https://scholar.google.com/citations?user=qEIz2soAAAAJ',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" />
      </svg>
    ),
    color: 'text-[#4285F4]',
    bgHover: 'hover:bg-[#4285F4]/10',
    labelZh: 'Google Scholar',
    labelEn: 'Google Scholar',
    descZh: '查看全部引用和 h 指数',
    descEn: 'All citations and h-index',
  },
  {
    id: 'pubmed',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Zhang+Xizhe+Nanjing+Medical+University',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: 'text-[#326599]',
    bgHover: 'hover:bg-[#326599]/10',
    labelZh: 'PubMed',
    labelEn: 'PubMed',
    descZh: 'NIH 收录论文检索',
    descEn: 'NIH indexed publications',
  },
  {
    id: 'medrxiv',
    url: 'https://www.medrxiv.org/search/Xizhe%20Zhang%20neuromodulation',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'text-[#D04423]',
    bgHover: 'hover:bg-[#D04423]/10',
    labelZh: 'medRxiv',
    labelEn: 'medRxiv',
    descZh: '医学预印本',
    descEn: 'Medical preprints',
  },
  {
    id: 'clinical-trials',
    url: 'https://clinicaltrials.gov/search?cond=depression&intr=TMS+OR+rTMS+OR+neuromodulation&locStr=Nanjing&country=China',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: 'text-[#205493]',
    bgHover: 'hover:bg-[#205493]/10',
    labelZh: 'ClinicalTrials.gov',
    labelEn: 'ClinicalTrials.gov',
    descZh: '南京神经调控相关临床试验',
    descEn: 'Nanjing neuromodulation trials',
  },
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/xizhe-zhang-57b6a418/',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: 'text-[#0077B5]',
    bgHover: 'hover:bg-[#0077B5]/10',
    labelZh: 'LinkedIn',
    labelEn: 'LinkedIn',
    descZh: 'PI 职业主页',
    descEn: 'PI professional profile',
  },
  {
    id: 'github',
    url: 'https://github.com/zxzok/personalized-neuromodulation',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    color: 'text-slate-700',
    bgHover: 'hover:bg-slate-100',
    labelZh: 'GitHub',
    labelEn: 'GitHub',
    descZh: '项目开源代码',
    descEn: 'Project source code',
  },
]

export default function AcademicProfiles() {
  const { language } = useTranslation()

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="section-container">
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              {language === 'zh' ? '学术平台' : 'Academic Platforms'}
            </h2>
            <p className="text-slate-500 text-[15px] max-w-xl mx-auto">
              {language === 'zh'
                ? '在以下平台查看我们的研究成果和学术主页'
                : 'Find our research outputs and academic profiles on these platforms'}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-4xl mx-auto">
          {profiles.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 60}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-100 bg-white transition-all hover:shadow-md hover:-translate-y-0.5 ${p.bgHover} group`}
              >
                <div className={`${p.color} transition-transform group-hover:scale-110`}>
                  {p.icon}
                </div>
                <span className="text-sm font-medium text-navy">
                  {language === 'zh' ? p.labelZh : p.labelEn}
                </span>
                <span className="text-[11px] text-slate-400 text-center leading-tight">
                  {language === 'zh' ? p.descZh : p.descEn}
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
