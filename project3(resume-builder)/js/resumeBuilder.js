




var bio={
  "name": "Sahil Lamba",
  "role": "Web Developer",
  "contacts": {
    "mobile": "819945288",
    "email": "sahillamba05@gmail.com",
    "github": "sahillamba",
    "twitter": "sahil61",
    "location": "Haryana"
  },
  "welcomeMessage": "Aloh Mora",
  "skills":[
    "awsomeness","delivery things","cryogenic sleep","saving the universe"
  ],
  "biopic": "images/abc.jpg"

};

bio.display = function(){


 $("#header").prepend(HTMLheaderName.replace("%data%",bio.name) + HTMLheaderRole.replace("%data%",bio.role));

  $("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
  $("#topContacts, #footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
  $("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
  $("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
  $("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
  $("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

 if(bio.skills.length>0)
 {
   $("#header").append(HTMLskillsStart);
   for(var i=0;i<bio.skills.length;i=i+1)
   {
      $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
   }
  }
};


var work={
  "jobs": [
    {
      "employer":"Self-employed",
      "title": "Myself",
      "location": "Yamuna Nagar",
      "dates": "In progress",
      "description": "No need"

    },
    {
      "employer":"Cook",
      "title": "Myself",
      "location": "Yamuna Nagar",
      "dates": "In progress",
      "description": "abc"

    }
  ]
};

work.display = function(){
  $("#workExperience").append(HTMLworkStart);
    var formattedEmployer;
    var formattedTitle;
    var formattedEmployerTitle;
    var i;
  for( i=0;i<work.jobs.length;i=i+1){

     formattedEmployer=HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
     formattedTitle=HTMLworkTitle.replace("%data%",work.jobs[i].title);
     formattedEmployerTitle=formattedEmployer+formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);


      $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[i].dates));
      $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[i].location));
$(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[i].description));
  }

};

var projects={
  "projects":[
    {
      "title": "Basic HTML",
      "dates": "25",
      "description": "Introduction To Html tags",
      "images": "images/1.jpg"
    },
    {
      "title": "Card",
      "dates": "26",
      "description": "Introduction To Css ",
      "images": "images/2.jpg"
    }
  ]
};

projects.display =function(){

  $("#projects").append(HTMLprojectStart);
  var i;

  for( i=0;i<projects.projects.length;i=i+1)
  {
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[i].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[i].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[i].description));
  $(".project-entry").append(HTMLprojectImage.replace("%data%", projects.projects[i].images));


  }

};


var education={
  "schools":[{
    "name": "Chitkara University",
    "location": "Chandigarh",
    "degree": "B.E",
    "majors": ["Ntech"],

    "dates": "18-08-2015"
  }
],
  "onlineCourses":[
    {

    "title": "Front-End",
    "school": "Ucollege",
    "dates":"1-02-2015",
    "url": "in.udacity.com/chitkara"
}
]

};


education.display = function() {
    $("#education").append(HTMLschoolStart);

$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[0].name) + HTMLschoolDegree.replace("%data%", education.schools[0].degree));
        $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[0].dates));
        $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[0].majors));
        $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[0].location));
        $(".education-entry").append(HTMLonlineClasses);
        $(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school));
        $(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[0].dates));
        $(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[0].url));

};





bio.display();
work.display();
education.display();
projects.display();



$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);


// $("#topContacts").prepend(HTMLcontactGeneric.replace("%contact%",bio.contact));
//$("#topContacts").prepend(HTMLmobile.replace("mobile",bio.contacts.mobile));
