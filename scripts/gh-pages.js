var ghpages = require('gh-pages');
var fs = require('fs');

fs.writeFileSync('__sapper__/export/404.html', `<script>
    sessionStorage.redirect = location.href;
</script>
<meta http-equiv="refresh" content="0;URL='/'"></meta>`, { encoding: "utf8" });

var index = fs.readFileSync('__sapper__/export/index.html', 'utf8');
var fixed = index.replace('<head>', `<head><script>
(function(){
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect != location.href) {
    history.replaceState(null, null, redirect);
  }
})();
</script>`);
fs.writeFileSync('__sapper__/export/index.html', fixed, { encoding: "utf8" });

ghpages.publish('__sapper__/export', {
    branch: 'gh-pages',
    repo: 'https://github.com/SkeldJS/skeldjs.github.iogit',
    user: {
        name: 'Edward Smale',
        email: 'essmale2005@gmail.com'
    }
}, () => {
    console.log('Deploy Complete!')
});