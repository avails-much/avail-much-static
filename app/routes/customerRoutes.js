App.config(function ($routeProvider) {
  $routeProvider
    .when('/', 
      {
        templateUrl: 'app/templates/customer.html'
      }
    )
    .otherwise( { redirectTo: '/' } );
});