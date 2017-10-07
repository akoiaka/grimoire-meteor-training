//
// Router.configure({
//     LayoutTemplate: 'MainLayout'
// });
// Router.route('/', {
//     name: 'home'
// });

FlowRouter.route('/', {
    name: 'home',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout')
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Recipes'})
    }
});


FlowRouter.route('/NewRecipe', {
    name: 'NewRecipe',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout', {main: 'NewRecipe'})
    }
});

FlowRouter.route('/Recipes', {
    name: 'Recipes',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout', {main: 'Recipes'})
    }
});


FlowRouter.route('/recipe/_id', {
    name: 'recipe',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout', {main: 'RecipeSingle'})
    }
});


FlowRouter.route('/Recipe', {
    name: 'Recipe',
    action() {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Recipe'})
    }
});
