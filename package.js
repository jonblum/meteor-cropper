Package.describe({
  name: "jonblum:jquery-cropper",
  summary: "Fengyuan Chen's terrific Cropper jQuery plugin, packaged for Meteor",
  version: "0.7.2",
  git: "https://github.com/jonblum/meteor-cropper"
});

Package.onUse(function (api) {
  api.versionsFrom('0.9.0');
  api.use('jquery', 'client');
  api.imply('jquery', 'client');
  api.addFiles([
    'cropper/src/cropper.js',
    'cropper/src/cropper.css'
  ], 'client'
  );
});
