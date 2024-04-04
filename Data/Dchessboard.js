
function Squareinfo(color,position,piece){
    return {color,position,piece}
}

function Row(rowid){
    let vertical=['a','b','c','d','e','f','g','h'];
    let particularRow=[];
  
    vertical.forEach((element, index) => {
      if (rowid % 2 === 0 && index % 2 === 0) {
          particularRow.push(Squareinfo("white", rowid + element, null));
      } else if (rowid % 2 === 0 && index % 2 !== 0) {
          particularRow.push(Squareinfo("green", rowid + element, null));
      } else if (rowid % 2 !== 0 && index % 2 === 0) {
          particularRow.push(Squareinfo("green", rowid + element, null));
      } else if (rowid % 2 !== 0 && index % 2 !== 0) {
          particularRow.push(Squareinfo("white", rowid + element, null));
      }
    });
    return particularRow;
  }
  

function initboardData(){
    let board=[
        Row(8),
        Row(7),
        Row(6),
        Row(5),
        Row(4),
        Row(3),
        Row(2),
        Row(1)
    ];
    return board;
}


export {initboardData};