/* -------------------------
   -----  Counters -----
   ------------------------- */

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var position = $('#counter-stats').scrollTop()

    if (scroll >= position) {
        $('.counting').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');

            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 3000,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
    }
});