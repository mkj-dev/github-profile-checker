const searchBar = {
    data() {
        return {
            login: '',
            name: '',
            avatar_url: '',
            html_url: '',
            location: '',
            public_repos: 0,
            followers: 0,
            following: 0,
            error: '',
        }
    },
    methods: {
        getProfileData() {
            const searchBar = document.getElementById('search-bar');
            const username = searchBar.value;
            fetch(`https://api.github.com/users/${username}`)
                .then(response => response.json())
                .then(data => {
                    if (data['message'] === 'Not Found') {
                        this.error = 'Username not found, try again.';
                    }
                    this.login = data['login'];
                    this.name = data['name'];
                    this.avatar_url = data['avatar_url'];
                    this.html_url = data['html_url'];
                    this.location = data['location'];
                    this.public_repos = data['public_repos'];
                    this.followers = data['followers'];
                    this.following = data['following'];
                });
                searchBar.value = '';
                this.error = '';
        }
    },
    template:
    /* html*/
    `<div>
        <div id="search-container">
            <input type="text" id="search-bar" placeholder="Github profile name">
            <button type="button" class="button search-button" @click="getProfileData">Search</button>
        </div>
        
        <h2 v-if="error.length > 0" class="error">{{ error }}</h2>
        <profile-data 
            v-else-if="html_url.length"
            :login="login"
            :name="name"
            :avatar_url="avatar_url"
            :html_url="html_url"
            :location="location"
            :public_repos="public_repos"
            :followers="followers"
            :following="following"
        >
        </profile-data>
        <repository-data :profile_name="login"></repository-data>
    </div>`
};