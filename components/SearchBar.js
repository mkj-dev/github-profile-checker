const searchBar = {
    template:
    /* html*/
    `<div>
        <input type="text" id="search-bar" placeholder="Github profile name">
        <button type="button" id="search-button" @click="getProfileData">Search</button>
    </div>`,
    methods: {
        getProfileData() {
            const searchBar = document.getElementById('search-bar');
            const username = searchBar.value;
            fetch(`https://api.github.com/users/${username}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                });
        }
    }
};