'use strict';/**
 * @module
 * @description
 * Maps application URLs into application states, to support deep-linking and navigation.
 */
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var router_1 = require('./src/router/router');
exports.Router = router_1.Router;
var router_outlet_1 = require('./src/router/directives/router_outlet');
exports.RouterOutlet = router_outlet_1.RouterOutlet;
var router_link_1 = require('./src/router/directives/router_link');
exports.RouterLink = router_link_1.RouterLink;
var instruction_1 = require('./src/router/instruction');
exports.RouteParams = instruction_1.RouteParams;
exports.RouteData = instruction_1.RouteData;
var platform_location_1 = require('./src/router/location/platform_location');
exports.PlatformLocation = platform_location_1.PlatformLocation;
var route_registry_1 = require('./src/router/route_registry');
exports.RouteRegistry = route_registry_1.RouteRegistry;
exports.ROUTER_PRIMARY_COMPONENT = route_registry_1.ROUTER_PRIMARY_COMPONENT;
var location_strategy_1 = require('./src/router/location/location_strategy');
exports.LocationStrategy = location_strategy_1.LocationStrategy;
exports.APP_BASE_HREF = location_strategy_1.APP_BASE_HREF;
var hash_location_strategy_1 = require('./src/router/location/hash_location_strategy');
exports.HashLocationStrategy = hash_location_strategy_1.HashLocationStrategy;
var path_location_strategy_1 = require('./src/router/location/path_location_strategy');
exports.PathLocationStrategy = path_location_strategy_1.PathLocationStrategy;
var location_1 = require('./src/router/location/location');
exports.Location = location_1.Location;
__export(require('./src/router/route_config/route_config_decorator'));
__export(require('./src/router/route_definition'));
var lifecycle_annotations_1 = require('./src/router/lifecycle/lifecycle_annotations');
exports.CanActivate = lifecycle_annotations_1.CanActivate;
var instruction_2 = require('./src/router/instruction');
exports.Instruction = instruction_2.Instruction;
exports.ComponentInstruction = instruction_2.ComponentInstruction;
var core_1 = require('angular2/core');
exports.OpaqueToken = core_1.OpaqueToken;
var router_providers_common_1 = require('angular2/src/router/router_providers_common');
exports.ROUTER_PROVIDERS_COMMON = router_providers_common_1.ROUTER_PROVIDERS_COMMON;
var router_providers_1 = require('angular2/src/router/router_providers');
exports.ROUTER_PROVIDERS = router_providers_1.ROUTER_PROVIDERS;
exports.ROUTER_BINDINGS = router_providers_1.ROUTER_BINDINGS;
var router_outlet_2 = require('./src/router/directives/router_outlet');
var router_link_2 = require('./src/router/directives/router_link');
var lang_1 = require('./src/facade/lang');
/**
 * A list of directives. To use the router directives like {@link RouterOutlet} and
 * {@link RouterLink}, add this to your `directives` array in the {@link View} decorator of your
 * component.
 *
 * ### Example ([live demo](http://plnkr.co/edit/iRUP8B5OUbxCWQ3AcIDm))
 *
 * ```
 * import {Component} from 'angular2/core';
 * import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS, RouteConfig} from 'angular2/router';
 *
 * @Component({directives: [ROUTER_DIRECTIVES]})
 * @RouteConfig([
 *  {...},
 * ])
 * class AppCmp {
 *    // ...
 * }
 *
 * bootstrap(AppCmp, [ROUTER_PROVIDERS]);
 * ```
 */
