const Cats = ({ catUrl, getCat }) => {
    return (
        <div class="cat-image">
            <h2>Are you feline lucky?</h2>
            <button onClick={getCat}>
                Launch new cat
            </button>
            <div class="cat">
                {catUrl !== '' ? <img className="cat" src={catUrl} alt="cute fizzy cat thing"/> : ''}
            </div>
        </div>

    );
}

export default Cats;