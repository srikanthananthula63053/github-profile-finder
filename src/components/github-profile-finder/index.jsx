import { useEffect, useState } from "react";
import User from "./card";
import "./styles.css";



export default function GithubProfileFinder() {
    const [userName, setUserName] = useState("srikanthananthula63053");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);



    function handleOnClick() {
        FetchGithub()
    }
    async function FetchGithub() {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const data = await response.json();
        console.log(data);
        if (data) {
            setData(data)
            setLoading(false)
            setUserName('');
        }


    }
    useEffect(() => {
        FetchGithub()
    }, [])
    if (loading) {
        return <h1>loading the data ! please wait</h1>
    }
    return (
        <div className="githubfinder">
            <div className="input-wrapper">
                <input
                    placeholder="search github user"
                    type="text"
                    name="github user"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <button onClick={handleOnClick}>Search</button>

            </div>
            {
                data !==null?<User user={data}/>:null
            }

        </div>
    );
}