import {bootstrap}        from 'angular2/platform/browser';
import {ROUTER_PROVIDERS,APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';

import {AppComponent}     from './app.component';
import {provide}    from "angular2/core";



bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    // usually
    //provide(APP_BASE_HREF, {useValue: '/'})
    provide(LocationStrategy,
        {useClass: HashLocationStrategy}) // .../#/crisis-center/
    // for Plunker
    // bind(APP_BASE_HREF).toValue(location.pathname)
]);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/