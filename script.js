var steps = [
    "Extraordinarily calm",
    "Very Calm",
    "Average",
    "Very frusterated",
    "Extraordinarily frusterated"
];

$(function() {
    $("#slider").slider({
        value: 2,
        min: 0,
        max: 4,
        step: 1,
        slide: function(event, ui) {
            $("#mood").val(steps[ui.value]);
        },
        change: function(event, ui){
        if(ui.value == 0){
            $('#mood-icon').attr('src','http://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/really-happy_r9hswo.png');
        }else if(ui.value == 1){
            $('#mood-icon').attr('src','http://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/happy_k51drq.png');
        }else if(ui.value == 2){
            $('#mood-icon').attr('src','http://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/average_t4kd0z.png');
        }else if(ui.value == 3){
            $('#mood-icon').attr('src','http://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/sad_fm4jg7.png');
        }else if(ui.value == 4){
            $('#mood-icon').attr('src','http://res.cloudinary.com/dv2ytxq4z/image/upload/v1489289355/really-mad_bsczhk.png');
        };
      }
    });
    $("#mood").val(steps[$("#slider").slider("value")]);
});