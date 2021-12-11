export default function loading(state = {}, action) {
    return(
        // return loading text in the midle of the page
        <div className="loading">
            <div className="loading-text">
                <h1>Loading...</h1>
            </div>
        </div>
    )
}
