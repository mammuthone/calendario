angular.module('starter.controllers',[])

.controller('CalendarController', function($scope,  UtilsService, $translate, $ionicModal, $ionicPopup){
	$scope.calendar = {}
	$scope.newEvent = {}
	$scope.calendar.options = {
		defaultDate: UtilsService.today(),
		minDate: UtilsService.rangeDate().minDate,
		maxDate: UtilsService.rangeDate().maxDate,
		disabledDates: [],
		dayNamesLength: 1, // 1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names. Default is 1.
		mondayIsFirstDay: true,//set monday as first day of week. Default is false
		eventClick: function(date) { // called before dateClick and only if clicked day has events
			$scope.aggiungiEvento();
			console.log(date);
		},
		dateClick: function(date) { // called every time a day is clicked
	  	$scope.dateClicked = date;
	  	console.log(date);
		},
		changeMonth: function(month, year) {
	  	console.log(month, year);
		},
		filteredEventsChange: function(filteredEvents) {
	  	console.log(filteredEvents);
		},
  };

  $scope.calendar.events = [
		{ eventClass: 'expired', date: "2015-08-18"}, //value of eventClass will be added to CSS class of the day element
		{ foo: "bar", date: "2016-01-20"},
		{ date: "2016-01-16"}
  ];

  $scope.aggiungiEvento = function(){
  	$scope.calendar.events.push({date: "2016-01-19"})
  	$ionicModal.fromTemplateUrl('templates/modal.html', {
    	scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
    	$scope.modal = modal;
      $scope.modal.show();
    });
  }

  $scope.chiudiModal = function () {
  			$scope.newEvent.date = UtilsService.convertDate($scope.dateClicked);
  			console.log($scope.newEvent.date)
  			$scope.calendar.events.push($scope.newEvent);
  			$scope.calendar.events.push({date: "2016-01-15"});
        $scope.modal.hide();
  };
});