let json = "{ bad json }";

try {
  let user = JSON.parse(json);
  console.log(user.name);
} catch (err) {
  console.log(
    "Our apologies, the data has errors, we'll try to request it one more time."
  );
  console.log(err.name);
  console.log(err.message);
}
