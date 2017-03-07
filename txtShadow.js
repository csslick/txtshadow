$.fn.txtShadow = function(options){
  
  $(document).mousemove(function(event){

    // 기본 옵션
    var option = { 
      blur: '3px', 
      color: "#333"
    }
    
    // 확장 옵션
    $.extend(option, options);
    
    // 각 요소별로 적용
    $('.shadow').each(function(i){
      var x = event.clientX,
          y = event.clientY,
          sx = 6, sy = 6, // 그림자 위치,
          position = $('.shadow').eq(i).position(), // 각 요소 위치
          ex = parseInt(position.left), // 텍스트 위치
          ey = parseInt(position.top);

      if(x > ex){ sx=-sx; } 
      if(y > ey){ sy=-sy; } 
      $('.shadow').eq(i).css('textShadow', sx+'px '+ sy +'px ' + 
                             option. blur + ' ' + option.color);

      $('.shadow').eq(i).on({
          mousedown: function(){
            $(this).css('fontSize', '100px')
              .css('textShadow', '0px 0px 20px #333');
          },
          mouseup: function(){
            $(this).css('fontSize', '64px');
          }     
      }); // end on()
    }); // end each()

  }); // end mousemove()
  
} // end $.fn
