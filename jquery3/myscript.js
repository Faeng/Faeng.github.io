$(document).ready(function() {
    $("body").css("background-color","#e1bee7");
    $("#promptPopUp").css("color","#ff1744");
    $('#tickRadio').hide();
    $('#tickRadio').css("text-align","center");
    $('#tickRadio').css("margin-bottom",20);
    $("#promptPopUp").css("margin-bottom",10);
    $("td").css("background-color","#b9ecf7");
    $("#promptPopUp").hover(function() {
        $(this).css('cursor','pointer');
    }, function() {
            $(this).css('cursor','auto');
    });

    $("#promptPopUp").click(function(){
      $("#tickRadio").toggle();
    });

    $("h1").css("font-size",40);

    // $('#music_table').css("text-align","center");
    // $('#music_table').css("position","center");
    $('body').css("text-align","center");
    //css parts
    $('#reference').css("margin-top",50);
    $('h1').css("text-align","center");
    $("th").css("background-color", "grey");
    // var state = 0; 


    $('#input-text').keypress(function(event){
        var keyCode = event.keyCode;
        if(keyCode=='13'){
            $('#submit-btn').click();
        }
    });

     

    $('#submit-btn').click(function() {
        console.log('click on submit button');
        // if(state==0){
            $('#music_table').html('');
            var input = $('#input-text').val();
            
            $.ajax({
                url: "data.json",
                dataType: "json"
            }).done(function(response) {
                console.log(response);
                var music_data = '';
                music_data+='<tr>'+
                            '<th>Title</th>'+
                            '<th>Album</th>'+
                            '<th>Artist</th>'+
                            '<th>Year</th>'+
                            '<th>Genre</th>'+
                        '</tr>';

                $.each(response,function(key,value){
                    if(input==""){
                        music_data += '<tr>';
                        music_data += '<td>'+value.titleName+'</td>';
                        music_data += '<td>'+value.album+'</td>';
                        music_data += '<td>'+value.artist+'</td>';
                        music_data += '<td>'+value.year+'</td>';
                        music_data += '<td>'+value.genre+'</td>';
                        music_data += '</tr>'; 
                    }
                    else{
                        if(value.titleName.toLowerCase() == input.toLowerCase()||
                        value.album.toLowerCase() == input.toLowerCase()|| 
                        value.artist.toLowerCase() == input.toLowerCase()||
                        value.year == input|| 
                        value.genre.toLowerCase() == input.toLowerCase()){
                        music_data += '<tr>';
                        music_data += '<td>'+value.titleName+'</td>';
                        music_data += '<td>'+value.album+'</td>';
                        music_data += '<td>'+value.artist+'</td>';
                        music_data += '<td>'+value.year+'</td>';
                        music_data += '<td>'+value.genre+'</td>';
                        music_data += '</tr>'; 
                        }
                    }
                                
                });
                $('#music_table').append(music_data);
                $('th').css("background-color","grey");
                
            });
        // }

        // if(state==1){
        //     
        // }
        
    })


   $('input[type=radio][name=music]').change('change', function() {
        $('#music_table').html('');
        switch($(this).val()) {
             case 'title':
                var input = $('#input-text').val();
                $('#music_table').html('');
                 $.ajax({
                url: "data.json",
                dataType: "json"
                    }).done(function(response) {
                        console.log(response);
                        var music_data = '';
                        music_data+='<tr>'+
                                    '<th>Title</th>'+
                                    '<th>Album</th>'+
                                    '<th>Artist</th>'+
                                    '<th>Year</th>'+
                                    '<th>Genre</th>'+
                                '</tr>';

                        $.each(response,function(key,value){
                            if(input==""){
                                music_data += '<tr>';
                                music_data += '<td>'+value.titleName+'</td>';
                                music_data += '<td>'+value.album+'</td>';
                                music_data += '<td>'+value.artist+'</td>';
                                music_data += '<td>'+value.year+'</td>';
                                music_data += '<td>'+value.genre+'</td>';
                                music_data += '</tr>'; 
                            }
                            else{
                                if(value.titleName.toLowerCase() == input.toLowerCase()){
                                music_data += '<tr>';
                                music_data += '<td>'+value.titleName+'</td>';
                                music_data += '<td>'+value.album+'</td>';
                                music_data += '<td>'+value.artist+'</td>';
                                music_data += '<td>'+value.year+'</td>';
                                music_data += '<td>'+value.genre+'</td>';
                                music_data += '</tr>'; 
                                }
                            }
                                        
                        });
                        $('#music_table').append(music_data);
                        $('th').css("background-color","grey");
                        
                    });
                 break;

             case 'album':
                var input = $('#input-text').val();
                $('#music_table').html('');
                 $.ajax({
                url: "data.json",
                dataType: "json"
                    }).done(function(response) {
                        console.log(response);
                        var music_data = '';
                        music_data+='<tr>'+
                                    '<th>Title</th>'+
                                    '<th>Album</th>'+
                                    '<th>Artist</th>'+
                                    '<th>Year</th>'+
                                    '<th>Genre</th>'+
                                '</tr>';

                        $.each(response,function(key,value){
                            if(input==""){
                                music_data += '<tr>';
                                music_data += '<td>'+value.titleName+'</td>';
                                music_data += '<td>'+value.album+'</td>';
                                music_data += '<td>'+value.artist+'</td>';
                                music_data += '<td>'+value.year+'</td>';
                                music_data += '<td>'+value.genre+'</td>';
                                music_data += '</tr>'; 
                            }
                            else{
                                if(value.album.toLowerCase() == input.toLowerCase()){
                                music_data += '<tr>';
                                music_data += '<td>'+value.titleName+'</td>';
                                music_data += '<td>'+value.album+'</td>';
                                music_data += '<td>'+value.artist+'</td>';
                                music_data += '<td>'+value.year+'</td>';
                                music_data += '<td>'+value.genre+'</td>';
                                music_data += '</tr>'; 
                                }
                            }
                                        
                        });
                        $('#music_table').append(music_data);
                        $('th').css("background-color","grey");
                        
                    });
                 break;

             case 'artist':
                var input = $('#input-text').val();
                $('#music_table').html('');
                $.ajax({
                url: "data.json",
                dataType: "json"
                }).done(function(response) {
                    console.log(response);
                    var music_data = '';
                    music_data+='<tr>'+
                                '<th>Title</th>'+
                                '<th>Album</th>'+
                                '<th>Artist</th>'+
                                '<th>Year</th>'+
                                '<th>Genre</th>'+
                            '</tr>';

                    $.each(response,function(key,value){
                        if(input==""){
                            music_data += '<tr>';
                            music_data += '<td>'+value.titleName+'</td>';
                            music_data += '<td>'+value.album+'</td>';
                            music_data += '<td>'+value.artist+'</td>';
                            music_data += '<td>'+value.year+'</td>';
                            music_data += '<td>'+value.genre+'</td>';
                            music_data += '</tr>'; 
                        }
                        else{
                            if(value.artist.toLowerCase() == input.toLowerCase()){
                            music_data += '<tr>';
                            music_data += '<td>'+value.titleName+'</td>';
                            music_data += '<td>'+value.album+'</td>';
                            music_data += '<td>'+value.artist+'</td>';
                            music_data += '<td>'+value.year+'</td>';
                            music_data += '<td>'+value.genre+'</td>';
                            music_data += '</tr>'; 
                            }
                        }
                                    
                    });
                    $('#music_table').append(music_data);
                    $('th').css("background-color","grey");
                    
                });
             
                break;

             case 'year':
                var input = $('#input-text').val();
                $('#music_table').html('');
                $.ajax({
                url: "data.json",
                dataType: "json"
                }).done(function(response) {
                    console.log(response);
                    var music_data = '';
                    music_data+='<tr>'+
                                '<th>Title</th>'+
                                '<th>Album</th>'+
                                '<th>Artist</th>'+
                                '<th>Year</th>'+
                                '<th>Genre</th>'+
                            '</tr>';

                    $.each(response,function(key,value){
                        if(input==""){
                            music_data += '<tr>';
                            music_data += '<td>'+value.titleName+'</td>';
                            music_data += '<td>'+value.album+'</td>';
                            music_data += '<td>'+value.artist+'</td>';
                            music_data += '<td>'+value.year+'</td>';
                            music_data += '<td>'+value.genre+'</td>';
                            music_data += '</tr>'; 
                        }
                        else{
                            if(value.year == input){
                            music_data += '<tr>';
                            music_data += '<td>'+value.titleName+'</td>';
                            music_data += '<td>'+value.album+'</td>';
                            music_data += '<td>'+value.artist+'</td>';
                            music_data += '<td>'+value.year+'</td>';
                            music_data += '<td>'+value.genre+'</td>';
                            music_data += '</tr>'; 
                            }
                        }
                                    
                    });
                    $('#music_table').append(music_data);
                    $('th').css("background-color","grey");
                    
                });
                break;

             case 'genre':
                var input = $('#input-text').val();
                $('#music_table').html('');
                $.ajax({
                url: "data.json",
                dataType: "json"
                }).done(function(response) {
                    console.log(response);
                    var music_data = '';
                    music_data+='<tr>'+
                                '<th>Title</th>'+
                                '<th>Album</th>'+
                                '<th>Artist</th>'+
                                '<th>Year</th>'+
                                '<th>Genre</th>'+
                            '</tr>';

                    $.each(response,function(key,value){
                        if(input==""){
                            music_data += '<tr>';
                            music_data += '<td>'+value.titleName+'</td>';
                            music_data += '<td>'+value.album+'</td>';
                            music_data += '<td>'+value.artist+'</td>';
                            music_data += '<td>'+value.year+'</td>';
                            music_data += '<td>'+value.genre+'</td>';
                            music_data += '</tr>'; 
                        }
                        else{
                            if(value.genre.toLowerCase() == input.toLowerCase()){
                            music_data += '<tr>';
                            music_data += '<td>'+value.titleName+'</td>';
                            music_data += '<td>'+value.album+'</td>';
                            music_data += '<td>'+value.artist+'</td>';
                            music_data += '<td>'+value.year+'</td>';
                            music_data += '<td>'+value.genre+'</td>';
                            music_data += '</tr>'; 
                            }
                        }
                                    
                    });
                    $('#music_table').append(music_data);
                    $('th').css("background-color","grey");
                    
                });
                break;
        }
    });


    $.ajax({
        url: "data.json",
        dataType: "json"
    }).done(function(response) {
        console.log(response);
        var music_data = '';
        $.each(response,function(key,value){
            music_data += '<tr>';
            music_data += '<td>'+value.titleName+'</td>';
            music_data += '<td>'+value.album+'</td>';
            music_data += '<td>'+value.artist+'</td>';
            music_data += '<td>'+value.year+'</td>';
            music_data += '<td>'+value.genre+'</td>';
            music_data += '</tr>';            
        });
        $('#music_table').append(music_data);

    });

});