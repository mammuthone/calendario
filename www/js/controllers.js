angular.module('starter.controllers',[])

.controller('CalendarController', function($scope, UtilsService, $translate, $ionicModal, $ionicPopup){
	$scope.calendar = {};
	$scope.newEvent = {};
	var calendar = [];
	$scope.calendar.options = {
		defaultDate: UtilsService.today(),
		minDate: UtilsService.rangeDate().minDate,
		maxDate: UtilsService.rangeDate().maxDate,
		disabledDates: [],
		dayNamesLength: 1, // 1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names. Default is 1.
		mondayIsFirstDay: true,//set monday as first day of week. Default is false
		eventClick: function(date) { // called before dateClick and only if clicked day has events
			$scope.listaEventi = date.event;
			//$scope.listaEventi.push(date.)
		},
		dateClick: function(date) { // called every time a day is clicked
	  	var d = date;
	  	window.localStorage.setItem('date', UtilsService.convertDate(d));
	  	console.log(date);
		},
		changeMonth: function(month, year) {
	  	//console.log(month, year);
		},
		filteredEventsChange: function(filteredEvents) {
	  	//console.log(filteredEvents);
		},
  };

    $scope.calendar.events = [
		{ date: "2016-01-20", evento: "Evento di prova 1"},
		{ date: "2016-01-21", evento: "Evento di prova 2"}
  ];

  $scope.aggiungiEvento = function(date){
  	$ionicModal.fromTemplateUrl('templates/modal.html', {
    	scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
    	$scope.modal = modal;
      $scope.modal.show();
    });
  }


  $scope.chiudiModal = function () {
  	console.log($scope.modal);
  	if($scope.evento != null || $scope.evento != ""){
  		$scope.calendar.events.push({date: window.localStorage.getItem('date'), evento: $scope.modal.appuntamento})
  	}
		$scope.modal.hide();
  };

  $scope.emptyCalendar = function(){
  	$scope.calendar.events= [];
  }
});