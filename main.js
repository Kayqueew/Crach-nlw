const LinksSocialMedia = {
  github: 'kayqueew',
  youtube: 'UCeHeT_EE-N8cXpeuq7-npZQ',
  facebook: 'kayque rojer',
  instagram: 'kayquelima04',
  twitter: 'kayqueroger' //o ultimo não precisa de virgula
}

function changeSocialMediaLinks() {
  //esse function todo é pra trocar o valor de li
  // for é um laço de repitição que vai ficar se repetindo até colocar um intrução para ele parar
  for (let li of socialLinks.children) {
    //criei uma variavel que é li para as redes social, mas pra isso tem que criar um id no ul la em cima
    const social = li.getAttribute('class')
    //o $ {} é pra falar para o algoritmo que isso é uma variavel
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
//fetch vai na url e vai pegar oq ela vai responder e vai dar pra gente 
  fetch(url)
  .then(response => response.json()) //transformando a resposta em json 
  .then(data =>{ //o data armazena a resposta em json 
    userName.textContent = data.name //textContent é para acessar a dom
    userBio.textContent = data.bio 
    userLink.href = data.html_url
    userImage.src = data.avatar_url
    userLogin.textContent = data.login

  })
}

getGitHubProfileInfos()