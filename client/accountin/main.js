
UI.registerHelper("m",function(amount){
    return accounting.formatMoney(amount, "R$ ", 2, ".", ",");
});


// NAV-BAR COLLAPSE
$(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).removeClass('in').addClass('collapse');
    }
});
