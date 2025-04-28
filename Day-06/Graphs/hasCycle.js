function hasCycle(graph) {
  let visited = new Set();

  function dfs(node, parent) {
    visited.add(node);
    for (let neigh of graph[node]) {
      if (!visited.has(neigh)) {
        if (dfs(neigh, node)) return true;
      } else if (neigh !== parent) return true;
    }
    return false;
  }

  for (let node in graph) {
    if (!visited[node]) {
      if (dfs(node, null)) return true;
    }
  }
  return false;
}

const graph = {
  0: [1, 2],
  1: [0, 2],
  2: [0, 1, 3],
  3: [2],
};

console.log(hasCycle(graph));
