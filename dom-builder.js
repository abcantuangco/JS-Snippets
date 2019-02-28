const domBuilder = (function() {

    const build = ( options ) => {
        let settings = {
            element: null,
            dom: null,
            data: null,
            buildType: 'html',
            returnView: false
        };

        if ( typeof options !== 'undefined' )
            Object.assign( settings, options );

        return buildView( settings );

    };

    const buildView = ( options ) => new Promise((resolve, reject) => {
        
        if ( options.returnView === false ) {
            var $element = document.querySelector( options.element );
        }
        
        let $view = typeof options.dom === 'function' ? options.dom( options.data ) : false;

        if (!$view)
            throw new Error('DOM isn\'t available.');

        switch ( options.buildType ) {
            case 'html':
            {
                if ( options.returnView === false ) 
                    $element.innerHTML = $view;
            }
            break;
            case 'append':
            {
                if ( options.returnView === false ) 
                    $element.innerHTML += $view;
            }
            break;
        }

        resolve($view);
    });

    return {
        build: (o) => {
            return build(o);
        }
    };
});


var test = new domBuilder();

var data = { 'test': 'value' };

var dom = function( data ) {
    return '<div>'+ data.test +'</div>';
}

test.build({
    element: '#test',
    dom: false,
    data: data,
    buildType: 'append',
    returnView: false
})
.then((v) => {
    console.log('test', v);
})
.catch((e) => {
    console.log(e.message);
});

