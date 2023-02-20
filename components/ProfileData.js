const profileData = {
    props: {
        login: {
            type: String,
            required: true
        },
        name: String,
        avatar_url: {
            type: String,
            required: true
        },
        html_url: {
            type: String,
            required: true
        },
        location: String,
        public_repos: {
            type: Number,
            required: true
        },
        followers: {
            type: Number,
            required: true
        },
        following: {
            type: Number,
            required: true
        }
    },
    template:
    /*html*/
    `<img id="profile-avatar" :src="avatar_url">
    <a :href="html_url" target="_blank" id="profile-link">{{ login }} profile link</a>
    <div id="profile-data">
        <div id="profile-info">
            <h3><span>Username:</span> {{ login }}</h3>
            <h3><span>Fullname:</span> {{ name }}</h3>
            <h3><span>Location:</span> {{ location }}</h3>
        </div>
        <div id="github-stats">
            <h3><span>Public repositories:</span> {{ public_repos }}</h3>
            <h3><span>Followers:</span> {{ followers }}</h3>
            <h3><span>Following:</span> {{ following }}</h3>
        </div>
    </div>`
}