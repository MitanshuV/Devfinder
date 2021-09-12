// global store:
let gitHub = [];

let btn = document.getElementById("btn");
let inputValue = document.getElementById("value");
let githubContainer_img = document.querySelector(".githubContainer-img");

// info:
let git_name = document.querySelector(".name");
let git_date = document.querySelector(".date");
let git_login = document.querySelector(".login");

// bio:
let git_bio = document.querySelector(".bio");

// repos:
let git_num = document.querySelector(".rep-num");
let git_following = document.querySelector(".follow-num");
let git_follower = document.querySelector(".follower-num");

// contacts:
let git_location = document.querySelector(".locations");
let git_url = document.querySelector(".urls");
let git_twitter = document.querySelector(".twitters");
let git_github = document.querySelector(".githubs");

// ======================== Event Listener ======================== //
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let url = `https://api.github.com/users/${inputValue.value}`;
  console.log(url);

  const gitHubData = async () => {
    if (inputValue.value === "") {
      alert("Please enter username");
    } else {
      const data = await fetch(url);
      const response = await data.json();
      gitHub.push(response);
      gitHub.forEach((git) => {
        githubContainer_img.innerHTML = `<img src=${git.avatar_url} />`;

        // info:
        git_name.innerHTML = git.name;
        git_date.innerHTML = git.created_at;
        git_login.innerHTML = git.login;

        // bio:
        git_bio.innerHTML = git.bio || "There is no bio";

        // repos:
        git_num.innerHTML = git.public_repos;
        git_following.innerHTML = git.following;
        git_follower.innerHTML = git.followers;

        // contact:
        git_location.innerHTML =
          git.location === null || git.location === ""
            ? "Not available"
            : git.location;
        git_url.innerHTML =
          git.blog === null || git.blog === "" ? "Not available" : git.blog;
        git_twitter.innerHTML =
          git.twitter_username === "" || git.twitter_username === null
            ? "Not available"
            : git.twitter_username;
        git_github.innerHTML =
          git.company === null || git.company === ""
            ? "Not available"
            : git.company;
      });
    }
  };
  gitHubData();
  inputValue.value = "";
});

const darkMode = () => {
  let dark_mode = document.querySelector(".material-icons");
  let body = document.getElementById("body");
  let display = document.querySelector(".display");
  let light_mode = document.querySelector(".light-mode");
  let form = document.querySelector(".text");
  let git_detail_box = document.querySelector(".githubContainer-details");
  let name = document.querySelector(".name");

  // icons:
  let icon0 = document.querySelector(".icons0");
  let icon1 = document.querySelector(".icons1");
  let icon2 = document.querySelector(".icons2");
  let icon3 = document.querySelector(".icons3");

  // bio:
  let bio = document.querySelector(".bio");
  let sideBox = document.querySelector(".side-box");
  console.log(sideBox);

  dark_mode.addEventListener("click", () => {
    body.classList.add("change-bg");
    display.classList.add("change-bg-heading");
    dark_mode.classList.add("change-bg-mode");
    light_mode.classList.add("change-light-mode");
    form.classList.add("form");
    inputValue.classList.add("add-form-input");
    git_detail_box.classList.add("change-git");
    icon0.classList.add("change-icon");
    icon1.classList.add("change-icon");
    icon2.classList.add("change-icon");
    icon3.classList.add("change-icon");
    name.classList.add("change-bg-heading");
    bio.classList.add("change-bio");
    sideBox.classList.add("change-side-box");
  });

  light_mode.addEventListener("click", () => {
    body.classList.remove("change-bg");
    display.classList.remove("change-bg-heading");
    dark_mode.classList.remove("change-bg-mode");
    form.classList.remove("form");
    inputValue.classList.remove("add-form-input");
    git_detail_box.classList.remove("change-git");
    icon0.classList.remove("change-icon");
    icon1.classList.remove("change-icon");
    icon2.classList.remove("change-icon");
    icon3.classList.remove("change-icon");
    name.classList.remove("change-bg-heading");
    bio.classList.remove("change-bio");
    sideBox.classList.remove("change-side-box");
  });
};

darkMode();
