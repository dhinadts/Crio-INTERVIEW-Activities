import { useState } from "react";

export default function GitHubUserFinder() {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchUser = async () => {
        if (!username.trim()) {
            setError(`Please enter a GitHub username.`);
            setUser(null);
            return;
        }

        setError("");
        setLoading(true);

        try {
            const response = await fetch(
                `https://api.github.com/users/${username}`
            );

            if (!response.ok) {
                throw new Error(`No user yet. Try searching for "octocat".`);
            }

            const data = await response.json();
            setUser(data);
        } catch (err) {
            setError(`No user yet. Try searching for "octocat".`);
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            fetchUser();
        }
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
            <div style={{ textAlign: "center" }}>
                {/* Title & Subtitle */}
                <h1>GitHub User Finder</h1>
                <p>Search a GitHub username to see profile details.</p>

                {/* Input & Button */}
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button onClick={fetchUser}>Search</button>

                {/* Error */}
                {error && <p>{error}</p>}

                {/* Loading */}
                {loading && <p>Loading...</p>}

                {/* User Details */}
                {user ? (
                    <div>
                        <img
                            src={user.avatar_url}
                            alt={user.login}
                            width="100"
                        />
                        <h2>{user.name}</h2>
                        <p>@{user.login}</p>
                        {user.location && <p>{user.location}</p>}
                    </div>
                ) : (!error && <p>No User yet. Try searching for "octocat"</p>)}
            </div>
        </div>
    );
}
