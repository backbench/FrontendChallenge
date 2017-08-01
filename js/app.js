//create angular module
var myApp = angular.module("newsPortal", ['ngRoute', 'ngSanitize']);

//main controller starts here
myApp.controller("mainController", function($scope, $http, $location, $rootScope, $route, $q) {
    $scope.topStories=[14874830, 14858558, 14855769, 14864567, 14869564, 14858548, 14861142, 14875056, 14874395, 14858303,14859445, 14861224, 14868890, 14859840, 14858842, 14859660, 14866255, 14856720, 14865249, 14855406];//array for 10 id to show dummy data
    
    
    // $http.get("https://hacker-news.firebaseio.com/v0/newstories.json").then(function(data, status) {
    //     $scope.parentData = data.data;
$scope.stories=[];
       
            $scope.topStories.forEach(function (data,i) {
                $http.get("https://hacker-news.firebaseio.com/v0/item/"+data+".json").then(function(response) {
                            $scope.stories.push(response);
                            $scope.time=new Date($scope.stories[i].data.time).toDateString();
                })
            })
    $scope.topStory=function(){
        $location.path('/');
    }
    $scope.bestStory=function(){
        $location.path('/bestStories');
    }
    $scope.newStory=function(){
        $location.path('/newStories');
    }
    $scope.Ask=function(){
        $location.path('/askStories');
    }
    $scope.job=function(){
        $location.path('/jobs');
    }
    $scope.show=function(){
        $location.path('/showStories');
    }
});
//main controller ends here
myApp.controller("newStoriesCtrl",function($scope, $http, $location, $rootScope, $route){
    $scope.newStories=[14875677, 14875637, 14875635, 14875633, 14875607, 14875604, 14875597, 14875596, 14875595, 14875580,14885964, 14885957, 14885933, 14885926, 14885918, 14885914, 14885891, 14885889, 14885870, 14885863];
    $scope.stories=[];
    $scope.newStories.forEach(function(data,i){
                $http.get("https://hacker-news.firebaseio.com/v0/item/"+data+".json").then(function(response) {
                            $scope.stories.push(response);
                            $scope.time=new Date($scope.stories[i].data.time).toDateString();
                })
    })
});
myApp.controller("bestStoriesCtrl",function($scope, $http, $location, $rootScope, $route){
    $scope.bestStories=[14870550, 14865365, 14881748, 14881448, 14876685, 14870642, 14865380, 14863682, 14856361, 14885503, 14884451, 14880320, 14878312, 14871239, 14862685, 14857218, 14883904, 14881818, 14870114, 14861770];
    $scope.stories=[];
    $scope.bestStories.forEach(function(data,i){
                $http.get("https://hacker-news.firebaseio.com/v0/item/"+data+".json").then(function(response) {
                            $scope.stories.push(response);
                            $scope.time=new Date($scope.stories[i].data.time).toDateString();
                })
    })
});
myApp.controller("askCtrl",function($scope, $http, $location, $rootScope, $route){
    $scope.ask=[14862654, 14871258, 14869940, 14868146, 14867733, 14867440, 14865622, 14865170, 14864504, 14859860, 14857356, 14855483, 14878137, 14865339, 14856754, 14864197, 14859274, 14860849, 14858558, 14877016];
    $scope.stories=[];
    $scope.ask.forEach(function(data,i){
                $http.get("https://hacker-news.firebaseio.com/v0/item/"+data+".json").then(function(response) {
                            $scope.stories.push(response);
                            $scope.time=new Date($scope.stories[i].data.time).toDateString();
                            $scope.text=response.data.text;
                })
    })
});
myApp.controller("jobCtrl",function($scope, $http, $location, $rootScope, $route){
    $scope.job=[14893797, 14891265, 14889901, 14888916, 14886559, 14881008, 14878726, 14877548, 14875999, 14874025, 14870260, 14867950, 14861960, 14860231, 14857937 ];
    $scope.stories=[];
    $scope.job.forEach(function(data,i){
                $http.get("https://hacker-news.firebaseio.com/v0/item/"+data+".json").then(function(response) {
                            $scope.stories.push(response);
                            $scope.time=new Date($scope.stories[i].data.time).toDateString();
                            $scope.text=response.data.text;
                })
    })
});
myApp.controller("showCtrl",function($scope, $http, $location, $rootScope, $route){
    $scope.show=[14874713, 14873934, 14861113, 14857978, 14869305, 14868844, 14866600, 14866438, 14865650, 14864027, 14862463, 14876964, 14859160, 14857265, 14875214, 14875013, 14873929 ];
    $scope.stories=[];
    $scope.show.forEach(function(data,i){
                $http.get("https://hacker-news.firebaseio.com/v0/item/"+data+".json").then(function(response) {
                            $scope.stories.push(response);
                            $scope.time=new Date($scope.stories[i].data.time).toDateString();
                            $scope.text=response.data.text;
                })
    })
});