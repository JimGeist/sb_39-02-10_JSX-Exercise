function Tweet({ username, name, date, message }) {
    const fancyDate = moment(date).fromNow();
    return (
        // username & name of the user who wrote the tweet, 
        //  the date of the tweet, and the message being tweeted
        <div>
            <span><strong>{name}</strong>&nbsp;@{username}&nbsp;-&nbsp;{fancyDate}</span>
            <p>{message}</p>
            <hr />
        </div>
    );
}
