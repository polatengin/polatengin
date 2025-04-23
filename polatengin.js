#!/usr/bin/env node

'use strict';

import { Chalk } from 'chalk';
import terminalLink from 'terminal-link'; 'terminal-link';
import terminalImage from 'terminal-image';
import { got } from 'got';
import inquirer from 'inquirer';
import open from 'open';

const c = new Chalk();

got('https://avatars.githubusercontent.com/u/118744?v=4&s=600', { responseType: 'buffer' })
  .then(function (image) { return terminalImage.buffer(image.body, { width: '33%' }); })
  .then(function (image) {
    console.log(`
      ${image}
Hello 👋, this is ${c.blue.bold("Engin Polat")}

I'm a versatile ${c.yellow.bold("software engineer")} with over 20 years of comprehensive experience, focused on working with challenging projects and learning while working.

I'm based out of ${c.bold("Seattle, Washington, US")}, working for ${terminalLink(c.green.bold('Microsoft'), 'https://microsoft.com')} as a ${c.yellow.bold("Senior Software Engineer")}.

I ${c.bold("wrote many books")} about many things, including ${c.yellow(".Net")}, ${c.yellow("C#")}, ${c.yellow("Asp.Net")}, ${c.yellow("Unity3D")}, ${c.yellow("Android")}, ${c.yellow("Xamarin")}, ${c.yellow("DevOps")}, ${c.yellow("Terraform")} and ${c.yellow("Go")}.

I love ${c.yellow("open source development")} and I build things on my GitHub profile ${terminalLink(c.green.bold('github.com/polatengin'), 'https://github.com/polatengin')}.

I feel very comfortable with ${c.bold.yellow("C#")}, ${c.bold.yellow("TypeScript")} and ${c.bold.yellow("Go")} languages.

I have a strong background in ${c.bold.yellow("DevOps")}, ${c.bold.yellow("Cloud")}, ${c.bold.yellow("CI/CD")}, ${c.bold.yellow("Kubernetes")}, ${c.bold.yellow("Docker")}, ${c.bold.yellow("Terraform")} and ${c.bold.yellow("GitHub Actions")}.
    `.trim());

    console.log("");

    inquirer.prompt([
      {
        type: 'list',
        message: 'Do you want to learn more about me?',
        name: 'open',
        choices: [
          { name: c.blueBright(`💻  What am I doing in ${c.italic("Microsoft")}? (${c.bold('GitHub')})`), value: 'https://github.com/polatengin' },
          { name: c.blueBright(`👔  What is my professional background (${c.bold('LinkedIn')})`), value: 'https://linkedin.com/in/polatengin' },
          { name: c.redBright('🫡   All good, bye.\n'), value: false }
        ]
      }
    ]).then(function (a) { open(a.open); process.exit(); }).catch(function () { });
  }).catch(function (e) { console.log(e); });
