import Nav from "@components/Nav";

const Contact = () => {
  return (
    <div>
        <Nav />
        <section className="w-full flex-center flex-col text-center">
            <h1 className="text-4xl font-bold mt-10">Contact Us</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
            We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out.
            </p>
            <p className="mt-2 text-lg max-w-2xl mx-auto"></p>
            </section>
    </div>
  )
}

export default Contact