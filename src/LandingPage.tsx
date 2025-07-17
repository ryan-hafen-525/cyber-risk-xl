import "bootstrap-icons/font/bootstrap-icons.css";

function LandingPage() {
    return (
        <div>
            <h1>Cyber Risk XL</h1>
            <p>A lightweight excel-powered tool for assessing cyber risk.</p>
            <div className="row">
                <button type="submit">Create new risk register</button>
                <button type="submit">Open existing risk register</button>
            </div>
        </div>
    )
}

export default LandingPage;