function countComponents(n, edges) {
  const graph = {};
  for (let i = 0; i < n; i++) graph[i] = [];

  for (let [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Set();
  let count = 0;

  function dfs(node) {
    visited.add(node);
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) dfs(neighbor);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited.has(i)) {
      dfs(i);
      count++;
    }
  }

  return count;
}

console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
);
console.log(
  countComponents(4, [
    [0, 1],
    [1, 2],
    [2, 3],
  ])
);
console.log(countComponents(3, []));
