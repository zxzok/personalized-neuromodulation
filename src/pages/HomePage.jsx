import HeroSection from '../components/home/HeroSection'
import FeaturedPublications from '../components/home/FeaturedPublications'
import ResearchHighlights from '../components/home/ResearchHighlights'
import KeyResults from '../components/home/KeyResults'
import ApplicationImpact from '../components/home/ApplicationImpact'
import ShareBanner from '../components/home/ShareBanner'
import AcademicProfiles from '../components/home/AcademicProfiles'
import ContactSection from '../components/home/ContactSection'
import SEOHead from '../components/shared/SEOHead'

export default function HomePage() {
  return (
    <>
      <SEOHead
        title="个性化神经调控 - Personalized Neuromodulation"
        description="基于网络控制与深度学习的个性化神经调控靶点选择方法研究。国家自然科学基金面上项目62176129，南京医科大学张锡哲课题组。Personalized target selection and efficacy evaluation of non-invasive neuromodulation for psychiatric disorders."
        path="/"
      />
      <HeroSection />
      <ResearchHighlights />
      <KeyResults />
      <FeaturedPublications />
      <ApplicationImpact />
      <AcademicProfiles />
      <ShareBanner />
      <ContactSection />
    </>
  )
}
