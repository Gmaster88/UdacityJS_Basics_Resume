/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Shivom Gargava");


// var awesomeThoughts = "I am Shivom and I am AWESOME!"



// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funThoughts);


var bio = { 
			"name" : "Shivom Gargava", 
			"role" : "Software Engineer" ,
			"contact" : {"mobile" : "9711621218", "email" : "shivomgargava@gmail.com", 
						"github" : "Gmaster88" , "twitter" : "@shivomgargava", "blog" : "blog", "location" : "Noida"}, 
			"welcomeMessage" : "Currently working as a Software Engineer in Tech Mahindra Ltd, have an experience of working on each stage of SDLC.", 
			"skills" : ["Java", "J2EE", "ETL Dev", "SQL", "DataBase Management", "Software Development", "Hadoop", "JavaScript", "AngularJS"], 
			"biopic" : "images/me.jpg"
		};



var work = { 
			"jobs" : [{
						"employer": "Localize",
						"title": "Senior Software Developer",
						"location": "Edmonton, Alberta, Canada",
						"datesWorked": "March 2015 - December 2015",
						"description": "I was hired to work on Localize's online system, which involved knowledge in C# development, jQuery, knockoutJS, "+
										"SQL Server, Razor templates and Wordpress. I had limited experience with some of these so I learned quickly to become "+
										"productive as soon as possible.  I also lead discussions around better communication between the development team and "+
										"the business as well as definiing the company vision.  I enjoyed my time at Localize and learned a tremendous amount "+
										"from everyone I worked with there."
						},

						{
						"employer": "Localize",
						"title": "Senior Software Developer",
						"location": "Edmonton, Alberta, Canada",
						"datesWorked": "March 2015 - December 2015",
						"description": "I was hired to work on Localize's online system, which involved knowledge in C# development, jQuery, knockoutJS, "+
										"SQL Server, Razor templates and Wordpress. I had limited experience with some of these so I learned quickly to become "+
										"productive as soon as possible.  I also lead discussions around better communication between the development team and "+
										"the business as well as definiing the company vision.  I enjoyed my time at Localize and learned a tremendous amount "+
										"from everyone I worked with there."
						},
						{
						"employer": "Localize",
						"title": "Senior Software Developer",
						"location": "Edmonton, Alberta, Canada",
						"datesWorked": "March 2015 - December 2015",
						"description": "I was hired to work on Localize's online system, which involved knowledge in C# development, jQuery, knockoutJS, "+
										"SQL Server, Razor templates and Wordpress. I had limited experience with some of these so I learned quickly to become "+
										"productive as soon as possible.  I also lead discussions around better communication between the development team and "+
										"the business as well as definiing the company vision.  I enjoyed my time at Localize and learned a tremendous amount "+
										"from everyone I worked with there."
					}]
			};

var education = {
				  "schools" : [{ 
				  				"name": "North Carolina State University",
				  				"datesAttended": "Aug 2014 - Dec 2014 (One Semester)",
								"location": "Raliegh, NC, USA",
								"degree": "Master of Science",
								"major": "Computer Science",
								"minor": "Data Science",
								"url": "www.ncsu.edu"
							},
							{
								"name": "Rajiv Gandhi Technological University",
				  				"datesAttended": "Sep 2007 - Jun 2011",
								"location": "Bhopal, India",
								"degree": "Bachelor of Technology",
								"major": "Computer Science",
								"minor": "Physics",
								"url": "www.rgtu.edu"
							}],
					"onlineCourses" : [{ 
										"school": "Udacity",
										"title": "Javascript Basics",
										"completed": "November 2016",
										"url": "https://www.udacity.com/course/ud804"
										},
										{ 
										"school": "Coursera",
										"title": "Introduction to Big Data",
										"completed": "Dec 2015",
										"url": "https://www.udacity.com/course/ud804"
										},
										{ 
										"school": "Coursera",
										"title": "Algorithms Part 1",
										"completed": "March 2014",
										"url": "https://www.udacity.com/course/ud804"
										}
								]
				};


