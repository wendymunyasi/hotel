eventListerners();

function eventListerners() {
    
       const swiper = document.querySelector('.swiper-container')
    const pagination = document.querySelector('.swiper-pagination')
    const nextBtn = document.querySelector('.swiper-button-next')
    const backBtn = document.querySelector('.swiper-button-prev')
     
    let mySwiper = new Swiper(swiper, {
        slidesPerView: 2,
        spaceBetween: 10,
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: pagination,
            clickable: true,

        },

        // Navigation arrows
        navigation: {
            nextEl: nextBtn,
            prevEl: backBtn,
        },
        breakpoints: {
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 1,
            },
            1181:{
                slidesPerView: 3,
              spaceBetween: 1,
            }
          }

        // And if we need scrollbar
        
    })
}
