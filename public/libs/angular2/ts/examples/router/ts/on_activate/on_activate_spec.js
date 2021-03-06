System.register(['angular2/src/testing/e2e_util'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var e2e_util_1;
    function waitForElement(selector) {
        var EC = protractor.ExpectedConditions;
        // Waits for the element with id 'abc' to be present on the dom.
        browser.wait(EC.presenceOf($(selector)), 20000);
    }
    return {
        setters:[
            function (e2e_util_1_1) {
                e2e_util_1 = e2e_util_1_1;
            }],
        execute: function() {
            describe('on activate example app', function () {
                afterEach(e2e_util_1.verifyNoBrowserErrors);
                var URL = 'angular2/examples/router/ts/on_activate/';
                it('should update the text when navigating between routes', function () {
                    browser.get(URL);
                    waitForElement('my-cmp');
                    expect(element(by.css('my-cmp')).getText())
                        .toContain('routerOnActivate: Finished navigating from "null" to ""');
                    element(by.css('#param-link')).click();
                    waitForElement('my-cmp');
                    expect(element(by.css('my-cmp')).getText())
                        .toContain('routerOnActivate: Finished navigating from "" to "1"');
                    browser.navigate().back();
                    waitForElement('my-cmp');
                    expect(element(by.css('my-cmp')).getText())
                        .toContain('routerOnActivate: Finished navigating from "1" to ""');
                });
            });
        }
    }
});
//# sourceMappingURL=on_activate_spec.js.map