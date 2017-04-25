angular.module('filereader').controller('fileReaderController', fileReaderController);

function fileReaderController($scope, fileDataFactory, _) {
	          var vm = this;
	          vm.title = "Wolt Restaurant App";
	          // Get the values from the route from our factory
	          fileDataFactory.dayList().then(function(response){ 
            vm.days = response.data;
            var y = vm.days;
       	    vm.dayTag= _.keys(y); 
            s=_.keys(y);
           
    
            // convert first to HH:MM:SS
            function convertToTime(q) {
                     var date = new Date(null);
                     date.setSeconds(q); 
                     s = date.toISOString().substr(11, 8);   
                     var H = +s.substr(0, 2);
                     var h = H % 12 || 12;
                     var ampm = H < 12 ? "AM" : "PM";
                     s = h + s.substr(2, 3) + ampm;
                     return s;
            }

           function getMonday() {
                     var b=[];
                     var t = _.pluck(y.monday, 'value');
                     var g= _.pluck(y.monday, 'type');
                     for (var i = 0; i < t.length; i++) {
                          k =(convertToTime(t[i]));
                          b.push(k); 
                     }
                     e=b;
                    return {e,g}; 
            }

           function getTuesday() {
                     var b=[];
                     var t = _.pluck(y.tuesday, 'value');
                     var g= _.pluck(y.tuesday, 'type');
                     for (var i = 0; i < t.length; i++) {
                          k =(convertToTime(t[i]));
                          b.push(k); 
                      }
                      e=b;
                      return {e,g};
           }

           function getWednesday() {
                      var b=[];
                      var t = _.pluck(y.wednesday, 'value');
                      var g= _.pluck(y.wednesday, 'type');
                      for (var i = 0; i < t.length; i++) {
                          k =(convertToTime(t[i]));
                          b.push(k); 
                      }
                      e=b;
                      return {e,g};
           }

           function getThursday() {
                      var b=[];
                      var t = _.pluck(y.thursday, 'value');
                      var g= _.pluck(y.thursday, 'type');
                      for (var i = 0; i < t.length; i++) {
                          k =(convertToTime(t[i]));
                          b.push(k); 
                      }
                      e=b;
                      return {e,g};
           }

           function getFriday() {
                      var b=[];
                      var t = _.pluck(y.friday, 'value');
                      var g= _.pluck(y.friday, 'type');
                      for (var i = 0; i < t.length; i++) {
                           k =(convertToTime(t[i]));
                           b.push(k); 
                      }
                      e=b;
                      return {e,g};
           }

           function getSaturday() {
                      var b=[];
                      var t = _.pluck(y.saturday, 'value');
                      var g= _.pluck(y.saturday, 'type');
                      for (var i = 0; i < t.length; i++) {
                           k =(convertToTime(t[i]));
                           b.push(k); 
                      }
                      e=b;
                      return {e,g};  
           }

           function getSunday() {
                      var b=[];
                      var t = _.pluck(y.sunday, 'value');
                      var g= _.pluck(y.sunday, 'type');
                      for (var i = 0; i < t.length; i++) {
                           k =(convertToTime(t[i]));
                           b.push(k); 
                      }
                      e=b;
                      return {e,g};
          }

          function printDayTime(q,l) {
                   var f=[];
                   var x=[];
                   // This checks if the array is empty and returns "Closed" if true
                   if (!Array.isArray(q) || !q.length) {
                    var x = "Closed";
                    return [x];
                    }
                  // If the last item in array is "open" then push new closing time of 1.00AM
                   if (q[q.length- 1] === 'open') {
                          q.push('close');
                          l.push('1.00AM');
                    }
                   //If the first item in array is "close" remove the item using the splice function 
                   for (var i = 0; i < q.length; i++) {
                        if (q[0] === 'close') {
                             q.splice(0,1);
                             l.splice(0,1);
                         }
                         f.push(q[i]);
                    }
                    // push new value into array
                    for (var i = 0; i < l.length; i++) {
                        x.push(l[i]);
                     } 
                     //console.log(x);
                     return x;
          }
         // passing the value into the function and then add "-" in between the returned time
          vm.m = printDayTime(getMonday().g,getMonday().e).join("-");
          vm.t = printDayTime(getTuesday().g,getTuesday().e).join("-");
          vm.w = printDayTime(getWednesday().g,getWednesday().e).join("-");
          vm.th = printDayTime(getThursday().g,getThursday().e).join("-");
          vm.f=printDayTime(getFriday().g,getFriday().e).join("-");
          vm.s = printDayTime(getSaturday().g,getSaturday().e).join("-");
          vm.su = printDayTime(getSunday().g,getSunday().e).join("-");
         
});
}

