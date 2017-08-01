myApp.config(['$routeProvider', '$locationProvider', '$controllerProvider', function($routeProvider, $locationProvider, $controllerProvider) {
	$routeProvider.when('/',{
		templateUrl: 'partials/stories.html',
		controller: 'mainController'
	}).when('/newStories',{
        templateUrl:'partials/newStories.html',
        controller: 'newStoriesCtrl'
    }).when('/askStories',{
        templateUrl:'partials/ask.html',
        controller: 'askCtrl'
    }).when('/jobs',{
        templateUrl:'partials/Jobs.html',
        controller: 'jobCtrl'
    }).when('/showStories',{
        templateUrl:'partials/show.html',
        controller: 'showCtrl'
    }).when('/bestStories',{
        templateUrl:'partials/bestStory.html',
        controller: 'bestStoriesCtrl'
    }).otherwise({redirectTo:'/'});
}]);