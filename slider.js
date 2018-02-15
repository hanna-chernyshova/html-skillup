let visibleFeedback = 1;

const showFeedback = (n) => {
  let i;
  const feedbacks = document.getElementsByClassName('feedback');
  const dots = document.getElementsByClassName('dot');
  if (n > feedbacks.length) {
    visibleFeedback = 1;
  }

  if (n < 1) {
    visibleFeedback = feedbacks.length;
  }

  for (i = 0; i < feedbacks.length; i++) {
    feedbacks[i].style.display = 'none';
  };  

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  };

  feedbacks[visibleFeedback-1].style.display = "flex";
  dots[visibleFeedback-1].className += " active";
}

showFeedback(visibleFeedback);

const currentFeedback = (n) => {
  showFeedback(visibleFeedback = n);
}
