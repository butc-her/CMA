import Nav from "@components/Nav";

const About = () => {
  return (
    <div>
        <Nav />
        <section className="w-full flex-center flex-col text-center">
            <h1 className="text-4xl font-bold mt-10">About Us</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
            We are a community dedicated to empowering individuals through coding bootcamps, events, and resources.
            </p>
            <p className="mt-2 text-lg max-w-2xl mx-auto">
            Join us to learn, grow, and connect with like-minded individuals.
            </p>
        </section>
    </div>
  )
}

export default About