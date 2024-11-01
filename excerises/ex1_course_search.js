"use strict";
let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];

// Write code that searches the courses array using the find() or filter() functions
// to determine: 

// Q1 When does the PROG200 course start?  

function prog200Course (course) { 
  if (course.CourseId === "PROG200") {
    return true 
  } 
}
let course = courses.find( prog200Course) 
console.log(" The start date for PROG200 is : " + course.StartDate)


// Q2.  What is the title of the PROJ500 course? 
 function proj500Course (course )  { 
  if (course.ID === "PROJ500") { 
    return true 
  } 
}
    
 let course2= courses.find( proj500Course)   
 console.log ( "The Title of the PROJ500 course " + course.Title )



//  What are the titles of the courses that cost $50 or less? 
function cheapCourseTitles ( courses) {
  return ( Number(courses.Fee) <= 50)
   
  }

  
