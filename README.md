JQuery Cropper for Meteor
==============

Fengyuan Chen's terrific [Cropper](https://github.com/fengyuanchen/cropper) jQuery plugin for cropping/zooming/rotating/exporting images, packaged for [Meteor](https://www.meteor.com/)

## Installation

    meteor add jonblum:jquery-cropper

## Demos and Docs

http://fengyuanchen.github.io/cropper/

## FAQ

### I'm instantiating Cropper on the fly (say, in a Bootstrap modal's show event), but it doesn't seem to 'pick up' the image I've set dynamically.

In the meantime, you can get around this by explictly setting the image's source before loading the cropper: 

```javascript
$('.img-to-crop').attr("src",Session.get('myImg'));
$('.img-to-crop').cropper({ ...
````
