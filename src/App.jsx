import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CourseList from './components/CourseList'
import Counter from './components/Counter'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CourseList />
        <Counter />
      </main>
      <Footer />
    </>
  )
}

export default App
