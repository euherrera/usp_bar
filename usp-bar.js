let intervalId = 0;

function ShowDiv() {
    const divs = $('.grid-box .cms-col-component');
    const txt = $('.unique-selling-point extended');
    let counter = 0;
    txt.css('display', 'none');
    divs.css({ 'opacity': '0', 'display': 'none' });
    function Show() {
        txt.addClass('hideUsp')
            .removeClass('showUsp')
            .filter((index) => index === counter % 4)
            .addClass('showUsp')
            .removeClass('hideUsp');
        divs.fadeTo('fast', 0)
            .css('display', 'none')
            .filter((index) => index === counter % 4)
            .fadeTo('fast', 1)
            .css('display', 'block');
        counter += 1;
    }
    setTimeout(Show);
    intervalId = setInterval(Show, 10 * 400);
}

function clearAnimation() {
    clearInterval(intervalId);
}

function expandUSPBar(divs) {
    const txt = $('.unique-selling-point extended');
    txt.removeClass('showUsp hideUsp');
    $(function() {
        divs.each(function(index) {
            divs.eq(index).removeClass(`animateUVP_${index + 1}`);
            divs.eq(index).removeClass('hideUsp showUsp');
            $(this).removeAttr('style');
            $(this).css('opacity', '1');
        });
    });
}

module.exports = { ShowDiv, clearAnimation, expandUSPBar };
