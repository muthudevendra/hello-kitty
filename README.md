# HelloKitty

This repo uses Cat as a Service (https://cataas.com) to combine two images of cats and save one image in the root folder.

This contains the modification to a exisitng code base which can be found in `legacy.js`, modifications are done using minimum effor as requested, therfore no tests are written. Some of the libraries used in legacy system is changed due to deprication and licence issues.

## Installation

```
git clone git@github.com:muthudevendra/hello-kitty.git
cd hello-kitty
npm install
node index.js --greeting FirstMessage --who SecondMessage
```

## Parameters can send to create the image

- `greeting`: Message to be shown in the first image (Deafult is Hello)
- `who`: Message to be shown in the second image (Deafult is You)
- `width`: width of the images (Deafult is 400)
- `height`: width of the images (Deafult is 500)
- `color`: Color of the text message (Deafult is pink)
- `size`: Size of the text message (Deafult is 100)

## Used libraries

- `merge-img: ^2.1.3`: Merge the images
- `minimist: ^1.2.5` : Argument parser
- `node-fetch: ^2.6.1` : window.fetch for nodejs
