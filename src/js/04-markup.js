const profiles = [];

for (let i = 0; i < 10; i++) {
  profiles.push({
    name: 'Volodka',
    tag: 'gmail.com',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  });
}

console.log(profiles);

const makeProfileMarkup = function (userProfile) {
  const {
    avatar = 'https://i.pravatar.cc/400?img=6',
    name,
    tag,
    location = 'Planet Earth',
    stats: { followers, views, likes },
  } = userProfile;

  return `<div>
    <img src="${avatar}" alt="user avatar">
    <p>${name}<span>@${tag}</span></p>
    <p>Location: ${location}</p>
    <ul>
      <li>Followers: ${followers}</li>
      <li>Views: ${views}</li>
      <li>Likes: ${likes}</li>
    </ul>
  </div>`;
};

function createListProfileMarkup(profiles) {
  let markup = `<ul>`;
  for (let profile of profiles) {
    markup += `<li>${makeProfileMarkup(profile)}</li>`;
    markup += '<br/><hr/>';
  }
  markup += `</ul>`;

  return markup;
}

document.body.insertAdjacentHTML(
  'afterbegin',
  createListProfileMarkup(profiles),
);
