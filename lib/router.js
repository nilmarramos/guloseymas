
FlowRouter.route('/', {
    subscriptions() {
        Meteor.subscribe('porta');
        Meteor.subscribe('texto');
        Meteor.subscribe('product');
        Meteor.subscribe('category');
        Meteor.subscribe('sabores');
    },
    action () {
        BlazeLayout.render('layout',{main:'home'})
    }
});
FlowRouter.route('/menu', {
    subscriptions() {
        Meteor.subscribe('category');
        Meteor.subscribe('product');
        Meteor.subscribe('cart');
        Meteor.subscribe('sabores');
    },
    action () {
        BlazeLayout.render('layout2',{main:'menu'})
    }
});
FlowRouter.route('/cart', {
    subscriptions() {
        Meteor.subscribe('category');
        Meteor.subscribe('cart');
    },
    action () {
        BlazeLayout.render('layout2',{main:'_cart'})
    }
});
FlowRouter.route('/pedido', {
    subscriptions() {
        Meteor.subscribe('category');
        Meteor.subscribe('cart');
    },
    action () {
        Tracker.autorun(function() {
            if (Meteor.userId()) {
                BlazeLayout.render('layout2',{main:'order'})
            } else {
                BlazeLayout.render("layout", { main: 'home' });
            }
        });

    }
});
FlowRouter.route('/historico', {
    subscriptions() {
        Meteor.subscribe('historico');
    },
    action () {
        BlazeLayout.render('layout2',{main:'historico'})
    }
});
FlowRouter.route('/historico/:id', {
    subscriptions() {
        Meteor.subscribe('historico');
    },
    action () {
        BlazeLayout.render('layout2',{main:'singleHistorico'})
    }
});


//  ADMIN

var adminRoutes = FlowRouter.group({
    prefix: '/admin',
    name: 'admin'
});
adminRoutes.route('/', {
    subscriptions() {
        Meteor.subscribe('cadastro');
        Meteor.subscribe('sabores');
        Meteor.subscribe('product');
        Meteor.subscribe('category');
    },
    action () {
        Tracker.autorun(function() {
            if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
                BlazeLayout.render('admin',{main:'cadastro'})
            } else {
                FlowRouter.go('/')
            }
        });
    }
});
adminRoutes.route('/pedidos', {
    subscriptions() {
        Meteor.subscribe('order');
    },
    action () {
        Tracker.autorun(function() {
            if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
                BlazeLayout.render('admin',{main:'pedidos'})
            } else {
                FlowRouter.go('/')
            }
        });
    }
});
adminRoutes.route('/pedido/:id', {
    subscriptions() {
        Meteor.subscribe('order');
    },
    action () {
        Tracker.autorun(function() {
            if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
                BlazeLayout.render('admin',{main:'singlePedido'})
            } else {
                FlowRouter.go('/')
            }
        });
    }
});
adminRoutes.route('/category', {
    subscriptions() {
        Meteor.subscribe('texto');
        Meteor.subscribe('category');
    },
    action () {
        Tracker.autorun(function() {
            if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
                BlazeLayout.render('admin',{main:'categoria'})
            } else {
                FlowRouter.go('/')
            }
        });
    }
});
adminRoutes.route('/clientes', {
    subscriptions() {
        Meteor.subscribe('users');
    },
    action () {
        Tracker.autorun(function() {
            if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
                BlazeLayout.render('admin',{main:'cliente'})
            } else {
                FlowRouter.go('/')
            }
        });
    }
});
adminRoutes.route('/clientes/:id', {
    subscriptions() {
        Meteor.subscribe('users');
    },
    action () {
        Tracker.autorun(function() {
            if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
                BlazeLayout.render('admin',{main:'singleCliente'})
            } else {
                FlowRouter.go('/')
            }
        });
    }
});
adminRoutes.route('/pedidoMensal', {
    subscriptions() {
        Meteor.subscribe('pedidoMensal');
    },
    action () {
        Tracker.autorun(function() {
            if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
                BlazeLayout.render('admin',{main:'pedidoMensal'})
            } else {
                FlowRouter.go('/')
            }
        });
    }
});