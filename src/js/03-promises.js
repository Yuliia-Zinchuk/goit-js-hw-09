const btn = document.querySelector('button[type=submit]');
const inpDelay = document.querySelector('[name=delay]');
const inpStep = document.querySelector('[name=step]');
const inpAmount = document.querySelector('[name=amount]');

const del = inpDelay.value;
const amt = inpAmount.value;

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
}

//btn.addEventListener('click', createPromise(amt, 1000));
btn.addEventListener('click', aaa);
let stepTime = Number(inpDelay.value);

function aaa() {
  for (let i = 1; i <= inpAmount.value; i++) {
    // stepTime += 500;
    stepTime += Number(inpStep.value);
    console.log(stepTime);
    createPromise(i, stepTime);
  }
  // let time = Number(inpDelay.value) + Number(inpStep.value);
  // console.log(time);
}

function createPromise(position, delay) {
  //console.log(position);

  const promise = new Promise((resolve, reject) => {
    position = position;
    delay = delay;
    // position = inpAmount.value,
    //   delay = inpDelay.value,

    const shouldResolve = Math.random() > 0.3;
    console.log(shouldResolve);
    setTimeout(() => {
      if (shouldResolve) {
        resolve(
          { position, delay },

          'Промис выполнися успешно с результатом (исполнен fullfiloooooo)'
        );
      } else {
        reject({ position, delay }, 'промис выполнился с ошибкой');
      }
    }, delay);
  });
  //return promise;
  console.log(promise);
  console.log(delay);
  //}
  //console.log(promise);
  promise
    .then(({ position, delay }) => {
      //Notiflix.Notify.failure('Please choose a date in the future');
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
// const promise = new Promise((resolve, reject) => {
//   const obj = {
//     position: inpAmount.value,
//     delay: inpDelay.value
//   };
//   const shouldResolve = Math.random() > 0.3;
//   console.log(shouldResolve);
//   setTimeout(() => {
//     if (shouldResolve) {
//       resolve(
//         'Промис выполнися успешно с результатом (исполнен fullfiloooooo)'
//       );
//       // Fulfill
//     } else {
//       reject('промис выполнился с ошибкой');
//       // Reject
//     }
//   }, 1000);
// });

// promise.then(success => {
//   console.log('fdvdvd');
// });

// const promise = new Promise((resolve, reject) => {
//   const canFullFill = Math.random() > 0.5;
//   console.log(canFullFill);
//   setTimeout(() => {
//     if (canFullFill) {
//       resolve(
//         'Промис выполнися успешно с результатом (исполнен fullfiloooooo)'
//       );
//     }
//     reject('промис выполнился с ошибкой');
//   }, 2000);
// });

// console.log(promise);

// promise.then(result => {
//   console.log(result + 'ok'),
//     error => {
//       console.log(error + 'no');
//     };
// });

// // Колбэк-функция
// function greet(name) {
//   console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//   console.log(`Регистрируем гостя ${name}.`);
//   callback(name);
// }

// registerGuest('Манго', greet);

// promise.then(result => {
//   console.log(result);
// });

// // Change value of isSuccess variable to call resolve or reject
// const isSuccess = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve('Success! Value passed to resolve function');
//     } else {
//       reject('Error! Error passed to reject function');
//     }
//   }, 2000);
// });

// // Will run first
// console.log('Before promise.then()');

// // Registering promise callbacks
// promise.then(
//   // onResolve will run third or not at all
//   value => {
//     console.log('onResolve call inside promise.then()');
//     console.log(value); // "Success! Value passed to resolve function"
//   },
//   // onReject will run third or not at all
//   error => {
//     console.log('onReject call inside promise.then()');
//     console.log(error); // "Error! Error passed to reject function"
//   }
// );

// // Will run second
// console.log('After promise.then()');
