angular.module('starter.services', [])

.factory('UtilsService', function(){
	return {
        convertDate: function(date){
        	date.month = parseInt(date.month) + 1;
        	if (date.month < 10) {
                date.month = '0' + date.month
            }
        	return date.year+'-'+date.month+'-'+date.day;
        },

        today: function () {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd
            }

            if (mm < 10) {
                mm = '0' + mm
            }

            today = yyyy + '-' + mm + '-' + dd;
            return today;
        },
        rangeDate: function () {
            var date = new Date();
            var maxDate = date.getFullYear();
            var minDate = date.getMonth() + 1;
            function fixMonth (minDate) {
                if(minDate > 10)
                    minDate = "0" + minDate;
            }
            maxDate = maxDate + "-12-31";
            minDate = date.getFullYear() + "-" + minDate + "-" + "01";
            return {
                minDate: minDate,
                maxDate: maxDate
            }
        }
    }
})