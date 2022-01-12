import React, { useState, useEffect } from "react";
import Clock from "../Clock/Clock";


export default function Form() {
    const [repositories, setRepositories] = useState([
        { id: undefined, name: '', full_name: '' }
    ]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://api.github.com/users/gsTavares/repos');
            const data = await response.json();

            setRepositories(data);
        }
        fetchData();
    }, []);


    return (
        <div className="container card shadow bg-dark">
            <div className="container text-light">
                <h5>{repositories.map(repo => <p key={repo.id}>{repo.name}, id = {repo.id}</p>)}</h5>
                <Clock />
            </div>
        </div>

    );
}