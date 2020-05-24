var n = 5;

var graph1 = [
  [0, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 1, 0]
];
var graph2 = [
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [1, 1, 1, 1, 0]
];
var graph3 = [
  [0, 2, 5, 25, 40],
  [3, 0, 4, 124, 1],
  [34, 3, 0, 44, 0],
  [0, 23, 99, 0, 0],
  [10, 0, 4, 41, 0]
];

var graph4 = [
  [0, 1, 1, 1, 10],
  [1, 0, 12, 5, 1],
  [3, 1, 0, 2, 1],
  [2, 3, 1, 0, 1],
  [1, 1, 1, 4, 0]
];

//validate a graph
var validGraph = (graph, n) => {
  var curr = 0;
  var i = 0,
    j = 0;
  while (curr < n) {
    if (graph[i][j] != 0) return false;
    i++;
    j++;
    curr++;
  }
  return true;
};

//check graph type
var checkDirection = (graph, n) => {
  var max = n * n - n;
  var uni = 0;
  var bi = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i != j) {
        if (graph[i][j] != graph[j][i]) bi++;
        else uni++;
      }
    }
  }
  if (uni == max) return "undirected";
  else if (bi == max) return "directed";
  else return "mixed";
};

//check graph type and validity
const checkGraph = (graph, n) => {
  if (validGraph(graph, n)) {
    return checkDirection(graph, n);
  } else return "Invalid graph";
};

console.log(checkGraph(graph2, n));
