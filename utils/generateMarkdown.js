// TODO: Create a function that returns a license badge based on which license is passed in

const { listenerCount } = require("process");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge = "";
    if(license === "Apache 2.0") {
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }else if (license === "GNU v3.0") {
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }else if (license === "MIT") {
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }else if (license === "Eclipse 1.0") {
      badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    }else {
      badge = ""
    }
    return badge
  };


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ""
  if(license === "Apache 2.0") {
    link = "https://opensource.org/licenses/Apache-2.0"
  }else if (license === "GNU v3.0") {
    link = "https://www.gnu.org/licenses/gpl-3.0"
  }else if (license === "MIT") {
    link = "https://opensource.org/licenses/MIT"
  }else if (license === "Eclipse 1.0") {
    link = "https://opensource.org/licenses/EPL-1.0"
  }else {
    link = ""
  }
  return link
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // console.log(data);
  return `
${renderLicenseBadge(data.license)}
## ${renderLicenseLink(data.link)}

# ${data.title}

## Description
${data.description}
  
## Table of Contents
    
* [Installation](#installation)
      
* [Usage](#usage)
      
* [License](#license)
      
* [Contributing](#contributing)
      
* [Tests](#tests)
    
* [Questions](#questions)
    
## Installation
${data.installation}
    
## Usage
${data.usage}

## License 
This application is licensed under the ${data.license} License.
    
## Contributing
${data.contributors}
    
## Tests
${data.tests}
    
## Questions? Contact me
    
* Github: ${data.github}
* email: ${data.email}

`
};




module.exports = generateMarkdown;
