const linksSocialMedia = {
    github: 'lucasdam',
    youtube: 'maykbrito',
    facebook: 'lucassdam',
    instagram: 'lucas.sdam',
    twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {

    for (let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    }

}

function getGitHubProfileInfos() {

    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(response => response.json())
        .then(data => {
            userAvatar.src = data.avatar_url
            userName.textContent = data.name
            userLogin.textContent = data.login
            userLink.href = data.html_url
            userBio.textContent = data.bio
        })

}

changeSocialMediaLinks()
getGitHubProfileInfos()