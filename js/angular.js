// sample angular code

var app = angular.module('myApp', []);

app.controller('myController', function($scope) {
  $scope.greeting = "Hello World!";
  $scope.guess = 0;
  $scope.computerNum = computerNumber();
  $scope.win = false;
  $scope.lose = false;
  $scope.message = '';
  $scope.guessNumber = 0;
  $scope.done = false;

  $scope.checkWin = function(){
    $scope.guessNumber ++;
    if($scope.guess === $scope.computerNum){
      $scope.win = true;
      $scope.done = true;
      $scope.lose = false;
      $scope.message = 'Well done. You\'re still adopted though. Sorry you had to find out this way.';
    } else if($scope.guess > $scope.computerNum) {
      $scope.lose = true;
      $scope.message = 'Too High';
    } else if ($scope.guess < $scope.computerNum){
      $scope.lose = true;
      $scope.message = 'Too Low';
    }
  };

  $scope.giveUp = function(){
    $scope.done = true;
  };

  $scope.reset = function(){
    $scope.guess = 0;
    $scope.computerNum = computerNumber();
    $scope.win = false;
    $scope.done = false;
    $scope.lose = false;
    $scope.message = '';
    $scope.guessNumber = 0;
  };

});

function computerNumber(){
  var computerNum = Math.ceil(Math.random()*100);
  return computerNum;
}

function checkWin(guess, computerNum){
  if (guess === computerNum){
    $scope.playerWin = true;
  }
}
