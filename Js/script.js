jQuery(document).ready(function(){



    jQuery(window).on('scroll load', function(){

        jQuery('section').each(function(){

        let height =jQuery(this).height();
        let offset = jQuery(this).offset().top - 200;
        let id = jQuery(this).attr('id')

        let top = jQuery(window).scrollTop();

        if(top > offset && top < offset + height){
            jQuery('.nav-bar ul li a').removeClass('active')
            jQuery('.nav-bar').find(`[href="#${id}"]`).addClass('active');
          }
        })
    });

    // data filter
    jQuery(".portfolio-filter span").click(function(){
        jQuery(this).addClass("filter-active").siblings().removeClass("filter-active")
    })




    // AMD


    var containerEl = document.querySelector('.portfolio-item-dtails');

    var mixer = mixitup(containerEl);




    /// day night toggle
    jQuery(".fa-sun").click(function(){
        jQuery(this).toggleClass("fa-moon")
        jQuery('body').toggleClass("dark")

    });


    // skill filter 

    jQuery(".swe-tittle").click(function(){
        jQuery(this).addClass("filter-active").siblings().removeClass("filter-active")
    })

    jQuery(".swe-tittle").click(function(){
        var result = jQuery(this).attr("data-filter");
        if(result == "all"){
            jQuery(".skills-section").show();
        }
        else{
            jQuery(".blog-box").not('.'+result).hide();
            jQuery(".blog-box").filter('.'+result).show();
        }
    });

    var typed = new Typed('.type', {
        strings: 
        ['Web designer',
         'Web Developer',
         'WordPress Developer'],
         typeSpeed: 100,
         backSpeed: 100,
         loop: true
      });

   









    
})