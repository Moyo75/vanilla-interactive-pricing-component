# Pricing Component

A cool responsive pricing component using <img style="width: 22px; margin-bottom: -6px" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png">.

## Overview

This is a project suggestion from [Frontend Mentors](https://www.frontendmentor.io/) like a few others I've done. I tried it out to see how to work with the slider and also style it, Yeah, nothing crazy 😁. It took just over two weeks til completion.

It was cool styling the slider and connecting it to the page views count and pricing rate. Responsiveness was also nice as usual.

(https://vanilla-interactive-pricing-component-git-master-moyo75.vercel.app/)

## Motivation

Build a dynamic pricing component to show the following:

- my frontend skill set
- my web development interest

## Technologies Used

- HTML
- CSS
- SCSS
- Git
- GitHub

## Folder Structure

    |-📁app
      |-📁js
      |-📁sass
    |-📁dist
    |-📁images
    |-📃.gitignore
    |-📃README.md
    |-📃README-template.md
    |-📃index.html

## Approach

I started with the fucntionality first, hooking up the slider with the page views count and pricing rate according to the project description. Then I styled the component mobile-first. For the logic, I collected the page views and pricing in an array and made the min and max values of the slider 1 and 100 respectively. Then I wrote a utility function that returns 1, 2, 3, 4 or 5 based on the slider values. For the page views, I passed the return value into the pricing array to get the price itself and also the same for the pricing with slight decimal modifications.

## Thanks

Thanks for reading this far. 🎉
