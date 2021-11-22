getAllData("Raj");
var title =document.createElement("h1");
title.setAttribute("id","myHeading");
title.innerText=("GITHUB API OF USERS AND REPOS");
document.body.appendChild(title);

var indCard =document.createElement("div");
indCard.setAttribute("id","inputDiv");

async function getAllData(username)
{
    try 
    {
        var data = await fetch("https://api.github.com/users/"+username);
        var obj =  await data.json();
        console.log(obj.id);
        console.log(obj.repos_url);

        var img =document.createElement('img');
        img.src = obj.avatar_url
        img.height ="250"
        img.width ="500"
        img.margin ='40px 5px 40px 5px'
        indCard.appendChild(img);

        var totalRepos = document.createElement('h1');
        totalRepos.innerHTML ="Total Repos = "+ JSON.stringify(obj.public_repos);
       // totalRepos.innerHTML = JSON.stringify(obj.public_repos);
        indCard.appendChild(totalRepos);
        document.body.appendChild(indCard);

        var dat1 = await fetch("https://api.github.com/users/Raj/repos")
        var obj1 = await dat1.json();
        for(i=0;i<obj1.length;i++)
        {
            var indvRepo = document.createElement("h1")
            indvRepo.innerHTML = "Repo Name = "+obj1[i].name;

            indCard.appendChild(indvRepo);
           
            var repoUrl = document.createElement("h1");
            repoUrl.innerHTML ="repoUrl = "+obj1[i].html_url;
            indCard.appendChild(repoUrl);
          
            var starCount = document.createElement("h1");
            starCount.innerHTML ="Star Count = "+obj1[i].stargazers_count;
            indCard.appendChild(starCount);

            console.log(obj1[i].name);
            console.log(obj1[i].html_url);
            console.log(obj1[i].stargazers_count);
        }    

        document.body.appendChild(indCard);
    }

    catch(error)
    {
        console.log('error in data fetching')
    }
}
    






