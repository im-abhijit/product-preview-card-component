# product-preview-card-component
Solution to front end mentor challenge : [Product preview card component](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa)

## Table of contents

- [Frontend Mentor - Product preview card component solution](#frontend-mentor---product-preview-card-component-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Useful resources](#useful-resources)
  - [Author](#author)

### The Challenge 
  design a responsive product card component which uses different size images for different screen size , refer below screenshots to get an idea how it should look like in mobile and desktop

![](screenshot/desktop-design.jpg)
![](screenshot/mobile-design.jpg)

### Links

- Solution URL: [Solution](https://github.com/im-abhijit/product-preview-card-component)
- Live Site URL: [Live](https://productpreview-card-component.netlify.app/)

## My Process

### Built with
- Tailwind css
- Flex box

### What i learned

You can use different size of images for different size of screens using HTML picture tag, for example

```html
          <picture>
            <source srcset="/src/assets/image-product-mobile.jpg"
                    media="(max-width: 767px)">
            <source srcset="/src/assets/image-product-desktop.jpg"
                    media="(max-width: 800px)">
            <img src="/src/assets/image-product-desktop.jpg" class=" md:h-[400px] object-contain md:w-[268px] "/>
          </picture> 
```
### Useful resources

- [Tailwind docs](https://tailwindcss.com/docs/installation)
- [Flex box](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Visual code extension for tailwind](https://tailwindcss.com/docs/editor-setup) : if you are using visual code and tailwind install this extension and you will never need to go to google looking for available classes in tailwind

## Author

- Twitter : [@Ab_Shankhdhar](https://twitter.com/Ab_Shankhdhar)
