app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'My app title';
  $scope.promo = 'Here is a string';
  $scope.products = [
  {
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08'),
    cover: 'img/the-book-of-trees.jpg',
		likes: 0
  },
  {
    name: 'Program or be Programmed',
    price: 8,
    pubdate: new Date('2013', '08', '01'),
    cover: 'img/program-or-be-programmed.jpg',
		likes: 0
  },
	{
		name: 'Eloquent Javascript',
		price: 30,
		pubdate: new Date('2015'),
		cover: 'img/javscript.jpg',
		likes: 0
	},
	{
		name: 'Practical Vim',
		price: 20,
		pubdate: new Date('2014'),
		cover: 'img/vim.jpg',
		likes: 0
	}
	]
	$scope.plusOne = function(index) {
		$scope.products[index].likes += 1;
	};
}]);
