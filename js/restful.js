var config = {
    apiKey: "AIzaSyABbdVqWAOwDzKJS-5QgEyWIdjNl0nT-Rg",
    authDomain: "trmanger-44936.firebaseapp.com",
    databaseURL: "https://trmanger-44936.firebaseio.com",
    projectId: "trmanger-44936",
    storageBucket: "trmanger-44936.appspot.com",
    messagingSenderId: "170847716626"
  };
firebase.initializeApp(config);
var firebase_ref = firebase.database().ref('course_op');

firebase_ref.on('value', function (snapshot) {
load();

});



function load() {
    var $ul = $('.styles__cul3');
    var  firebase_ref = firebase.database().ref('course_op');
//    var coursedetailRef = firebase_ref.child(uniqekey);
  //  var coursedetailRef = coursedetailRef.child('attendee')
  //  var course_opRef = firebase.database().ref('847e6122/attendee');
    var attendee = [];
    firebase_ref.once('value').then(function (snapshot){
    //    $ul.empty();



       snapshot.forEach(function (datasnapshot) {
         var results = datasnapshot.val();
         $.each(results, function(i,obj){
           if( i == 'attn' ){
            //  var attr = [];
            //  var attr = JSON.stringify(obj);

             var total_stu = 0;
             $.each(obj, function(j, item){
               total_stu++;
             });
           }



})
        $ul.append(
          $('<li>',{ class:'dlist__item styles_hover'}).append(
            $('<div>', {class:'course-item-list'}).append(
              $('<a>,', {class:'course-link'}),
              $('<div>', {class:'course-content'}).append(
                $('<div>', {class:'courseName'}).outerHTML +=(
                '<svg class="icon icon-files-empty privacyIcon"><use xlink:href="#icon-files-empty"><symbol id="icon-files-empty" viewbox="0 0 32 32"><path d="M28.681 11.159c-0.694-0.947-1.662-2.053-2.724-3.116s-2.169-2.030-3.116-2.724c-1.612-1.182-2.393-1.319-2.841-1.319h-11.5c-1.379 0-2.5 1.122-2.5 2.5v23c0 1.378 1.121 2.5 2.5 2.5h19c1.378 0 2.5-1.122 2.5-2.5v-15.5c0-0.448-0.137-1.23-1.319-2.841zM24.543 9.457c0.959 0.959 1.712 1.825 2.268 2.543h-4.811v-4.811c0.718 0.556 1.584 1.309 2.543 2.268v0zM28 29.5c0 0.271-0.229 0.5-0.5 0.5h-19c-0.271 0-0.5-0.229-0.5-0.5v-23c0-0.271 0.229-0.5 0.5-0.5 0 0 11.499-0 11.5 0v7c0 0.552 0.448 1 1 1h7v15.5z"></path><path d="M18.841 1.319c-1.612-1.182-2.393-1.319-2.841-1.319h-11.5c-1.378 0-2.5 1.121-2.5 2.5v23c0 1.207 0.86 2.217 2 2.45v-25.45c0-0.271 0.229-0.5 0.5-0.5h15.215c-0.301-0.248-0.595-0.477-0.873-0.681z"></path></symbol></use></svg>'
                    )
                  )
                )
              )
            )



  })

});
}
