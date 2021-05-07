#Photo Search Engine 

Photo Search is a tool used to find pictures by entering a key word in the search field.
<!-- 
Deployed site: https://acai128.github.io/image-search/ -->


## Technologies 
* JavaScript 
* ReactJS
* HTML
* CSS 
* Pixabay API 

## Features

User enters key word in search field and click "Search" button to get results of pictures 

<!-- ![](recording(1).gif) -->

User can upload their picture

## Installation

* Clone the repo to your local machine: 
```bash
https://github.com/acai128/image-search.git
```
* Sign up to use the [Pixabay API](https://pixabay.com/service/about/api/)
* Save your API key in a .env file in the root of your project directory using this format in the file: 

```bash
REACT_APP_API_KEY=[enter your API key here]
//Example: REACT_APP_API_KEY=123456
```
* Add .env file to your .gitignore file 

* Access the API key via the process.env object in the SearchForm.js file: 

```bash
//Example: process.env.REACT_APP_API_KEY
```
* Install the project's dependencies 

```bash
npm install 
```
* Run React Server 

```bash
npm start 
```

