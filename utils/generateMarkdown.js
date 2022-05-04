// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  //[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  //![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)


  switch(license){
    case 'Apache' : 
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
      break;
    case 'BSD 3-Clause' :
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)'
      break;
    case 'BSD 2-Clause' :
      return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)'
      break;
    case 'MIT' :
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
      break;
    case 'Mozilla Public License 2.0' :
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)'
      break;
    Default :
      return "";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  //[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  //[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)

  switch(license){
    case 'Apache' : 
      return `## License
      
      This project is license under the [Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
      break;

    case 'BSD 3-Clause' :
      return `## License
      
      This project is license under the [BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`
      break;

    case 'BSD 2-Clause' :
      return `## License
      
      This project is license under the [BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)`
      break;

    case 'MIT' :
      return `## License
      
      This project is license under the [The MIT License](https://opensource.org/licenses/MIT)`
      break;

    case 'Mozilla Public License 2.0' :
      return `## License
      
      This project is license under the [Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)`
      break;
    Default :
      return "";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return '';
  }else{
    return '* [License](#license)';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  //functions to hold the rendering
const badge = renderLicenseBadge(data.license);
const licenseLink = renderLicenseLink(data.license);
const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  ${badge}

  ## Description

  ${data.description}

  ## Table of Contents

  *[Installation](#installation)
  *[Usage](#usage)
  ${licenseSection}
  *[Contributing](#contributing)
  *[Tests](#tests)


  ## Installation

  
  > ${data.commDepend}

  ## Usage 

  ${data.repoKnow}

  ${licenseLink}

  ## Contributing

  ${data.repoContribute}

  ## Tests  

  To run tests, run the following command: 

  > ${data.commTests}

`;
}

module.exports = generateMarkdown;
