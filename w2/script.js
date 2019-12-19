const games = [
  {
    home: { name: 'Dallas Mavericks', logo: './images/DALLAS_MAVERICKS.png', points: 114 },
    guest: { name: 'Los Angeles Lakers', logo: './images/LAKERS.svg', points: 100 },
  },
  {
    home: { name: 'Boston Celtics', logo: './images/CELTICS.png', points: 93 },
    guest: { name: 'Philadelphia 76ers', logo: './images/PHILADELPHIA.svg', points: 107 },
  },
  {
    home: { name: 'Golden State Warriors', logo: './images/GSW.svg', points: 102 },
    guest: { name: 'Miami Heat', logo: './images/MIAMI_HEAT.svg', points: 122 },
  },
  {
    home: { name: 'Milwaukee Bucks', logo: './images/MILWAUKEE_BUCKS.svg', points: 133 },
    guest: { name: 'Utah Jazz', logo: './images/UTAH_JAZZ.svg', points: 99 },
  },
];

let currentIndex = 0;

const getNewIndex = (index) => index === games.length - 1 ? 0 : index + 1;


const showNextGame = (index) => {
  const banner = document.getElementById('banner');
  const game = games[index];

  banner.innerHTML = `
    <img src="${game.home.logo}" alt="Логотип клуба ${game.home.name}">

    <p>${game.home.points} — ${game.guest.points}</p>

    <img src="${game.guest.logo}" alt="Логотип клуба ${game.guest.name}">
  `
}

const nextButton = document.getElementById('next');
nextButton.addEventListener('click', () => {
  currentIndex = getNewIndex(currentIndex);
  showNextGame(currentIndex);
})