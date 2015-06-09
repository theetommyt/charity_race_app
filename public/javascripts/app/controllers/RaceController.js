charApp.controller('Races2015', ['$scope', function($scope) {
  $scope.races [
    {
    name: 'NYC Marathon',
    city: 'New York City',
    state: 'NY',
    country: 'USA',
    date: new Date('2015', '11', '01'),
    logo: 'https://pbs.twimg.com/profile_images/568497655488053248/IFUVzI0I.png'
  },
  {
  name: 'Chicago Marathon',
  city: 'Chicago',
  state: 'IL',
  country: 'USA',
  date: new Date('2015', '10', '11'),
  logo: 'http://upload.wikimedia.org/wikipedia/en/thumb/c/c2/Bank_of_America_Chicago_Marathon_Logo.svg/1280px-Bank_of_America_Chicago_Marathon_Logo.svg.png'
  },
  {
  name: 'Berlin Marathon',
  city: 'Berlin',
  state: 'Berlin',
  country: 'Germany',
  date: new Date('2015', '09', '27'),
  logo: 'https://singletrackedmind.files.wordpress.com/2014/12/bmw_berlin_marathon_logo-svg.png'
  }
];

}]);
