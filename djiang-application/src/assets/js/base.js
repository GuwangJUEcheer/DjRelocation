(function(){
    riot.mixin({
        init: function() {
            this.on('mount', function() {
                this.base = this.refs_root();
                this.document_body_id = document.body.id
                this.update();
            })
            this.has_body_id = function(body_id, value) {
                if (this.document_body_id !== body_id) {
                    return false;
                }
                return value ? value : true;
            }
            this.level1 = function(level, value) {
                var level1 = location.pathname.replace(this.base, '').split('/')[1]
                if (level1 !== level) {
                    return false;
                }
                return value ? value : true;
            }
            this.level2 = function(level, value) {
                var level2 = location.pathname.replace(this.base, '').split('/')[2]
                if (level2 !== level) {
                    return false;
                }
                return value ? value : true;
            }
            this.level3 = function(level, value) {
                var level3 = location.pathname.replace(this.base, '').split('/')[3]
                if (level3 !== level) {
                    return false;
                }
                return value ? value : true;
            }
        },
        refs_root: function() {
            var tag_name = this.root.localName;
            var scripts = document.querySelector('script[src$="'+tag_name+'.tag"]');
            if (!scripts) {
                return '';
            }
            var match = scripts.src.match(new RegExp('(^|.*\/)'+tag_name+'\.tag$'));
            return match ? match[1].replace('/tags/', '').replace(window.location.origin, '') : '' /* default */;
        },
        observe: riot.observable()
    })
    riot.mount('*');

    //--------------------------------------------------------------------------
    // タグに対する`javascript`は基本的に`import.js`に記載する
    //--------------------------------------------------------------------------
    var scripts = document.querySelector('script[src$="base.js"]');
    var match = scripts.src.match(new RegExp('(^|.*\/)base\.js'));
    var path = match ? match[1].replace('/tags/', '').replace(window.location.origin, '') : '' /* default */;
    var script = document.createElement('script');
    // execute script after maunt.
    script.src = path+'/js/import.js';
    document.head.appendChild(script);
})();
