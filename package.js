Package.describe({
  name: 'steeve:bootstrap3-formfield-helpers',
  summary: 'a meteor package for generating bootstrap 3 form fields',
  version: '0.0.2',
  git: 'https://github.com/stephentcannon/bootstrap3-formfield-helpers.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use([
    'templating',
    ], 'client');
  api.addFiles('steeve:bootstrap3-formfield-helpers.js', 'client');
});
