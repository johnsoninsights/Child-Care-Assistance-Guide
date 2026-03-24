import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Benefits from './components/Benefits'
import PhotoStrip from './components/PhotoStrip'
import Eligibility from './components/Eligibility'
import IncomeTable from './components/IncomeTable'
import HowToApply from './components/HowToApply'
import RequiredDocuments from './components/RequiredDocuments'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Benefits />
        <PhotoStrip />
        <Eligibility />
        <IncomeTable />
        <HowToApply />
        <RequiredDocuments />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
