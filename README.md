<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://firebasestorage.googleapis.com/v0/b/media-7d6da.appspot.com/o/images%2Fbdc025e8-25a0-4e34-8b42-3bc6dfb00803?alt=media&token=70ed8e06-029e-4c1e-9c70-a85604fcba08" alt="Logo" width="160" height="80">
  </a>

  <h3 align="center">Media</h3>

  <p align="center">
   This project was bootstrapped with Create React App.
    <br />
    <a href="https://github.com/dharshan29/social-media"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://zingy-fudge-1cb481.netlify.app">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

It is a full Stack Web Application built with ReactJs (frontEnd) and Firebase (backend and storage) with other libraries. This website uses Google auth) for Authentication, On successful login get navigated to Home page. where we can see all the post shared and we can also post,edit and delete our posts.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

- [![React][react.js]][react-url]
- [![Material UI][materialui.com]][materialui-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Create firebase account and Import firebase SDK in firebase.js and setup firebase Authentication(Google Auth), realtime database and Storage.
2. Clone the repo
   ```sh
   git clone https://github.com/dharshan29/social-media.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your Firebase SDK config keys and base_URL from realtime database in .env

   ```js
   REACT_APP_API_KEY = "apiKey";
   REACT_APP_APP_ID = "appid";
   REACT_APP_AUTH_DOMAIN = "authdomain";
   REACT_APP_PROJECT_ID = "projectid";
   REACT_APP_STORAGE_BUCKET = "storagebucket";
   REACT_APP_MESSAGE_SENDER_ID = "messagesenderid";
   REACT_APP_MEASUREMENT_ID = "measurementid";

   REACT_APP_BASE_URL = "https://firebasedatabase.app";
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@dharshant](https://www.linkedin.com/in/dharshan-t-330179205/) - dharshant2000@gmail.com

Project Link: [https://github.com/dharshan29/social-media](https://github.com/dharshan29/social-media)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

- [Material UI](https://mui.com/)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [GitHub Readme.md Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[materialui.com]: https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png
[materialui-url]: https://mui.com/
