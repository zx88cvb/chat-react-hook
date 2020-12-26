import { createGlobalStyle } from 'styled-components';

const BaseStyle = {
  "theme-color": "#fdfbfb",
  "theme-color-dark": "#222831",
  "theme-color-primary": "#448EF6",
  "theme-color-primary-dark": "#007bff",
  "theme-color-shadow": "rgba(212, 68, 57, .5)",
  "font-color-light": "#222831",
  "font-color-light-hover": "#007bff",
  "font-color-light-shadow": "rgba(241, 241, 241, 0.6)",//略淡
  "font-color-desc": "#393e46",
  "font-color-desc-dark": "#B1B1C1", //略淡
  "font-size-ss": "10px",
  "font-size-s": "12px",
  "font-size-m": "14px",
  "font-size-l": "16px",
  "font-size-ll": "18px",
  "border-color": "#e4e4e4",
  "border-color-v2": "rgba(228, 228, 228, 0.1)",
  "background-color": "#f2f3f4",
  "background-color-shadow": "rgba(0, 0, 0, 0.3)",
  "highlight-background-color": "#fff",
};

export const CommonStyle = createGlobalStyle`
  body, input, button, select, optgroup, option, textarea, blockquote, dd, dl, figure, form, pre, .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.5;
  }
  /* html {
    scroll-behavior: smooth;
  } */
  body {
    background-image: url('/pexels-vlad-chețan-3018819.jpg');
    background-size: 1920px 1080px;
    background-repeat: no-repeat;
  }
  small {
    font-size: 80%;
    font-weight: 400;
  }
  
  /* iconfont */
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }
  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }
  @media (max-width: 768px) {
    .container {
      padding-right: 0.625rem;
      padding-left: 0.625rem;
    }
  }
  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    /* margin-right: -15px;
    margin-left: -15px; */
  }
  @media (max-width: 767.98px) {
    .row {
      margin-right: -0.625rem;
      margin-left: -0.625rem;
    }
  }
  .row-sm {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    .col {
      padding: 0 1rem;
    }
  }
  .col {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
  
  .flex-fill {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.66);
    position: absolute;
    opacity: .22;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease-in-out;
  }
`