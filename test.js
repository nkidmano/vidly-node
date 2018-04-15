console.log('Before');
getUser(1, getRepositories);
console.log('After');

function getRepositories(user) {
    getRepositories(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
    getCommits(repo, displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Getting user information from database');
        callback({id: id, gitHubUsername: 'Arata'});
    }, 2000);
}

function getRepositories(user, callback) {
    setTimeout(() => {
        console.log('Getting user repos from GitHub');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}