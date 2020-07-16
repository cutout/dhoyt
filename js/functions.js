//Loading state
//$(function(){
//    setTimeout(function(){$("body").addClass("loading")},200),
//   setTimeout(function(){$("body").addClass("loaded")},3000)
//  })

// Tooltips
$(function() {
  $(document).tooltip({
    items: 'img, [data-geo], [title]',
    content: function() {
      var element = $(this)
      if (element.is('[title]')) {
        return element.attr('title')
      }
      if (element.is('img')) {
        return element.attr('alt')
      }
    },
  })
})

// //Fade on scroll
// $(window).scroll(function() {
//   $('.intro').css('opacity', 1 - $(window).scrollTop() / 880)
// })

//Smooth scroll to top
// $(function() {
//   $('a[href*=#]:not([href=#])').click(function() {
//     if (
//       location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
//       location.hostname == this.hostname
//     ) {
//       var target = $(this.hash)
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
//       if (target.length) {
//         $('html,body').animate(
//           {
//             scrollTop: target.offset().top,
//           },
//           1000,
//         )
//         return false
//       }
//     }
//   })
// })

//Change position on scroll

// function init() {
//   window.addEventListener('scroll', function(e) {
//     var distanceY = window.pageYOffset || document.documentElement.scrollTop,
//       shrinkOn = 50,
//       nav = document.querySelector('nav')
//     if (distanceY > shrinkOn) {
//       classie.add(nav, 'smaller')
//     } else {
//       if (classie.has(nav, 'smaller')) {
//         classie.remove(nav, 'smaller')
//       }
//     }
//   })
// }
// window.onload = init()

//Footer fades in

var footer = $('footer'),
  extra = 10 // In case you want to trigger it a bit sooner than exactly at the bottom.

footer.css({ opacity: '0', display: 'block' })

$(window).scroll(function() {
  var scrolledLength = $(window).height() + extra + $(window).scrollTop(),
    documentHeight = $(document).height()

  console.log('Scroll length: ' + scrolledLength + ' Document height: ' + documentHeight)

  if (scrolledLength >= documentHeight) {
    footer
      .addClass('bottom')
      .stop()
      .animate({ bottom: '0', opacity: '1' }, 200)
  } else if (scrolledLength <= documentHeight && footer.hasClass('bottom')) {
    footer
      .removeClass('bottom')
      .stop()
      .animate({ bottom: '20', opacity: '0' }, 500)
  }
})
