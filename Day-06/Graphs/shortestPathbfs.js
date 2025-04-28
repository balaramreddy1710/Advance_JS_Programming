function shortestPath(graph, start, end) {
  const queue = [[start, 0]];
  const visited = new Set();
  visited.add(start);

  while (queue.length) {
    const [node, distance] = queue.shift();

    if (node === end) return distance;

    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
}

const graph1 = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C", "E"],
  E: ["D"],
};
console.log(shortestPath(graph1, "A", "E"));

const graph2 = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};
console.log(shortestPath(graph2, "A", "A"));

const graph3 = {
  A: ["B"],
  B: ["A"],
  C: ["D"],
  D: ["C"],
};
console.log(shortestPath(graph3, "A", "D"));
