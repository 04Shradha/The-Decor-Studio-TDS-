function showBio(member) {
    let bioText = "";
    if (member === 'alex') {
        bioText = "Alex Johnson is the Founder and CEO of Home Harmony. With a background in both technology and interior design, Alex has a unique vision for combining the two fields to create innovative solutions for homeowners.";
    } else if (member === 'maria') {
        bioText = "Maria Lopez, our Chief Designer, brings over 15 years of experience in interior design to the team. Her creativity and keen eye for detail ensure that every project is both beautiful and functional.";
    } else if (member === 'chris') {
        bioText = "Chris Evans is the CTO of Home Harmony. Chris's expertise in software development and technology is crucial to the development of our user-friendly and advanced application.";
    }
    document.getElementById('bioText').innerText = bioText;
    document.getElementById('bioModal').style.display = "block";
}

function closeModal() {
    document.getElementById('bioModal').style.display = "none";
}