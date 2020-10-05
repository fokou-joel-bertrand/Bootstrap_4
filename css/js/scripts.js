$(document).ready(()=>{

    $('#loginModal').modal('hide');
    $('#reservationTableModal').modal('hide');
    $('#login').attr('data-target', '#loginModal');
    $('#login').attr('data-toggle', 'modal');
    $('#reserveTableButton').attr('data-target', '#reservationTableModal');
    $('#reserveTableButton').attr('data-toggle', 'modal');

    $('#reserveTableButton').click('on', ()=>{
        $('#reservationTableModal').modal('show');
    });
    $('#tableReservationDismiss').click('on', ()=>{
        $('#reservationTableModal').modal('hide');
    });
    $('#tableReservationCancelButton').click('on', ()=>{
        $('#reservationTableModal').modal('hide');
    });

    $('#login').click('on', ()=>{
        $('#loginModal').modal('show');
    });
    $('#dismiss-modal-login').click('on', ()=>{
        $('#loginModal').modal('hide');
    });
    $('#login-times-dismiss').click('on', ()=>{
        $('#loginModal').modal('hide');
    });

    $('#mycarousel').carousel({interval : 2000})
    $('#carouselButton').click(()=>{
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