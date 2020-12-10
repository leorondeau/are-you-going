

export const Event = ({ event , user }) => {
    <section className="event">
        <h2 className="event__name">
            <Link to={`/event/${event.id}`}>
                {event.name}
            </Link>
        </h2>
        <h1>{event.location}</h1>
        <div>
            <p>{event.date}</p>
            
            {/* <p>{event.time}</p> */}
            <p>{user.name}</p>
        </div>


    </section>


}