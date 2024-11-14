  
  function searchSkills() {
    const input = document.getElementById('search').value.toLowerCase();
    const skillsContainer = document.getElementById('skillsContainer');
    const skillItems = skillsContainer.getElementsByClassName('skill-item');
  
    for (let i = 0; i < skillItems.length; i++) {
      const skillInfo = skillItems[i].getElementsByClassName('skill-info')[0];
      const skillText = skillInfo.innerText.toLowerCase(); // Get the text of the skill info
  
      // Check if the input matches any part of the skill text
      if (skillText.includes(input)) {
        skillItems[i].style.display = ""; // Show the item if it matches
      } else {
        skillItems[i].style.display = "none"; // Hide the item if it does not match
      }
    }
  }
  const userData = {
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    language: 'English',
    skillsNeeded: 'JavaScript, HTML/CSS',
    skillsHaving: 'Python, Java'
  };

  // Display user data
  const profileDisplay = document.getElementById('profileDisplay');
  profileDisplay.innerHTML = `
    <p><strong>Name:</strong> ${userData.name}</p>
    <p><strong>Email:</strong> ${userData.email}</p>
    <p><strong>Phone Number:</strong> ${userData.phone}</p>
    <p><strong>Preferred Language:</strong> ${userData.language}</p>
    <p><strong>Skills Needed:</strong> ${userData.skillsNeeded}</p>
    <p><strong>Skills You Have:</strong> ${userData.skillsHaving}</p>
  `;