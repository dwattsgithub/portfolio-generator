const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where are you located?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Please summarize your experience in a few lines of text:',
      name: 'biodata',
    },
    {
      type: 'input',
      message: 'Please provide your linkedIn URL:',
      name: 'linkedIn',
    },
    {
      type: 'input',
      message: 'Please provide your GitHub URL:',
      name: 'github',
    },
  ])

  .then((response) => {
    console.log(response);
  
    let body = `<!DOCTYPE html>
    <html>
    <head>
    <style>
   
    body {
      font-family: Georgia, serif;
      background-color: lightpink;
    }
    
    p {
      font-size: 2.1em; /* 14px/16=0.875em */
      margin: 70px;
      border: 1px solid #4CAF50;
    }
    
    </style>
    </head>
    <body>`

    let data = `<p>
    <b>
    Name: ${response.name}
    </b>
 </p>
 <p>
    <b>
    Location: ${response.location}
    </b>
 </p>
 <p>
    <b>
    BioData: ${response.biodata}
    </b>
 </p>
 <p>
    <b>
    LinkedIn URL: ${response.linkedIn}
    </b>
 </p>
 <p>
    <b>
    GitHub URL: ${response.github}
    </b>
 </p>
</body>
</html>`


    fs.writeFile('index.html', body+data, (err) =>
        err ? console.error(err) : console.log('Success!'))
  });