/**============================================
 *               IMPORTATION
 *=============================================**/
// Materialize
const materializeScript = document.createElement("script");
materializeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js";
document.head.appendChild(materializeScript);

// Font Awesome
const fontawesomeScript = document.createElement("script");
fontawesomeScript.src = "https://kit.fontawesome.com/8eca06d6f9.js";
fontawesomeScript.crossOrigin = "anonymous";
document.head.appendChild(fontawesomeScript);
/*=============== END OF IMPORTATION ==============*/


/**======================
 *    SOCIALS
 *========================**/
fetch('../Social-Content.html')
    .then(response => response.text())
    .then(content => {
        document.getElementById('socialContent').innerHTML = content;
    });
/*==== END OF SOCIALS ====*/


/**============================================
 *               BOUTON
 *=============================================**/
(function($) {
    $.fn.textyle = function(options) {
        var settings = $.extend({
            duration: 400,
            delay: 100,
            easing: "swing",
            callback: null,
        }, options);

        function replaceWithSpans(element) {
            element.replaceWith(element.text().replace(/(\S)/g, "<span>$1</span>"));
        }

        return this.each(function() {
            var container = $(this);
            var contents = container.contents();

            contents.each(function() {
                var element = $(this);
                if (this.nodeType === 3) {
                    replaceWithSpans(element);
                }
            });

            var childrenCount = container.children().length;
            container.css("opacity", 1);

            for (var i = 0; i < childrenCount; i++) {
                container.children("span:eq(" + i + ")")
                    .delay(settings.delay * i)
                    .animate({
                        opacity: 1,
                        top: 0,
                        left: 0,
                    }, settings.duration, settings.easing, settings.callback);
            }
        });
    };
})(jQuery);
/*=============== END OF BOUTON ==============*/


/**============================================
 *               ANIMATION BOUTON
 *=============================================**/
$(document).ready(function() {
    $(".button").animate({
        opacity: 1,
    }, 700);

    // Effet de typographie sur les boutons
    $(".buttonEffect").textyle({
        duration: 200,
        delay: 10,
        easing: "swing",
        callback: function() {
            $(this).css({
                visibility: "visible",
                color: "#fff",
                transition: "0.05s",
            });
        },
    });
});
/*=============== END OF ANIMATION BOUTON ==============*/


/**======================
 *    GOOGLE ANALYTICS
 *========================**/
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://raw.githubusercontent.com/LucasM548/G-A/main/An-s.js','ga');

ga('create', 'G-JDZE4D8YXC', 'auto');
ga('send', 'pageview');

/*
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-JDZE4D8YXC');*/
/*==== END OF GOOGLE ANALYTICS ====*/