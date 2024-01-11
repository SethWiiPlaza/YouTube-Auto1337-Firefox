// Build v.7.6f by Seth@WiiPlaza
 // added more  checkers and math
// Fixes forced pauses on YouTube caused by Ad-Blockers
// Auto-likes every video you watch
// Compatibility: Firefox  
// Inject using the jQuery Firefox injector addon 'run-a-script by mivanchev'
// GitHub: https://github.com/MIvanchev/run-a-script

function clickLikeButton() {
  const likeButtonSelector = '#top-level-buttons-computed > segmented-like-dislike-button-view-model > yt-smartimation > div > div > like-button-view-model > toggle-button-view-model > button';

  function performClick() {
    const likeButton = $(likeButtonSelector);

    if (likeButton.length && !likeButton.hasClass('style-default-active')) {
      likeButton.click();
    }
  }

  function getTitle() {
    const titleElement = $("#title > h1 > yt-formatted-string");
    return titleElement.length ? titleElement.text().trim() : null;
  }

  let currentTitle = getTitle();

  function checkTitleChange() {
    const newTitle = getTitle();

    if (newTitle && newTitle !== currentTitle) {
      performClick();
      currentTitle = newTitle;
    }

    setTimeout(checkTitleChange, 1000);
  }

  setTimeout(function () {
    for (let i = 0; i < 3; i++) {
      setTimeout(performClick, i * 3000);
    }

    checkTitleChange();
  }, 10000);
}

function checkAndPlayVideo() {
  var videoElement = $('video');

  if (videoElement.length && videoElement[0].paused) {
    var playButton = $("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-left-controls > button");

    if (playButton.length) {
      playButton.click();
    }
  }
}

$(document).ready(function () {
  clickLikeButton();
  setInterval(checkAndPlayVideo, 1000);
});

$(document).ready(function () {
  const form = $('<form>', { class: 'child' });
  form.append('<input name="ownerDocument"/><script>// Your script here</script>');
  $('body').append(form);
});
