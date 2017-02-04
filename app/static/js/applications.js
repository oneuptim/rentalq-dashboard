$(document).ready(function(){

  function grabApplications(){

    for(var i = 0; i < 6; i++){

      $.get(`https://jsonplaceholder.typicode.com/posts/${i}`, function(res){

        var content_id = res.id;
        var title = res.title;
        var description = res.body;
        var html_string = "";

            // html_string += '<h1>' + content_id + '</h1>';
            html_string += '<h2>' + content_id + " " + title + '</h2>';
            html_string += '<p>' + description + '</p>'

            $('.api-data').prepend(html_string);


        console.log('I am the description', description);
        console.log('I am the title', title);


      }, 'json')
    }

    // grabApplications()

  }



  $('#appBtn').click(function(){
    $('tbody').prepend(`<tr><td>12/27/2016</td><td>Las Vegas, NV</td><td>Timothy Maina</td><td>3045 Cobble Creek Court, Las Vegas NV 89108</td><td>$1,000</td><td>Completed</td><td>Processing</td></tr>`);

        console.log("Test Application is working!");

  });
  // End of append function


  $('#apiBtn').click(function(){
    grabApplications()
  });
    // End API Testing

});
// End of document load function
