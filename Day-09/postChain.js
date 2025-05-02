function fetchUser() {
  return Promise.resolve({ id: 1, name: "Alice" });
}

function fetchPosts(userId) {
  return Promise.resolve([
    `Post1 for user ${userId}`,
    `Post2 for user ${userId}`,
  ]);
}

fetchUser()
  .then((user) => {
    console.log("User:", user);
    return fetchPosts(user.id);
  })
  .then((posts) => {
    console.log("Posts:", posts);
  })
  .catch((err) => {
    console.error("Error occurred:", err);
  });
