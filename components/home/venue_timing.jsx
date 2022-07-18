
const Venue = () => {
    let m = { "Water Gate": "Lorem ipsum dolor sit amet, consect", "January 6th": "Lorem ipsum dolor sit amet, consect", "Water Gate": "Lorem ipsum dolor sit amet, consect", "January 16th": "Lorem ipsum dolor sit amet, consect", "Waterr Gate": "Lorem ipsum dolor sit amet, consect", "January 26th": "Lorem ipsum dolor sit amet, consect" };
    let keys = Object.keys(m);
    return (
        <div className="container">
            <div className="container-left">
                {/* <h1>Lorem Ipsum</h1> */}
                <div className="container-left-container">
                    {keys.map((a, index) => {

                        return (<div className="container-left-each" key={index}><h3>{a}</h3><p>{m[a]}</p></div>)
                    })}
                </div>
            </div>
            <div className="container-venue">
                <div className="mapouter"><div className="gmap_canvas"><iframe className="gmap_iframe" width="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=DPS Kolar Road, Bhopal&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href="https://www.kokagames.com/fnf-friday-night-funkin-mods/">FNF</a></div><style></style></div>
            </div>
        </div>
    )
}

export default Venue;