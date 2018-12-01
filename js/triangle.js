//DANIEL MUGAMBI 30/11/2018;15:29 @MORINGASCHOOL
//TRIANGLE-TRACKER
var choice=prompt("How would you like to determine the type of a triangle.Using dimensions or angles?");
if(choice="dimensions"){
  //find type of triangle using DIMENSIONS
  var sideA=parseInt(prompt("Enter dimension for side A:"))
  var sideB=parseInt(prompt("Enter dimension for side B:"))
  var sideC=parseInt(prompt("Enter dimension for side C:"))

  //var rightTr=function(sideA,sideB,sideC){
    //return (math.sqrt((sideA*sideA)+(sideB*sideB)))
  //}
  //var result=rightTr(sideA,sideB,sideC)

   if(sideA===sideB && sideB===sideC){
    alert("The dimensions form an equilateral triangle ,since all 3 dimensions are equal")
   }
   else if (sideA===sideB || sideA==sideC || sideB===sideC) {
    alert("The dimensions form an isosceles triangle, since only two dimensions are equal")
   }

  //else if(sideC=== Math.sqrt((sideA*sideA)+(sideB*sideB))){
  //  alert("The dimensions form a right angled triangle.Pythagoras theory proves it.Its also a scalene triangle since the sides arent equal ")
  //}

  else if( sideA!==sideB && sideB !== sideC && sideC !== sideA ){

      if(sideC === Math.sqrt((sideA*sideA)+(sideB*sideB)) ) {
        alert("The dimensions form a right angled triangle.Pythagoras theory proves it.Its also a scalene triangle since the sides arent equal ")
      }

  else{
      alert("The dimensions form a scalene triangle" )
    }

}
else{
  alert("INVALID INPUT")
}
/*
}
else if (choice="angles") {
    //find type of triangle using ANGLES
    var angleABC=parseInt(prompt("Enter angle ABC:"))
    var angleBCA=parseInt(prompt("Enter angle BCA:"))
    var angleCAB=parseInt(prompt("Enter angle CAB:"))

    if (angleABC===angleBCA  && angleBCA===angleCAB) && (angleABC+angleBCA+angleCAB)=180 {
    alert("The angles form an equilateral triangle")
    }
    else if (angleABC===angleBCA || angleABC===angleCAB || angleBCA===angleCAB) && (angleABC+angleBCA+angleCAB)=180{
    alert("The angles form an isosceles triangle")
    }
    //else if ( angleABC===(180-(angleBCA+angleCAB)) || angleBCA === (180-(angleBCA+angleCAB)) ||  angleCAB === (180-(angleBCA+angleABC)) ){
  //  alert("The angles form a scalene triangle and also form a right angled triangle")

  //  }

      else if (angleABC!==angleBCA && angleBCA!== angleCAB && angleABC!==angleCAB) && (angleABC+angleBCA+angleCAB)=180{
        if ( angleABC===(180-(angleBCA+angleCAB)) || angleBCA === (180-(angleBCA+angleCAB)) ||  angleCAB === (180-(angleBCA+angleABC)) ){
        alert("The angles form a scalene triangle and also form a right angled triangle")
      }
      else{
        alert("The angles form a scalene triangle")
      }
  }
  else{
    alert("invalid input or your values do not add up to 180 degrees")
  }
}

else{
    alert("CHOOSE BETWEEN DIMENSIONS OR ANGLES")
}
