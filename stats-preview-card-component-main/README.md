# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

- [The challenge](#the-challenge)

- [Screenshot](#screenshot)

- [Links](#links)

- [My process](#my-process)

- [Built with](#built-with)

- [What I learned](#what-i-learned)

- [Continued development](#continued-development)

- [Useful resources](#useful-resources)

- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![Image](images\screeenshot.png)

### Links

- Solution URL: [GitHub repo](https://github.com/idKrazu/frontend-mentor-challenges/tree/main/stats-preview-card-component-main)

- Live Site URL: [idkrazu-stats-card.netlify.app](https://idkrazu-stats-card.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup

- CSS custom properties

- Flexbox

- Sass

- Mobile-first workflow

### What I learned

I learned how to easily make mixin in SCSS that is reusable in my code and allow me to make responsive site faster.

```scss
$desktop: 1200px;

@mixin desktop {
  @media (min-width: #{$desktop}) {
    @content;
  }
}

main {
  width: 90%;

  @include desktop {
    width: 1200px;
    flex-direction: row;
  }
}
```

### Continued development

In future projects I want to focus on better organizing my SCSS code and files.

### Useful resources

- [Learn Sass in this Free Crash Course by DesignCourse](https://youtu.be/roywYSEPSvc) - This helped me with creating mixin for media query. It made making responsive design easier.

- [A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Guide to CSS flexbox layout.

## Author

- Twitter - [@idKrazu](https://twitter.com/idKrazu)
- GitHub - [idKrazu](https://github.com/idKrazu)
