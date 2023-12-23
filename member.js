function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var memberPage = document.getElementById("memberPage");
    var skillsPage = document.getElementById("skillsPage");
    var projectsPage = document.getElementById("projectsPage");
    var contactPage = document.getElementById("contactPage");
    member.classList.add("active");
    skills.classList.remove("active");
    projects.classList.remove("active");
    contact.classList.remove("active");
    memberPage.style.display = "block";
    skillsPage.style.display = "none";
    projectsPage.style.display = "none";
    contactPage.style.display = "none";
}