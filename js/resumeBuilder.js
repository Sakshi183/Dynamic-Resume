/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 
/* var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-column"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li>';
*/


var name = "Sakshi Sharma";
var role = "";
var formattedRole = HTMLheaderRole.replace("%data%",role);
var formattedName = HTMLheaderName.replace("%data%",name);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
var  email = "201551094@iiitvadodara.ac.in";
var github = "https://github.com/Sakshi183";
var location1 = "New Delhi";
var formattedLocation=HTMLlocation.replace("%data%",location1);

var formattedEmail =HTMLemail.replace("%data%",email);
var formattedGitHub = HTMLgithub.replace("%data%",github);


$("#topContacts").prepend(formattedGitHub);
$("#topContacts").prepend(formattedEmail);

$("#topContacts").prepend(formattedLocation);


var bio ={
 	"name": "Sakshi Sharma",
 	
 	"contact_info": {
 		"mobile": "8469964111",
 		"email": "201551094@iiitvadodara.ac.in",
 		"location": "New Delhi"
 	},
 	"welcome message": "",
 	"skills": ["awesomeness", "saving the universe"],
 	"biopic": "images/fry.jpeg"
 };
bio.city ="New Delhi";
var work ={
	"jobs": [{
		"employer": "IIIT Vadodara",
		"city": "Gandhinagar",
		"title":"Student at IIIT",
		"date":"July 2015 : Future",
		"description":"I am a student currently pursuing engineering"
	}, {
		"employer": "KV BHANDUP",
		"city": "mumbai",
		"title":"student at KV",
		"date":"April 2013 : March 2014",
		"description":"I was in class XII"
	}]

};

function displayWork(){

for (job in work.jobs)
{
   $("#workExperience").append(HTMLworkStart);
   var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
   var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
   var formattedEmployerTitle = formattedEmployer + formattedTitle;
  $(".work-entry:last").append(formattedEmployerTitle);
  
  var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].date);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
      $(".work-entry:last").append(formattedDescription); 
   
}
//$("#main").append(work.employer);
}
//displayWork();


var projects ={
	"project": [
	{
		"title": "Chess",
		"description": "A mutiplayer game",
		"date": "June 2016:July 2016",
		"link":"www.google.com"
	},
	{"title": "Bank",
		"description": "A bank database management system",
		"date": "Mar 2017:April 2017",
		"link":"hello link"
		
		},
	{"title": "Tic Tac Toe",
		"description": "A basic game",
		"date": "Jan 2017:Jan 2017",
		"link":"hello link"
		},	
	{
		"title": "Automatic Lock System",
		"description": "It is a linux application which locks the syste m in absence of the authorised user.",
		"date": "June 2016:July 2016",
		"link":"hello link"
	}
	
	]
};
function displayproject()
{

  for(i in projects.project)
  {
  
  $("#projects").append(HTMLprojectStart);
var formattedprojectTitle = HTMLprojectTitle.replace("%data%",projects.project[i].title);

 var link = formattedprojectTitle.replace("'#'",projects.project[i].link);

$(".project-entry:last").append(link);

var formattedprojectDates = HTMLprojectDates.replace("%data%",projects.project[i].date);
$(".project-entry:last").append(formattedprojectDates);

var formattedprojectDescription = HTMLprojectDescription.replace("%data%",projects.project[i].description);
$(".project-entry:last").append(formattedprojectDescription);

for (image in projects.project[i].images)
{
 var formattedImage = HTMLprojectImage.replace("%data%",projects.project[i].images[image]);
 $(".project-entry:last").append(formattedImage);
}
  }

}

displayproject();


var education ={
	"Schools": [
	{
			"name": "Kendriya Vidyalaya Bhandup",
			"degree": "ClassXII",
			"date":"2014",
			
			"city": "Mumbai",
			"major":"CSE"
			
		},
	{
			"name": "Army public School",
			"degree":"classX",
			"date":"2012",
			"city": "Lucknow",
			"major":"CSE"
		}
	]
};
	 
	 

/*var onlineCourses = {	"online courses": {
	[
	{
		"title": "Android Basics",
		"school": "Udacity"

	}
	]
};*/

function displayeducation()
{
 for (i in education.Schools)
 {
  $("#education").append(HTMLschoolStart);
 var formattedTitle = HTMLschoolName.replace("%data%" , education.Schools[i].name);
 // $(".education-entry:last").append(formattedTitle);
  var formattedDegree =  formattedTitle + HTMLschoolDegree.replace("%data%" , education.Schools[i].degree);
$(".education-entry:last").append( formattedDegree);
var formattedDate = HTMLschoolDates.replace("%data%" ,education.Schools[i].date);
  $(".education-entry:last").append( formattedDate);
var formattedCity = HTMLschoolLocation.replace("%data%" , education.Schools[i].city);
  $(".education-entry:last").append( formattedCity);
  var formattedMajor = HTMLschoolMajor.replace("%data%", education.Schools[i].major);
   $(".education-entry:last").append( formattedMajor);
}
} 

displayeducation();

//$("#map").append(googleMap);





