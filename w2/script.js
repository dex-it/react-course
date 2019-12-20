let currentIndex = 0;

const addGameToBanner = (index) => {
  const banner = document.getElementById('banner');
  const indicators = document.getElementById('indicators');
  const game = games[index];

  banner.innerHTML +=
    `<div class="banner-container">
      <img src="${game.home.logo}" alt="Логотип клуба ${game.home.name}">

      <p>${game.home.points} — ${game.guest.points}</p>

      <img src="${game.guest.logo}" alt="Логотип клуба ${game.guest.name}">
    </div>`;

  const isCurrent = index === currentIndex;
  indicators.innerHTML += 
    `<button
      class="indicator ${isCurrent ? 'is-current' : ''}"
      tabindex="${isCurrent ? -1 : 0}"
      onclick="showNewGame(${index})"
    >
    </button>`;
}

const showNewGame = (newIndex) => {
  // update state
  currentIndex = newIndex;

  const banner = document.getElementById('banner');
  const indicators = document.getElementById('indicators');

  banner.childNodes.forEach((bannerInner) => {
    bannerInner.style.transform = `translateX(-${bannerInner.offsetWidth * newIndex}px)`;
  })

  indicators.childNodes.forEach((indicator, index) => {
    indicator.classList.toggle('is-current', index == currentIndex);
    indicator.setAttribute('tabindex', index === currentIndex ? -1 : 0);
  })
}

const nextButton = document.getElementById('next');
nextButton.addEventListener('click', () => {
  const newIndex = increaseIndex(currentIndex);
  showNewGame(newIndex);
})

const prevButton = document.getElementById('prev');
prevButton.addEventListener('click', () => {
  const newIndex = decreaseIndex(currentIndex);
  showNewGame(newIndex);
})

games.forEach((_, index) => addGameToBanner(index));

document.addEventListener('keydown', (event) => {
  if (event.keyCode === KEY_CODES.leftArrow) showNewGame(decreaseIndex(currentIndex))
  if (event.keyCode === KEY_CODES.rightArrow) showNewGame(increaseIndex(currentIndex))
})