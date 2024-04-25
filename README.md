[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/hFs1pb0z)
# Graph Representations

Implement a function that converts an adjacency matrix to an adjacency list for
a directed unweighted graph using the template in `code.js`. Test your new
function; I've provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`. Now, the test code
does contain the solution, so you can have a look at it if you get stuck, but
try not to peek before attempting to solve it on your own.

## Runtime Analysis
//worked with Aaron Krapes, however, the convert to matrix was my own creation, as well as the test case to accompany it.

What is the runtime complexity of the conversion that you implemented? Does it
depend on the number of vertices, the number of edges, or both?

Runtime is $O(n^2)$ where N is the input adjacency matrix, as the code iterates over adjMatrix.length with another nested for loop that iterates over adjMatrix.length. These values are both used to access the values within the matrix. This is dependent on the number of vertices as adjMatrix.length directly compares to the amount of vertices.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. Add your answer to this markdown file.

## Bonus

Implement a function to convert an adjacency list to an adjacency matrix and
analyze it as above.
Runtime for this is $O(n^2)$ as similar to the adjacency list conversion, it must iterate through every possible adjacency, no matter if they exist or not in order to create an adjacency matrix.
