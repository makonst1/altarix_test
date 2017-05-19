var swiper = new Swiper('.top_banner__container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    loop: true,
    autoplay: 2500,
});
var swiper = new Swiper('.categories__container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 1,
});

$(document).ready(function() {
    $('.product_list__button').click(function(){
        id = $(this).parents('.product_list__item').data('id');
        price = $(this).parents('.product_list__item').data('price');
        if($('.header__basket').text()==''){
            $('.header__basket').text('$'+price); 
        }
        else{
            oldprice=$('.header__basket').text().trim().slice(1);
            newprice=Number(oldprice)+Number(price);
            $('.header__basket').text('$'+newprice);
        }
        if($(this).hasClass("active")){
            $(this).html('IN BASKET x<span>'+ (Number($(this).find('span').text())+1) +'</span>');
        }
        else{
            $(this).addClass('active');
            $(this).html('IN BASKET x<span>1</span>');
        }        
    });

    $('.categories__button').click(function(){
        catalog = $(this).parents('.swiper-slide').data('catalog');
        $('.categories__wrapper').find('.swiper-slide').each(function(){
            $(this).removeClass('active');
        })
        $(this).parents('.swiper-slide').addClass('active');
        $('.product_list__item').each(function(){
            $(this).removeClass('active');
        })
        $('.products_list__wrapper').find('[data-catalog = "'+catalog+'"]').each(function(){
            $(this).addClass('active');
        });
        console.log(catalog);
    });
});