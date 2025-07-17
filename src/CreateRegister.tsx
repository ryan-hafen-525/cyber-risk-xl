import { NavLink } from "react-router-dom";
import { create, BaseDirectory } from "@tauri-apps/plugin-fs";

async function handleCreateRegister() {
    const riskRegister = await create("risk_register.xlsx", { baseDir: BaseDirectory.AppData });
}

function CreateRegister() {
    return (
        <div>
            <NavLink to="/" className="text-white px-2">
                <i className="bi bi-chevron-left"></i>
            </NavLink>
            <div className="container">
                <label className="form-label">Register Name</label>
                <input />
                <br />
                <label className="form-label">Description</label>
                <input />
                <br />
                <label className="form-label">Date</label>
                <input type="date" />
                <br />
                <button className="btn btn-primary mt-2" onClick={() => console.log(BaseDirectory.AppData)}>Create Register</button>
            </div>
        </div>
    )
}

export default CreateRegister;