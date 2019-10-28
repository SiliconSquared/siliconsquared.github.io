app.controller("gridderExample1Controller", function($scope, $http){
    $scope.tutorials = tutorials.data;
});

app.filter('myFilterTerm', function() {
    return function(champions, filterResults) {
        if (typeof filterResults.term == 'undefined' || filterResults.term == null) {
            return champions;
        } else {
            var output = [];
            angular.forEach(champions, function(champion) {
                if (champion.name.toLowerCase().indexOf(filterResults.term.toLowerCase()) > -1) {
                    output.push(champion)
                }
            });
        }
        return output;
    }
});

app.filter('myFilterTags', function() {
    return function(champions, filterResults) { 
        console.log();
        if (filterResults.typeSelection.length == 0 ) {
            return champions;
        }else{
            var output = [];     
            angular.forEach(champions, function(champion) {
                // TAGS
                var keepGoing = true;
                angular.forEach(champion.tags, function(tag) {
                    if(keepGoing) {
                        angular.forEach(filterResults.typeSelection, function(searchtag) {
                            if(tag === searchtag){
                                keepGoing = false;
                                output.push(champion);
                            }
                        });
                    }
                });
            });
        }
        return output;
    };
});

app.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});