
# Cody Rush Assignment 2
[![Netlify Status](https://api.netlify.com/api/v1/badges/8170f8d7-ac5b-438c-9ee2-4f4ac155eaff/deploy-status)](https://codyrush-assignment-2.netlify.com/)  
A portfolio site based on the KelvinBridge framework provided by Jim Foley in the DMIT 1530 class. Includes SCSS, Gulp and NPM as well as a custom JavaScript function built for the mobile menu.

 

## Features
<dl>
  <dt>CSS Resets</dt>
   <dd> Built in SCSS config for CSS Addons such as mini-css-reset, bootstraps reboot.css and latest version of sanitize.css</dd>
  <dt>SCSS configuration</dt>
   <dd>build CSS using SCSS</dd>
  <dt>Built In Server</dt>
   <dd>Local development server with hot reloading using (gulp serve)</dd>
  <dt>Performance Tuning</dt>
   <dd> CSS performance built in autoprefixing, and minification on build(gulp build)</dd>
  <dt>Code Linting</dt>
    <dd> CSS and HTML linting opt in</dd>
  <dt>Google Analytics</dt>
    <dd> Built-in support for Google Analytics just add site keys</dd>
  <dt>Deployment</dt>
    <dd> Built-in support for deployment via FTP or Netlify</dd>
</dl>

## Netlify Build Script
<dl>
  <dt>About Gulp Tasks</dt>
   <dd>You can find all task within the gulpfile.js. This gulpfile.js has several custom task for neltify.</dd>
  <dt>gulp build</dt>
   <dd>this task builds your static site and if you have continous deploys turned on netlify will pull the changes from your repo</dd>
  <dt>gulp devbuild</dt>
   <dd>run simple build task ie: image compression, critical css generator in order to make this option work you must enable branch publishing</dd>
</dl>
