import { NavLink } from "react-router-dom";
import { useState } from "react";
import { join } from "@tauri-apps/api/path";
import { BaseDirectory, copyFile } from "@tauri-apps/plugin-fs";
async function handleCreateRegister(name: string, directory: string) {
    const destination = await join(directory, `${name}.xlsx`);
    await copyFile('/TEMPLATE-asset-based.xlsx', destination, {
        fromPathBaseDir: BaseDirectory.Resource
    });
}

function CreateRegister() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [directory, setDirectory] = useState("");

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (name && directory) {
            await handleCreateRegister(name, directory);
        }
    };

    return (
        <div>
            <NavLink to="/" className="text-white px-2">
                <i className="bi bi-chevron-left"></i>
            </NavLink>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <label className="form-label">Register Name</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} />
                    <br />
                    <label className="form-label">Description</label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} />
                    <br />
                    <label className="form-label">Date</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    <br />
                    <label className="form-label">Destination Directory</label>
                    <input value={directory} onChange={(e) => setDirectory(e.target.value)} />
                    <br />
                    <button className="btn btn-primary mt-2" type="submit">Create Register</button>
                </form>
            </div>
        </div>
    );
}

export default CreateRegister;
