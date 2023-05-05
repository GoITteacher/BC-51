Promise.reject()
  .catch(() => {
    console.log('error1');
    return Promise.reject();
  })

  .catch(() => {
    console.log('error2');
  });
