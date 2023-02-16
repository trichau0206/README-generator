// Create a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
  return ``;
}

// Create a function that returns the license link
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  }
  return ``;
}

//  Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This application is covered by the ${license} license.`
  }
  return ``;
}

//  Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${data.title}
  ${badge(data.license)}
  ${data.name}
  ## Description 
  ${data.description}
  ## Table of Contents 
  - [Installation](#installation-⚙️)
  - [Usage](#usage)
  ${link(data.license)}
  - [Test](#tests)
  - [Credits](#credits)
  - [Questions](#questions)
  - [Deployed Application](#deployed-application)
  ## Installation ⚙️
  ${data.install}
  ## Usage 
  ${data.usage}
  ${section(data.license)}
  ## Tests 
  ${data.test}
  ## Credits 
  ${data.credits}
  ## Questions 
  If there are any questions, feel free to contact my email at: ${data.email}
  You can also find me on GitHub at: [${data.github}](https://github.com/trichau0206})
  ## Deployed Application 
  This application was deplopyed at [${data.deploy}](${data.deploy})
`;
}

module.exports = generateMarkdown;
