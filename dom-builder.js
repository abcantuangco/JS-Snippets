
const domBuilder = ( options ) => new Promise((resolve, reject) => {

    const _build = ( options ) => {
        let settings = {
            element: null,
            dom: null,
            data: null,
            buildType: 'html'
        };

        if ( typeof options !== 'undefined' )
            Object.assign( settings, options );

        return _buildView( settings );

    };

    const _buildView = ( options ) => new Promise((resolve, reject) => {
        let $element = document.querySelector( options.element );
        let $view = typeof options.dom === 'function' ? options.dom( options.data ) : false;

        if (!$view)
            throw new Error('DOM isn\'t available.');

        switch ( options.buildType ) {
            case 'html':
            {
                return new Promise((resolve, reject) => {
                            $element.innerHTML = $view;
                            resolve($view);
                        });
            }
            break;
            case 'append':
            {
                return new Promise((resolve, reject) => {
                            $element.innerHTML += $view;
                            resolve($view);
                        });
            }
            break;
        }
    });

    return {
        build: build
    };
});
