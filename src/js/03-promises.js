import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form'),
  firstDelay: document.querySelector('[name="delay"]'),
  stepDelay: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
  createPromisesBtn: document.querySelector('button[type="submit"]'),
}

refs.form.addEventListener('submit', onHandlerSubmit);

function onHandlerSubmit(evt) {
  evt.preventDefault();
  
  let firstDelayValue = Number(refs.firstDelay.value);
  const stepDelayValue = Number(refs.stepDelay.value);
  const amountValue = Number(refs.amount.value);

  for (let i = 1; i <= amountValue; i++){
    createPromise(i, firstDelayValue)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { useIcon: false });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { useIcon: false });
      });
    firstDelayValue += stepDelayValue;
    
  };

};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const promiseProp = { position, delay };
    const shouldResolve = Math.random() > 0.3;
  
    setTimeout(() => {
      if (shouldResolve) {
        resolve(promiseProp);
      } else { reject(promiseProp); }
    }, delay);
  
  });
  
};