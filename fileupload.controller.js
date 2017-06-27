vm.bulkupload = bulkupload;
vm.clearBulk = clearBulk;
$scope.myvalue = false;

function bulkupload($files) {
  if ($files !== null && $files.length > 0) {
      var message = '';
      for (var file in $files) {
          $scope.fileBulk = $files[file].name;
          $scope.myvalue = true;
      }
  }
}

function clearBulk() {
    $scope.fileBulk = "";
}
