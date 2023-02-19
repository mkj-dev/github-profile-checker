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
    `<div id="profile-data">
        <div class="profile-info">
            <img :src="avatar_url">
            <h2>{{ login }}</h2>
            <h2>{{ name }}</h2>
            <p>Location: {{ location }}</p>
            <a :href="html_url" target="_blank">Profile link</a>
        </div>
        <div class="github-stats">
            <p>Public repositories: {{ public_repos }}</p>
            <p>Followers: {{ followers }}</p>
            <p>Following: {{ following }}</p>
        </div>
    </div>`
}