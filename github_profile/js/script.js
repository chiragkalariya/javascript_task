const APIURL = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");

getUser("chiragkalariya")
async function getUser(username) {
    const resp = await fetch(APIURL + username);
    const respData = await resp.json();

    createUserCard(respData);

    getRepos(username);
}
async function getRepos(username) {
    const resp = await fetch(APIURL + username + '/repos');
    const respData = await resp.json();
    
    addReposToCard(respData);
}
function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <div class="cardimg">
                <div class="profileimg">
                    <img src="${user.avatar_url}" alt="${user.name}">
                </div>
            </div>
            <div class="cardcontent">
                <h2>${user.name}</h2>
                <h4>${user.bio}</h4>
                <div class="cardfooter">
                    <span><strong>followers</strong>${user.followers}</span>
                    <span><strong>following</strong>${user.following}</span>
                    <span><strong>Repos</strong>${user.public_repos}</span>
                </div>
                <div class="repos" id="repos"></div>
            </div>
        </div>
    `;
    main.innerHTML = cardHTML;     
}
function addReposToCard(repos) {
    const reposE1 = document.getElementById("repos");

    repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 9)
    .forEach((repo) => {
        const repoE1 = document.createElement('a');
        repoE1.classList.add('repo');
        repoE1.href = repo.html_url; 
        repoE1.target = "_blank";
        repoE1.innerText = repo.name;
        reposE1.appendChild(repoE1);
    });
}
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = search.value;

    if (user) {
        getUser(user);
        search.value = "";
    }
})