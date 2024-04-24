/*function convertToAdjList(adjMatrix) {
    return adjMatrix;
}*/
//Initially used geeks for geeks, but places NULL in place of empty locations
/*
function convertToAdjList(a) {
    let adjList = new Array(a.length);
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] != 0) {
                if (!adjList[i]) {
                    adjList[i] = [];
                }
                adjList[i].push(j);
            }
        }
    }
    return adjList;
}*/
//Working with Aaron Krapes resulted in finding: https://stackoverflow.com/questions/55111120/how-to-convert-adjacency-matrix-to-adjacency-list-in-javascript
//This code works where the geeks code doesn't as it initializes var arr=[] BEFORE taking action on it, where as the geeks code simply assinged [] to adjList
//which results in NULL being pushed to the overall array instead.
function convertToAdjList(adjMatrix)
{
    var adjList = [];

    for (var i = 0; i < adjMatrix.length; i++) {
        var array=[];
        for (var j = 0; j < adjMatrix.length; j++) {
            if (adjMatrix[i][j] == 1) {
                array.push(j);
            }
        }
        adjList[i]=array;
  }
   return adjList;
}

function convertToAdjMatrix(adjList){
    var adjMatrix = [];
    for(i = 0; i < adjList.length; i++){
        var tempArray = [];
        var array = adjList[i];
        var arrayPos = 0;
        for(j = 0; j < adjList.length; j++){
            if(j == array[arrayPos]){
                tempArray.push(1);
                arrayPos++;
            }else{
                tempArray.push(0);
            }
        }
        adjMatrix.push(tempArray);
    }
    return adjMatrix;
}

/*
let a = [[0,1],[0,1]]; // adjacency matrix
let b = convertToAdjList(a);
let c = convertToAdjMatrix(b);
console.log(a);
console.log(b);
console.log(c);
console.log(JSON.stringify(a)==JSON.stringify(c));*/
