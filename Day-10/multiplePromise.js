function asyncTask(id) {
  return new Promise((resolve) => {
    const delay = Math.random() * 1000;
    setTimeout(() => resolve(`Task ${id} done`), delay);
  });
}

const tasks = Array.from({ length: 10 }, (_, i) => asyncTask(i + 1));

Promise.all(tasks)
  .then((results) => {
    console.log("All tasks completed:");
    results.forEach((res) => console.log(res));
  })
  .catch((err) => {
    console.error("One or more tasks failed:", err);
  });
