myApp.directive("headDirective", function() {
    return {
        templateUrl: "partials/header.html"
    };
});
myApp.directive("footerDirective", function() {
    return {
        templateUrl: "partials/footer.html"
    };
});
myApp.directive("navBar", function() {
    return {
        templateUrl: "partials/leftNavBar.html"
    };
});
