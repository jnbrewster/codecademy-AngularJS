app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'My app title';
  $scope.promo = 'Here is a string';
  $scope.products = [
  {
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08'),
    cover: 'img/the-book-of-trees.jpg'
  },
  {
    name: 'Program or be Programmed',
    price: 8,
    pubdate: new Date('2013', '08', '01'),
    cover: 'img/program-or-be-programmed.jpg'
  },
	{
		name: 'Eloquent Javascript',
		price: 30,
		pubdate: new Date('2015'),
		cover: 'img/javscript.jpg'
	},
	{
		name: 'Practical Vim',
		price: 20,
		pubdate: new Date('2014'),
		cover: 'img/vim.jpg'
	}
]
}]);
