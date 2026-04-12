import { useEffect } from 'react'

const BASE_URL = 'https://zxzok.github.io/personalized-neuromodulation'
const SITE_NAME = 'NSFC 62176129 - Personalized Neuromodulation'

/**
 * SEOHead - Dynamically updates document title and meta tags for each page.
 *
 * @param {string} title - Page title (will be appended with site name)
 * @param {string} description - Meta description for the page
 * @param {string} [path] - Hash path for canonical URL (e.g. '/publications')
 * @param {object} [citation] - Google Scholar citation metadata for publication pages
 * @param {string} citation.title - Paper title
 * @param {string} citation.authors - Comma-separated author names
 * @param {string} citation.journal - Journal name
 * @param {number} citation.year - Publication year
 * @param {string} [citation.volume] - Volume/pages
 * @param {string} [citation.pdfUrl] - URL to PDF
 */
export default function SEOHead({ title, description, path, citation }) {
  useEffect(() => {
    // Update document title
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
    document.title = fullTitle

    // Helper to set or create a meta tag
    const setMeta = (attr, key, content) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    // Primary meta
    if (description) {
      setMeta('name', 'description', description)
    }

    // Open Graph
    setMeta('property', 'og:title', fullTitle)
    if (description) {
      setMeta('property', 'og:description', description)
    }
    if (path) {
      setMeta('property', 'og:url', `${BASE_URL}/#${path}`)
    }

    // Twitter Card
    setMeta('name', 'twitter:title', fullTitle)
    if (description) {
      setMeta('name', 'twitter:description', description)
    }

    // Google Scholar citation meta tags for publication pages
    if (citation) {
      setMeta('name', 'citation_title', citation.title)
      if (citation.authors) {
        // Split authors and create individual tags
        const authors = citation.authors.split(',').map((a) => a.trim().replace(/\*/g, ''))
        // Set first author, create additional tags for others
        setMeta('name', 'citation_author', authors[0])
        // Remove old extra author tags
        document.querySelectorAll('meta[name="citation_author_extra"]').forEach((el) => el.remove())
        authors.slice(1).forEach((author) => {
          const el = document.createElement('meta')
          el.setAttribute('name', 'citation_author')
          el.setAttribute('content', author)
          el.classList.add('dynamic-citation')
          document.head.appendChild(el)
        })
      }
      if (citation.journal) {
        setMeta('name', 'citation_journal_title', citation.journal)
      }
      if (citation.year) {
        setMeta('name', 'citation_publication_date', String(citation.year))
      }
      if (citation.volume) {
        setMeta('name', 'citation_volume', citation.volume)
      }
      if (citation.pdfUrl) {
        setMeta('name', 'citation_pdf_url', citation.pdfUrl)
      }
    }

    // Cleanup dynamic citation tags on unmount
    return () => {
      document.querySelectorAll('meta.dynamic-citation').forEach((el) => el.remove())
    }
  }, [title, description, path, citation])

  return null
}
