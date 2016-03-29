JQuery Cropper for Meteor
==============

Fengyuan Chen's terrific [Cropper](https://github.com/fengyuanchen/cropper) jQuery plugin for cropping/zooming/rotating/exporting images, packaged for [Meteor](https://www.meteor.com/)

## DEPRECATED

With [the release of Meteor 1.3 and its direct support for npm](http://guide.meteor.com/1.3-migration.html), there's no longer a need for wrapper Atmosphere packages like this one &mdash; just run `meteor npm install --save cropper` to install Cropper directly and [import it into your file(s)](http://guide.meteor.com/using-packages.html#using-npm).  This package will remain on Atmosphere for the time being for legacy projects, but it won't be updated to newer versions of Cropper.

## Installation

    meteor add jonblum:jquery-cropper

## Demos and Docs

http://fengyuanchen.github.io/cropper/

## Breaking Changes

Full changelogs are [here](https://github.com/fengyuanchen/cropper/blob/master/CHANGELOG.md).

### 2.0.0

The following options were renamed:
* `touchDragZoom` to `zoomOnTouch`
* `mouseWheelZoom` to `zoomOnWheel`
* `doubleClickToggle` to `toggleDragModeOnDblclick`
* `checkImageOrigin` to `checkCrossOrigin`

The `strict` and `dragCrop` options were removed. The same functionality can be obtained with `viewMode: 1` and `dragMode: crop`, respectively.

### 1.0.0

None

### 0.11.0

The `dragstart`, `dragmove`, and `dragend` events were renamed to `cropstart`, `cropmove`, and `cropend`, respectively.

The `zoomin` and `zoomout` events were merged to a single `zoom` event.

The `crop` option and `change` event were merged intoa single `crop` event.

### 0.10.0

The `resizable` option was renamed to `cropBoxResizable`.

### 0.9.0

The `getDataURL` method was removed. See more below.

## FAQ

### 0.9.0 (and later) broke my code!

Yeah, 0.9.0 removed the `getDataURL` method that you were probably using and replaced it with `getCroppedCanvas`, which returns a canvas object upon which you can then call `toDataURL` or `toBlob`.  One benefit of this more flexible approach is that you now don't need to construct a new canvas if, say,  you want to scale an image after the user crops it.  [See the docs](https://github.com/fengyuanchen/cropper#getcroppedcanvasoptions) for more details.

### I'm instantiating Cropper on the fly (say, in a Bootstrap modal's show event), but it doesn't seem to 'pick up' the image I've set dynamically.

In the meantime, you can get around this by explictly setting the image's source before loading the cropper:

```javascript
$('.img-to-crop').attr('src',Session.get('myImg'));
$('.img-to-crop').cropper({ ...
```
