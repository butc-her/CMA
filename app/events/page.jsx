import Nav from "@components/Nav"

const Events = () => {
  return (
    <div>
        <Nav />
        <section className="w-full flex-center flex-col text-center">
            <h1 className="text-4xl font-bold mt-10">Events</h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
            Join our upcoming events to connect with the community, learn new skills, and share your knowledge.
            </p>
            <p className="mt-2 text-lg max-w-2xl mx-auto">
            Stay tuned for announcements on workshops, webinars, and networking opportunities.
            </p>
        </section>
    </div>
  )
}

export default Events