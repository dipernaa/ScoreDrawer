angular.module('myApp').controller('GolfCtrl', function($scope) {



    $scope.players = [];

    $scope.addPlayer = function() {
        if($scope.playerName.length > 0) {
            $scope.players.push({
                name: $scope.playerName,
                first: 0,
                second: 0,
                third: 0,
                fourth: 0,
                fifth: 0,
                sixth: 0,
                seventh: 0,
                eighth: 0,
                ninth: 0,
                tenth: 0,
                eleventh: 0,
                twelfth: 0,
                thirteenth: 0,
                fourteenth: 0,
                fifteenth: 0,
                sixteenth: 0,
                seventeenth: 0,
                eighteenth: 0,
                total: 0
            });
            $scope.playerName = '';
        }
    }

    $scope.show = function() {
        console.log($scope.players[0]);
    }
})