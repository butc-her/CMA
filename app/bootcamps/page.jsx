import Footer from "@components/Footer"
import Nav from "@components/Nav"

const Bootcamps = () => {
  return (
    <div>
        <Nav />
        <section className="w-full flex-center flex-col text-center">
            <h1 className="text-4xl font-bold mt-10">Bootcamps</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
            Explore our coding bootcamps designed to help you kickstart your career in tech.
            </p>
            <p className="mt-2 text-lg max-w-2xl mx-auto">
            Join us to learn from industry experts and build real-world projects.
            </p>
        </section>
        <Footer />
    </div>
  )
}

export default Bootcamps