exports.ROUTER_DIRECTIVES = lang_1.CONST_EXPR([router_outlet_2.RouterOutlet, router_link_2.RouterLink]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYW5ndWxhcjIvcm91dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7Ozs7QUFFSCx1QkFBcUIscUJBQXFCLENBQUM7QUFBbkMsaUNBQW1DO0FBQzNDLDhCQUEyQix1Q0FBdUMsQ0FBQztBQUEzRCxvREFBMkQ7QUFDbkUsNEJBQXlCLHFDQUFxQyxDQUFDO0FBQXZELDhDQUF1RDtBQUMvRCw0QkFBcUMsMEJBQTBCLENBQUM7QUFBeEQsZ0RBQVc7QUFBRSw0Q0FBMkM7QUFDaEUsa0NBQStCLHlDQUF5QyxDQUFDO0FBQWpFLGdFQUFpRTtBQUN6RSwrQkFBc0QsNkJBQTZCLENBQUM7QUFBNUUsdURBQWE7QUFBRSw2RUFBNkQ7QUFDcEYsa0NBQThDLHlDQUF5QyxDQUFDO0FBQWhGLGdFQUFnQjtBQUFFLDBEQUE4RDtBQUN4Rix1Q0FBbUMsOENBQThDLENBQUM7QUFBMUUsNkVBQTBFO0FBQ2xGLHVDQUFtQyw4Q0FBOEMsQ0FBQztBQUExRSw2RUFBMEU7QUFDbEYseUJBQXVCLGdDQUFnQyxDQUFDO0FBQWhELHVDQUFnRDtBQUN4RCxpQkFBYyxrREFBa0QsQ0FBQyxFQUFBO0FBQ2pFLGlCQUFjLCtCQUErQixDQUFDLEVBQUE7QUFFOUMsc0NBQTBCLDhDQUE4QyxDQUFDO0FBQWpFLDBEQUFpRTtBQUN6RSw0QkFBZ0QsMEJBQTBCLENBQUM7QUFBbkUsZ0RBQVc7QUFBRSxrRUFBc0Q7QUFDM0UscUJBQTBCLGVBQWUsQ0FBQztBQUFsQyx5Q0FBa0M7QUFDMUMsd0NBQXNDLDZDQUE2QyxDQUFDO0FBQTVFLG9GQUE0RTtBQUNwRixpQ0FBZ0Qsc0NBQXNDLENBQUM7QUFBL0UsK0RBQWdCO0FBQUUsNkRBQTZEO0FBRXZGLDhCQUEyQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQ25FLDRCQUF5QixxQ0FBcUMsQ0FBQyxDQUFBO0FBQy9ELHFCQUF5QixtQkFBbUIsQ0FBQyxDQUFBO0FBRTdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFDVSx5QkFBaUIsR0FBVSxpQkFBVSxDQUFDLENBQUMsNEJBQVksRUFBRSx3QkFBVSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQG1vZHVsZVxuICogQGRlc2NyaXB0aW9uXG4gKiBNYXBzIGFwcGxpY2F0aW9uIFVSTHMgaW50byBhcHBsaWNhdGlvbiBzdGF0ZXMsIHRvIHN1cHBvcnQgZGVlcC1saW5raW5nIGFuZCBuYXZpZ2F0aW9uLlxuICovXG5cbmV4cG9ydCB7Um91dGVyfSBmcm9tICcuL3NyYy9yb3V0ZXIvcm91dGVyJztcbmV4cG9ydCB7Um91dGVyT3V0bGV0fSBmcm9tICcuL3NyYy9yb3V0ZXIvZGlyZWN0aXZlcy9yb3V0ZXJfb3V0bGV0JztcbmV4cG9ydCB7Um91dGVyTGlua30gZnJvbSAnLi9zcmMvcm91dGVyL2RpcmVjdGl2ZXMvcm91dGVyX2xpbmsnO1xuZXhwb3J0IHtSb3V0ZVBhcmFtcywgUm91dGVEYXRhfSBmcm9tICcuL3NyYy9yb3V0ZXIvaW5zdHJ1Y3Rpb24nO1xuZXhwb3J0IHtQbGF0Zm9ybUxvY2F0aW9ufSBmcm9tICcuL3NyYy9yb3V0ZXIvbG9jYXRpb24vcGxhdGZvcm1fbG9jYXRpb24nO1xuZXhwb3J0IHtSb3V0ZVJlZ2lzdHJ5LCBST1VURVJfUFJJTUFSWV9DT01QT05FTlR9IGZyb20gJy4vc3JjL3JvdXRlci9yb3V0ZV9yZWdpc3RyeSc7XG5leHBvcnQge0xvY2F0aW9uU3RyYXRlZ3ksIEFQUF9CQVNFX0hSRUZ9IGZyb20gJy4vc3JjL3JvdXRlci9sb2NhdGlvbi9sb2NhdGlvbl9zdHJhdGVneSc7XG5leHBvcnQge0hhc2hMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICcuL3NyYy9yb3V0ZXIvbG9jYXRpb24vaGFzaF9sb2NhdGlvbl9zdHJhdGVneSc7XG5leHBvcnQge1BhdGhMb2NhdGlvblN0cmF0ZWd5fSBmcm9tICcuL3NyYy9yb3V0ZXIvbG9jYXRpb24vcGF0aF9sb2NhdGlvbl9zdHJhdGVneSc7XG5leHBvcnQge0xvY2F0aW9ufSBmcm9tICcuL3NyYy9yb3V0ZXIvbG9jYXRpb24vbG9jYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnLi9zcmMvcm91dGVyL3JvdXRlX2NvbmZpZy9yb3V0ZV9jb25maWdfZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL3JvdXRlci9yb3V0ZV9kZWZpbml0aW9uJztcbmV4cG9ydCB7T25BY3RpdmF0ZSwgT25EZWFjdGl2YXRlLCBPblJldXNlLCBDYW5EZWFjdGl2YXRlLCBDYW5SZXVzZX0gZnJvbSAnLi9zcmMvcm91dGVyL2ludGVyZmFjZXMnO1xuZXhwb3J0IHtDYW5BY3RpdmF0ZX0gZnJvbSAnLi9zcmMvcm91dGVyL2xpZmVjeWNsZS9saWZlY3ljbGVfYW5ub3RhdGlvbnMnO1xuZXhwb3J0IHtJbnN0cnVjdGlvbiwgQ29tcG9uZW50SW5zdHJ1Y3Rpb259IGZyb20gJy4vc3JjL3JvdXRlci9pbnN0cnVjdGlvbic7XG5leHBvcnQge09wYXF1ZVRva2VufSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmV4cG9ydCB7Uk9VVEVSX1BST1ZJREVSU19DT01NT059IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVyX3Byb3ZpZGVyc19jb21tb24nO1xuZXhwb3J0IHtST1VURVJfUFJPVklERVJTLCBST1VURVJfQklORElOR1N9IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVyX3Byb3ZpZGVycyc7XG5cbmltcG9ydCB7Um91dGVyT3V0bGV0fSBmcm9tICcuL3NyYy9yb3V0ZXIvZGlyZWN0aXZlcy9yb3V0ZXJfb3V0bGV0JztcbmltcG9ydCB7Um91dGVyTGlua30gZnJvbSAnLi9zcmMvcm91dGVyL2RpcmVjdGl2ZXMvcm91dGVyX2xpbmsnO1xuaW1wb3J0IHtDT05TVF9FWFBSfSBmcm9tICcuL3NyYy9mYWNhZGUvbGFuZyc7XG5cbi8qKlxuICogQSBsaXN0IG9mIGRpcmVjdGl2ZXMuIFRvIHVzZSB0aGUgcm91dGVyIGRpcmVjdGl2ZXMgbGlrZSB7QGxpbmsgUm91dGVyT3V0bGV0fSBhbmRcbiAqIHtAbGluayBSb3V0ZXJMaW5rfSwgYWRkIHRoaXMgdG8geW91ciBgZGlyZWN0aXZlc2AgYXJyYXkgaW4gdGhlIHtAbGluayBWaWV3fSBkZWNvcmF0b3Igb2YgeW91clxuICogY29tcG9uZW50LlxuICpcbiAqICMjIyBFeGFtcGxlIChbbGl2ZSBkZW1vXShodHRwOi8vcGxua3IuY28vZWRpdC9pUlVQOEI1T1VieENXUTNBY0lEbSkpXG4gKlxuICogYGBgXG4gKiBpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG4gKiBpbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTLCBST1VURVJfUFJPVklERVJTLCBSb3V0ZUNvbmZpZ30gZnJvbSAnYW5ndWxhcjIvcm91dGVyJztcbiAqXG4gKiBAQ29tcG9uZW50KHtkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdfSlcbiAqIEBSb3V0ZUNvbmZpZyhbXG4gKiAgey4uLn0sXG4gKiBdKVxuICogY2xhc3MgQXBwQ21wIHtcbiAqICAgIC8vIC4uLlxuICogfVxuICpcbiAqIGJvb3RzdHJhcChBcHBDbXAsIFtST1VURVJfUFJPVklERVJTXSk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IFJPVVRFUl9ESVJFQ1RJVkVTOiBhbnlbXSA9IENPTlNUX0VYUFIoW1JvdXRlck91dGxldCwgUm91dGVyTGlua10pO1xuIl19