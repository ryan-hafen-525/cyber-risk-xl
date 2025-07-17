import { NavLink } from "react-router-dom";
import { BaseDirectory, copyFile } from "@tauri-apps/plugin-fs";

async function handleCreateRegister(fileName: string) {
    await copyFile('/TEMPLATE-asset-based.xlsx', `${fileName}.xlsx`, {
        toPathBaseDir: BaseDirectory.Temp
    });
}

function CreateRegister() {
    return (
        <div>
            <NavLink to="/" className="text-white px-2">
                <i className="bi bi-chevron-left"></i>
            </NavLink>
            <div className="container">
                <form>
                    <label className="form-label">Register Name</label>
                    <input />
                    <br />
                    <label className="form-label">Description</label>
                    <input />
                    <br />
                    <label className="form-label">Date</label>
                    <input type="date" />
                    <br />
                    <button className="btn btn-primary mt-2" onClick={() => handleCreateRegister("New name")}>Create Register</button>
                </form>
            </div>
        </div>
    )
}

export default CreateRegister;