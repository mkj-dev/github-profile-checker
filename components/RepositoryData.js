const repositoryData = {
    data() {
        return {
            repos: []
        }
    },
    props: {
        profile_name: {
            type: String,
            requred: true
        }
    },
    methods: {
        getRepos(profileName) {
            fetch(`https://api.github.com/users/${profileName}/repos`)
                .then(response => response.json())
                .then(data => {
                    for (d of data) {
                        this.repos.push(
                            {
                                repo_name: d.name,
                                repo_url: d.html_url,
                                repo_desc: d.description,
                                repo_lang: d.language
                            });
                    }
                });
                this.repos = [];
            }
    },
    template:
    /*html*/
    `<button type="button" class="button repos-button" @click="getRepos(profile_name)">Get Repos</button>
    <div id="repos-data">
        <div class="repo-container" v-for="repo in repos">
            <p><span>Project name:</span> {{ repo['repo_name'] }}</p>
            <a :href="repo['repo_url']" target="_blank">GitHub Code</a>
            <p><span>Language:</span> {{ repo['repo_lang'] }}</p>
            <p><span>Description:</span> {{ repo['repo_desc'] }}</p>
        </div>
    </div>`
}