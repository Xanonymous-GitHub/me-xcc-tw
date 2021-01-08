# Works!

<p align="center">
  <a href="https://me.xcc.tw" target="_blank">
    <img alt="Logo" width="200" src="https://raw.githubusercontent.com/Xanonymous-GitHub/me-xcc-tw/main/src/svg/todo.svg?token=ALMCETICYCWMXRYWEJNJG3C773UB4">
  </a>
</p>

<p align="center">
Works! is a Simple To-do list website. 
</p>

### Used library

- Bootstrap 5.x
- Firebase SDK 8.x

### How to get source code and run it on own device

1. Clone this repo from Github.
2. Install node v14+ on your device.
3. In the root of project folder, run `npm install`.
    - if you meet some error on this step, try to add `--force` after previous command and run again.
    
4. run `npm run serve`, and you may see the website serve on http://localhost:8080 (port number may different).

### How to just download this website

- [Click here for download.](https://github.com/Xanonymous-GitHub/me-xcc-tw/archive/gh-pages.zip)
- After downloaded and unzipped, you need to use some server-like program to host all files and make `index.html` as the entrypoint.
- [vscode live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) may be one of a nice choice for hosting.

### Introduction
Based on the original requirements, this webpage has added many features and details to make it more practical and gorgeous.

First, I implemented the upload function of the thumbnails, and sent the thumbnails to imgur.com by calling the self-made backend api.

Before uploading pictures, you can preview them in advance. When creating a job, the new picture links will be integrated into the data package.

Furthermore, in order to improve the efficiency of web page loading, all the image formats on the homepage are webp and lazy-load.

In addition, the work-view block on the homepage has the feature of real-time update, which can be synchronized to the latest information at any time.

### Author
- Xanonymous™ TeU Lin 林天佑 108820003

