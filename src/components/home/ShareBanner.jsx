import { useState } from 'react'
import { useTranslation } from '../../i18n'
import ScrollReveal from '../shared/ScrollReveal'

const SITE_URL = 'https://zxzok.github.io/personalized-neuromodulation/'

export default function ShareBanner() {
  const { language } = useTranslation()
  const [copied, setCopied] = useState(false)

  const shareTitle = language === 'zh'
    ? 'NSFC 62176129 | 个性化神经调控研究'
    : 'NSFC 62176129 | Personalized Neuromodulation Research'

  const shareDesc = language === 'zh'
    ? '基于网络控制与深度学习的个性化神经调控靶点选择方法研究 — 南京医科大学'
    : 'Personalized Neuromodulation for Psychiatric Disorders — Nanjing Medical University'

  const encodedUrl = encodeURIComponent(SITE_URL)
  const encodedText = encodeURIComponent(`${shareTitle} - ${shareDesc}`)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(SITE_URL)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = SITE_URL
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-ocean/5 via-cyan/5 to-transparent">
      <div className="section-container text-center">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">
              {language === 'zh' ? '分享本项目' : 'Share This Project'}
            </h2>
            <p className="text-slate-500 text-[15px] mb-8 leading-relaxed">
              {language === 'zh'
                ? '如果您对本项目的研究成果感兴趣，欢迎分享给同行或关注我们的最新进展。'
                : 'If you find our research interesting, please share it with your colleagues or follow our latest progress.'}
            </p>

            {/* Share Buttons Row */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {/* Twitter/X */}
              <a
                href={`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md text-slate-600 text-sm font-medium transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                X / Twitter
              </a>

              {/* LinkedIn */}
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white shadow-sm border border-slate-200 hover:border-[#0077B5]/30 hover:shadow-md text-slate-600 hover:text-[#0077B5] text-sm font-medium transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>

              {/* WeChat */}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(SITE_URL)
                  alert(language === 'zh' ? '链接已复制，请粘贴到微信分享' : 'Link copied. Paste it in WeChat to share.')
                }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white shadow-sm border border-slate-200 hover:border-[#07C160]/30 hover:shadow-md text-slate-600 hover:text-[#07C160] text-sm font-medium transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 01.213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 00.167-.054l1.903-1.114a.864.864 0 01.717-.098 10.16 10.16 0 002.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178A1.17 1.17 0 014.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 01-1.162 1.178 1.17 1.17 0 01-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 01.598.082l1.584.926a.272.272 0 00.14.045c.134 0 .24-.108.24-.245 0-.06-.024-.12-.04-.178l-.325-1.233a.49.49 0 01.177-.554C23.016 18.514 24 16.808 24 14.896c0-3.344-3.066-5.99-7.062-6.038zm-2.089 2.702c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 01-.969.983.976.976 0 01-.969-.983c0-.542.434-.982.969-.982z" />
                </svg>
                {language === 'zh' ? '微信' : 'WeChat'}
              </button>

              {/* Email */}
              <a
                href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareDesc)}%0A%0A${encodedUrl}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md text-slate-600 text-sm font-medium transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {language === 'zh' ? '邮件推荐' : 'Email'}
              </a>
            </div>

            {/* Copy Link Button */}
            <button
              onClick={handleCopyLink}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                copied
                  ? 'bg-green-50 border border-green-200 text-green-600'
                  : 'bg-ocean/10 border border-ocean/20 text-ocean hover:bg-ocean/15'
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {language === 'zh' ? '链接已复制' : 'Link Copied'}
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
                  </svg>
                  {language === 'zh' ? '复制网站链接' : 'Copy Site Link'}
                </>
              )}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
