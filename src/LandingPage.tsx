import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";

function LandingPage() {
    return (
        <div className="d-flex align-items-center justify-content-center text-center vh-100">
            <div>
                <h1>CyberRisk XL</h1>
                <p className="text-secondary">A lightweight excel-powered tool for assessing cyber risk.</p>
                <div className="row">
                    <NavLink to="/create-register" className="col btn btn-primary mx-1 text-white text-decoration-none align-content-center">
                        <i className="bi bi-plus-circle"></i>
                        <span> Create new risk register</span>
                    </NavLink>
                    <NavLink to="/open-register" className="col btn btn-primary mx-1 text-white text-decoration-none">
                        <i className="bi bi-file-earmark-arrow-down"></i>
                        <span> Open existing risk register</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;