const fs = require("fs");

function create(input) {

    fs.writeFile('README.md',
`# ${input.title}
![license badge](https://img.shields.io/badge/license-${input.license}-blue)
## Description
${input.description}
## Table of Contents
- [Installation](#installation)
- [Instructions](#instructions)
- [Credits](#credits)
- [License](#license)
## Installation
${input.install}
## Instructions
${input.instructions}  
![Project](./assets/images/img.png)
## Credits
${input.usr} - [GitHub Profile](https://github.com/${input.username})
## License
This product is licensed under the ${input.license} license.
## How to Contribute
${input.countributions}
## Tests
${input.test}
## Questions
Email: ${input.email}
GitHub: [${input.username}](https://github.com/${input.username})
`,
    function (error) {
        if (error) {
            console.log("Exception Caught: \n" + error);
        }
    })
}

module.exports = {
    create
};