
function triangleTracker(){
//var valueDb=[]

  var sideA=(document.getElementById("inputA").value);
  var sideB=(document.getElementById("inputB").value);
  var sideC=(document.getElementById("inputC").value);
//valueDb.push(sideA,sideB,sideC)
var output;

if(( sideA+sideB > sideC)  || (sideB+sideC >sideA) || (sideC+sideA>sideB) ){
   if(sideA===sideB && sideB===sideC){
   output="The dimensions form an equilateral triangle ,since all 3 dimensions are equal"
  document.getElementById("answer").innerHTML= output
   }
   else if (sideA===sideB || sideA==sideC || sideB===sideC) {
     output="The dimensions form an isosceles triangle, since only two dimensions are equal"
      document.getElementById("answer").innerHTML= output

   }

  // else if  (sideC === Math.sqrt((sideA*sideA)+(sideB*sideB)) ) {
    //    output="The dimensions form a right angled triangle.Pythagoras theory proves it.Its also a scalene triangle since the sides arent equal "
//document.getElementById("answer").innerHTML=output
//}

else  {
output="The dimensions form a scalene triangle"
 document.getElementById("answer").innerHTML=output
    }
  }

else{
  output="NOT A TRIANGLE"
   document.getElementById("answer").innerHTML=output
}

}
