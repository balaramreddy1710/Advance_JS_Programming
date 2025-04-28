function hasCycle(graph) {
  let visited = new Set();
  let visiting = new Set();

  function dfs(node) {
    visiting.add(node);

    for (let neigh of graph[node]) {
      if (visiting.has(neigh)) return true;
      if (!visited.has(neigh)) {
        if (dfs(neigh)) return true;
      }
    }

    visiting.delete(node);
    visited.add(node);
    return false;
  }

  for (let node in graph) {
    if (!visited[node]) {
      if (dfs(node)) return true;
    }
  }
  return false;
}

const graph = {
  A: ["B"],
  B: ["C"],
  C: ["A"],
};

console.log(hasCycle(graph));
