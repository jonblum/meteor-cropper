JQuery Cropper for Meteor
==============

Fengyuan Chen's terrific [Cropper](https://github.com/fengyuanchen/cropper) jQuery plugin for cropping/zooming/rotating/exporting images, packaged for [Meteor](https://www.meteor.com/)

## Installation

    meteor add jonblum:jquery-cropper

## Demos and Docs

http://fengyuanchen.github.io/cropper/

## FAQ

### 0.9.0 broke my code!

Yeah, 0.9.0 removed the `getDataURL` method that you were probably using and replaced it with `getCroppedCanvas`, which returns a canvas object upon which you can then call `toDataURL` or `toBlob`.  One benefit of this more flexible approach is that you now don't need to construct a new canvas if, say,  you want to scale an image after the user crops it.  [See the docs](https://github.com/fengyuanchen/cropper#getcroppedcanvasoptions) for more details. 

### I'm instantiating Cropper on the fly (say, in a Bootstrap modal's show event), but it doesn't seem to 'pick up' the image I've set dynamically.

In the meantime, you can get around this by explictly setting the image's source before loading the cropper: 

```javascript
$('.img-to-crop').attr('src',Session.get('myImg'));
$('.img-to-crop').cropper({ ...
````
