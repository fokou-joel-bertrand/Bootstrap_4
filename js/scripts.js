$(document).ready(function(){

    $('#loginModal').modal('hide');
    $('#reservationTableModal').modal('hide');
    $('#login').attr('data-target', '#loginModal');
    $('#login').attr('data-toggle', 'modal');
    $('#reserveTableButton').attr('data-target', '#reservationTableModal');
    $('#reserveTableButton').attr('data-toggle', 'modal');

    $('#reserveTableButton').click('on', function(){
        $('#reservationTableModal').modal('show');
    });
    $('#tableReservationDismiss').click('on', function(){
        $('#reservationTableModal').modal('hide');
    });
    $('#tableReservationCancelButton').click('on', function(){
        $('#reservationTableModal').modal('hide');
    });

    $('#login').click('on', function(){
        $('#loginModal').modal('show');
    });
    $('#dismiss-modal-login').click('on', function(){
        $('#loginModal').modal('hide');
    });
    $('#login-times-dismiss').click('on', function(){
        $('#loginModal').modal('hide');
    });

    $('#mycarousel').carousel({interval : 2000})
    $('#carouselButton').click(function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause');
            $('#carouselButton').children('span').addClass('fa-play');
        }
        else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play');
            $('#carouselButton').children('span').addClass('fa-pause');
        }
    });
});