var projects = {
				"projects" : [{
								"title": "HTML5 Canvas Game",
								"datesWorked": "December 2014 - January 2015",
								"description": "Created an online game using HTML5 Canvas as part of Udacity's Front-End Web Developer " +
								"Nanodegree.",
								"images": [""],
								"url": "http://www.cherylcourt.ca/frogger"
							},
							{
								"title": "Web Development Wiki",
								"datesWorked": "June 2014 - August 2014",
								"description": "Created an online wiki for Udacity's Web Development Course.",
								"images": [""],
								"url": "http://helpful-kit-572.appspot.com/"
							},
							{
								"title": "Web Development Wiki",
								"datesWorked": "June 2014 - August 2014",
								"description": "Created an online wiki for Udacity's Web Development Course.",
								"images": [""],
								"url": "http://helpful-kit-572.appspot.com/"
							},
							{
								"title": "Web Development Wiki",
								"datesWorked": "June 2014 - August 2014",
								"description": "Created an online wiki for Udacity's Web Development Course.",
								"images": [""],
								"url": "http://helpful-kit-572.appspot.com/"
							}]
				};


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);



if(bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

for(i in formattedContactInfo) {
	$("#topContacts").append(formattedContactInfo[i]);
	$("#footerContacts").append(formattedContactInfo[i]);
}


function displayWork() {

	if(work.jobs.length > 0) {
	
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

displayWork();


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].datesWorked);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			

		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].datesAttended);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			$(".education-entry:last").append(formattedSchoolMinor);
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].completed);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();

/**
 * Skills Chart
 */
$(function () {
    $('#container').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Skills'
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Used (year)'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'Duration (months)'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 250,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                },
                tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    pointFormat: 'Used in {point.x} for {point.y} month(s)'
                }
			}
		},
		series: [{
				name: 'Java',
				color: 'rgba(223, 83, 83, .5)',
				data: [[2014, 11], [2013, 11], [2012, 11], [2011, 8], [2010, 4], [2009, 12], [1998, 8], [1999, 8], [2000, 4]]
			},
			{
				name: 'python',
				color: 'rgba(119, 152, 191, .5)',
				data: [[2014, 1], [2013, 1], [2012, 1], [2011, 1]]
			},
			{
				name: 'SQL',
				color: 'rgba(119, 152, 80, .5)',
				data: [[2013, 2]]
			},
			{
				name: 'PL/SQL',
				color: 'rgba(170, 162, 30, .5)',
				data: [[2010, 2], [2006, 4]]
			},
			{
				name: 'C++',
				color: 'rgba(0, 102, 0, .5)',
				data: [[2004, 12], [2003, 6]]
			},
			{
				name: 'C',
				color: 'rgba(0, 102, 0, .5)',
				data: [[1997, 8], [2004, 2], [2008, 4]]
			},
			{
				name: 'Javascript',
				color: 'rgba(204, 0, 0, .5)',
				data: [[2014, 1]]
			},
			{
				name: 'HTML/CSS',
				color: 'rgba(153, 51, 0, .5)',
				data: [[2014, 5], [2002, 3], [2008, 4], [2005, 2]]
			},
			{
				name: 'Web Development',
				color: 'rgba(0, 153, 102, .5)',
				data: [[2014, 2]]
			},
			{
				name: 'TDD',
				color: 'rgba(0, 102, 51, .5)',
				data: [[2014, 12], [2013, 12], [2012, 12], [2011, 4]]
			},
			{
				name: 'Django',
				color: 'rgba(204, 102, 0, .5)',
				data: [[2013, 2.5]]
			},
			{
				name: 'Perl',
				color: 'rgba(210, 200, 0, .5)',
				data: [[2011, 3], [2013, 1], [2012, 1], [2014, 1]]
			}]
	});
});


$("#mapDiv").append(googleMap);








