import Notiflix from 'notiflix';

btnSubmitRef = document.querySelector('button');
console.log(btnSubmitRef);

btnSubmitRef.addEventListener('click', trane);

function trane (event) {
  Notiflix.Notify.success('Sol lucet omnibus');
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

