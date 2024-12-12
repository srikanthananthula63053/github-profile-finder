

export default function User({ user }) {
    const { avatar_url, followers, following, public_repos, name, login } = user;
    return <div className="user">
        <div>
            <img src={avatar_url} alt="avtar" className="avata" />
        </div>
        <div>
            <a href={`https://github.com/${login}`}>{name || login}</a>

        </div>
        <div className="follwer"> <p>follower:</p>
            <p>{followers}</p>
        </div>
        <div className="following"><p>following:</p>
            <p>{following}</p>
        </div>
        <div className="public-repos"><p>public_repos:</p><p>{public_repos}</p></div>
    </div>
}