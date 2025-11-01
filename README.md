# image-carousel

A lightweight, reusable image carousel built with vanilla JavaScript.

## Installation

npm install image-carousel

## Usage

Add the following HTML where you want your carousel to appear:

<div class="carousel">
  <div class="slides">
    <img src="https://picsum.photos/id/1018/600/400" class="slide active" />
    <img src="https://picsum.photos/id/1015/600/400" class="slide" />
    <img src="https://picsum.photos/id/1019/600/400" class="slide" />
  </div>

<button class="prev">❮</button>
<button class="next">❯</button>

  <div class="dots">
    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
  </div>
</div>

Import and initialize the carousel in your JavaScript:

import { initCarousel } from "image-carousel";
import "image-carousel/dist/styles.css"; // optional: default styles

initCarousel();

## Custom Styling

You can override the default CSS:

.carousel { /_ container for slides _/ }
.slides { /_ wrapper for images _/ }
.slide { /_ individual images _/ }
.prev, .next { /_ navigation arrows _/ }
.dots { /_ container for navigation dots _/ }
.dot { /_ individual dots _/ }

## Local Development

To run the project locally:

npm install
npm run start

Webpack Dev Server will serve `demo.html` and watch for changes.

For a production build:

npm run build

This generates the bundled files in `dist/`.
