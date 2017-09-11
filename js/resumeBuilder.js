/*
This is empty on purpose! Your code to build the resume will go here.
 */
/* Bio Code */
var bio = {
    name : "Hamad Almuqbel",
    role : "Software Engineer",
    contacts : {
        mobile: "+966540000000",
        email: "Hamad@udacity.com",
        github: "hamadm",
        twitter: "Hamad4m",
        location: "Riyadh"
    },
    welcomeMessage: "This Hamad, Welcome to my Resume",
    skills: ["Programing", "Design Thinking", "gaming"],
    biopic: "http://brandtwist.com/wp-content/uploads/2013/05/Personal-Brand.jpg",
    display: function(){
        var formatedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formatedRole);
        var formatedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formatedName);

        var formatedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#topContacts").append(formatedMobile);
        $("#footerContacts").append(formatedMobile);

        var formatedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#topContacts").append(formatedEmail);
        $("#footerContacts").append(formatedEmail);

        var formatedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#topContacts").append(formatedTwitter);
        $("#footerContacts").append(formatedTwitter);

        var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#topContacts").append(formatedGithub);
        $("#footerContacts").append(formatedGithub);

        var formatedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#topContacts").append(formatedLocation);
        $("#footerContacts").append(formatedLocation);

        var formatedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formatedBiopic);

        var formatedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formatedWelcomeMsg);

        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill){
            var formatedSkill = HTMLskills.replace("%data%",skill);
            $("#skills").append(formatedSkill);
        });


    }
};
bio.display();


/* work */

var work = {
    jobs: [
        {
            employer: "Elm",
            title: "Intern" ,
            location: "Riyadh" ,
            dates: "Summer 2014",
            description: "Worked in the innovation department, setting up programs for students and working on developing websites for these innovative programs" 
        },
        {
            employer: "Accenture",
            title: "Strategy Consultant" ,
            location: "Riyadh" ,
            dates: "2016 - 2017",
            description: "Worked as a technology strategist, working with different clients in banking telecommunication in developing stratgies and solving problems regarding data" 
        }
    ],
    display: function(){
        work.jobs.forEach(function(job){
            $("#workExperience").append(HTMLworkStart);
            var formatedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            $(".work-entry:last").append(formatedEmployer);
            var formatedTitle = HTMLworkTitle.replace("%data%", job.title);
            $(".work-entry:last").append(formatedTitle);
            var formatedDates = HTMLworkDates.replace("%data%", job.dates);
            $(".work-entry:last").append(formatedDates);
            var formatedWorkLocation = HTMLworkLocation.replace("%data%", job.location);
            $(".work-entry:last").append(formatedWorkLocation);
            var formatedWorkDescription = HTMLworkDescription.replace("%data%", job.description);
            $(".work-entry:last").append(formatedWorkDescription);
        });
    }
};


work.display();


/* Projects */
var projects = {
    projects: [
        {
            title: "Animal card",
            dates: "16 Aug 2017",
            description: "Worked as part of udacity nanodegree",
            images: ["images/project1.png"]
        },
        {
            title: "Portfolio project",
            dates: "16 Aug 2017",
            description: "Worked as part of udacity nanodegree, get to design with css and html responsive design of my work",
            images: ["images/project2.png"]
        }
    ],
    display: function(){
        projects.projects.forEach(function(project){
            $("#projects").append(HTMLprojectStart);
            var formatedProjectTitle = HTMLprojectTitle.replace("%data%", project.title);
            $(".project-entry:last").append(formatedProjectTitle);
            var formatedprojectDates = HTMLprojectDates.replace("%data%", project.dates);
            $(".project-entry:last").append(formatedprojectDates);
            var formatedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
            $(".project-entry:last").append(formatedProjectDescription);
            project.images.forEach(function(projectImage){
                var formatedProjectImage = HTMLprojectImage.replace("%data%", projectImage);
                $(".project-entry:last").append(formatedProjectImage);

            })
        });
    }
};

projects.display();


/* Education */
var education = {
    schools:[
        {
            name: "KFUPM",
            location: "Dhahran",
            degree: "BS",
            majors: ["Software Engineering"],
            dates: "2010 - 2015",
            url: "http://www.kfupm.edu.sa",
        }
    ],
    onlineCourses: [
        {
            title: "Udacity FEND",
            school: "Udacity",
            dates: "2017",
            url: "http://www.udacity.com"
        }
    ],
    display: function(){
        
        education.schools.forEach(function(school){
            $("#education").append(HTMLschoolStart);
            var formatedSchoolName = HTMLschoolName.replace("%data%", school.name);
            $(".education-entry:last").append(formatedSchoolName);
            
            var formatedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
            $(".education-entry:last").append(formatedSchoolDegree);
            
            var formatedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
            $(".education-entry:last").append(formatedSchoolDates);
            
            var formatedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
            $(".education-entry:last").append(formatedSchoolLocation);
            
            school.majors.forEach(function(major){
                var formatedMajor = HTMLschoolMajor.replace("%data%", major);
            $(".education-entry:last").append(formatedMajor);
            });
        });
        
        education.onlineCourses.forEach(function(onlineCourse){
            $("#education").append(HTMLonlineClasses);
            $("#education").append(HTMLschoolStart);
            
            var formatedOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourse.title);
            $(".education-entry:last").append(formatedOnlineTitle);
            
            var formatedOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourse.school);
            $(".education-entry:last").append(formatedOnlineSchool);
            
            var formatedOnlineDates = HTMLonlineDates.replace("%data%", onlineCourse.dates);
            $(".education-entry:last").append(formatedOnlineDates);            
            var formatedOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
            $(".education-entry:last").append(formatedOnlineURL);
        });
    }
};
education.display();

/* map */
$("#mapDiv").append(googleMap);