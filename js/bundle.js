/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _car = __webpack_require__(1);
	
	var _car2 = _interopRequireDefault(_car);
	
	var _board = __webpack_require__(2);
	
	var _board2 = _interopRequireDefault(_board);
	
	var _view = __webpack_require__(3);
	
	var _view2 = _interopRequireDefault(_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	$(function () {
	  const urlParams = new URLSearchParams(window.location.search);
	  const InputDate = urlParams.get('Date');
	  var carsDic = {};
	  var $container = $('#rush-hour');

	  carsDic['20240726'] = function () {
	    return [new _car2.default(2, "yellow", [2, 1], "right"), 
				new _car2.default(2, "red", [0, 5], "down"), 
				new _car2.default(3, "red", [1, 4], "down"), 
				new _car2.default(2, "red", [2, 0], "down"), 
				new _car2.default(3, "red", [3, 1], "down"), 
				new _car2.default(2, "red", [3, 2], "down"), 
				new _car2.default(2, "red", [3, 5], "down"), 
				new _car2.default(2, "green", [0, 0], "right"), 
				new _car2.default(3, "green", [1, 1], "right"),
				new _car2.default(2, "green", [4, 3], "right"),
				new _car2.default(3, "green", [5, 3], "right")
			];
	  };


	  carsDic['20240725'] = function () {
	    return [new _car2.default(2, "yellow", [2, 2], "right"), 
				new _car2.default(3, "red", [0, 0], "down"), 
				new _car2.default(2, "red", [1, 1], "down"), 
				new _car2.default(2, "red", [0, 3], "down"), 
				new _car2.default(3, "red", [1, 4], "down"), 
				new _car2.default(2, "red", [2, 5], "down"), 
				new _car2.default(2, "red", [4, 2], "down"), 
				new _car2.default(2, "green", [0, 4], "right"), 
				new _car2.default(3, "green", [3, 0], "right"),
				new _car2.default(2, "green", [4, 4], "right"),
				new _car2.default(2, "green", [5, 4], "right")
			];
	  };

	  carsDic['20240724'] = function () {
	    return [new _car2.default(2, "yellow", [2, 0], "right"), 
				new _car2.default(2, "red", [0, 1], "down"), 
				new _car2.default(2, "red", [1, 4], "down"), 
				new _car2.default(2, "red", [2, 2], "down"), 
				new _car2.default(2, "red", [4, 0], "down"), 
				new _car2.default(2, "red", [4, 3], "down"), 
				new _car2.default(3, "red", [3, 5], "down"), 
				new _car2.default(2, "green", [0, 4], "right"), 
				new _car2.default(2, "green", [1, 2], "right"),
				new _car2.default(2, "green", [3, 0], "right"),
				new _car2.default(2, "green", [3, 3], "right"),
				new _car2.default(2, "green", [4, 1], "right")
			];
	  };

	  carsDic['20240723'] = function () {
	    return [new _car2.default(2, "yellow", [2, 2], "right"), 
				new _car2.default(2, "red", [1, 0], "down"), 
				new _car2.default(2, "red", [1, 1], "down"), 
				new _car2.default(2, "red", [0, 2], "down"), 
				new _car2.default(2, "red", [1, 4], "down"), 
				new _car2.default(3, "red", [1, 5], "down"), 
				new _car2.default(3, "red", [3, 3], "down"), 
				new _car2.default(2, "green", [0, 0], "right"), 
				new _car2.default(2, "green", [0, 3], "right"),
				new _car2.default(2, "green", [4, 4], "right")
			];
	  };
	  carsDic['20240722'] = function () {
	    return [new _car2.default(2, "yellow", [2, 0], "right"), 
				new _car2.default(2, "red", [0, 0], "down"), 
				new _car2.default(2, "red", [1, 2], "down"), 
				new _car2.default(2, "red", [1, 5], "down"), 
				new _car2.default(3, "red", [2, 3], "down"), 
				new _car2.default(3, "red", [3, 1], "down"), 
				new _car2.default(2, "red", [4, 4], "down"), 
				new _car2.default(2, "green", [0, 1], "right"), 
				new _car2.default(2, "green", [1, 3], "right"),
				new _car2.default(2, "green", [0, 4], "right"), 
				new _car2.default(2, "green", [3, 4], "right"), 
				new _car2.default(2, "green", [5, 2], "right")
			];
			
	  };
	  var todayCars = null
	  if(InputDate){
		todayCars = carsDic[InputDate]
	  }
	  if(!todayCars)
		todayCars = carsDic[Object.keys(carsDic).sort().reverse()[0]]
	
	  $('.easy-button').click(function () {
	    $container.empty();
	    $(".win-phrase").removeClass("show");
	    $(".current-level").removeClass("current-level");
	    $(".easy-button").addClass("current-level");
	    setUpGame(todayCars(), $container);
	    cars = todayCars;
	  });
	

	  $('.reset-button').click(function () {
	    $container.empty();
	    $(".win-phrase").removeClass("show");
	    setUpGame(todayCars(), $container);
	  });
	
	  setUpGame(todayCars(), $container);
	});
	
	var setUpGame = function setUpGame(cars, container) {
	  var board = new _board2.default(cars);
	  var view = new _view2.default(board, container);
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Car = function () {
	  function Car(length, color, startPos, orientation) {
	    _classCallCheck(this, Car);
	
	    this.length = length;
	    this.color = color;
	    this.startPos = startPos;
	    this.orientation = orientation;
	    this.segments = [startPos];
	    this.setUpBody();
	  }
	
	  _createClass(Car, [{
	    key: "directionTranslate",
	    value: function directionTranslate(dir) {
	      var code = void 0;
	      if (dir) {
	        code = dir;
	      } else {
	        code = this.orientation;
	      }
	      var pos = void 0;
	      switch (code) {
	        case "down":
	          pos = [1, 0];
	          break;
	        case "right":
	          pos = [0, 1];
	          break;
	        case "up":
	          pos = [-1, 0];
	          break;
	        case "left":
	          pos = [0, -1];
	      }
	      return pos;
	    }
	  }, {
	    key: "setUpBody",
	    value: function setUpBody() {
			//var oppositeOrientation = [this.directionTranslate()[0] * -1, this.directionTranslate()[1] * -1];
			var Orientation = this.directionTranslate()
			for (var i = 0; i < this.length - 1; i++) {
	        var bodyPart = [this.segments[i][0] + Orientation[0], this.segments[i][1] + Orientation[1]];
	        this.segments.push(bodyPart);
	      }
	    }
	  }, {
	    key: "move",
	    value: function move(direction) {
			var dir = this.directionTranslate(direction);
			var oldHead = void 0;
			var	newHead = void 0;
			
			if (direction == this.oppositeOrientation()){
				oldHead = this.segments[0];
				newHead = [oldHead[0] + dir[0], oldHead[1] + dir[1]];
				if (newHead[0] < 0 || newHead[0] > 5 || newHead[1] <0 || newHead[1]>5) {
					// alert("out of bounds!");
					return;
				}
				if (!$('li').eq(newHead[0] * 6 + newHead[1]).hasClass("car")) {
					this.segments.unshift(newHead);
					this.segments.pop();
					this.startPos = [this.startPos[0] + dir[0],this.startPos[1] + dir[1]]
					window.moveCount += 1;
				}
	
			}
			else if (direction == this.orientation){
				oldHead = this.segments[this.length - 1];
				newHead = [oldHead[0] + dir[0], oldHead[1] + dir[1]];
				if (newHead[0] < 0 || newHead[0] > 5 || newHead[1] <0 || newHead[1]>5) {
					// alert("out of bounds!");
					return;
				}
				if (!$('li').eq(newHead[0] * 6 + newHead[1]).hasClass("car")) {
					this.segments.push(newHead);
					this.segments.shift();
					this.startPos = [this.startPos[0] + dir[0],this.startPos[1] + dir[1]]
					window.moveCount += 1;
				}
			}
	    }
	}, {
	    key: "oppositeOrientation",
	    value: function oppositeOrientation(orientation) {
			var code=this.orientation;
			if(orientation)
				code=orientation;
			switch (code) {
				case "down":
					return "up";
				case "up":
					return "down";
				case "left":
					return "right";
				case "right":
					return "left";
				}
			return "error";
		}
	}, {
	    key: "moveSteps",
	    value: function moveSteps(stepCount) {
			if(stepCount==0)
				return;
			var code = this.orientation;
			if(stepCount<0){
				stepCount=-stepCount;
				code=this.oppositeOrientation();
			}
			for(var i=0; i<stepCount; i++){
				this.move(code);
			}
		}
	  }, {
	    key: "onEdge",
	    value: function onEdge() {
	      if (this.directionTranslate()[0] === 1) {
	        return this.segments[0][0] === 5 || this.segments[this.length - 1][0] === 0;
	      } else if (this.directionTranslate()[1] === 1) {
	        return this.segments[0][1] === 5 || this.segments[this.length - 1][1] === 0;
	      }
	    }
	  }, {
	    key: "sameDir",
	    value: function sameDir(pos) {
			let code = this.orientation;
			let dir = this.directionTranslate();
			let startPos = this.startPos;
			let endPos = [startPos[0]+dir[0]*(this.length-1), startPos[1]+dir[1]*(this.length-1)];
			let minDistance=Math.min(Math.abs(pos[0]-startPos[0])+Math.abs(pos[1]-startPos[1]),Math.abs(pos[0]-endPos[0])+Math.abs(pos[1]-endPos[1]))
			
			if(code=="up" && pos[0]<endPos[0] && pos[1]==endPos[1]
			  ||code=="down" && pos[0]>endPos[0] && pos[1]==endPos[1]
			  ||code=="left" && pos[1]<endPos[1] && pos[0]==endPos[0]
			  ||code=="right" && pos[1]>endPos[1] && pos[0]==endPos[0])
			  return minDistance;
		
			if(code=="up" && pos[0]>this.startPos[0] && pos[1]==this.startPos[1]
			  ||code=="down" && pos[0]<this.startPos[0] && pos[1]==this.startPos[1]
			  ||code=="left" && pos[1]>this.startPos[1] && pos[0]==this.startPos[0]
			  ||code=="right" && pos[1]<this.startPos[1] && pos[0]==this.startPos[0])
			  return -minDistance;
		
			return 0;
		}
	}]);
	
	  return Car;
	}();
	
	exports.default = Car;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _car = __webpack_require__(1);
	
	var _car2 = _interopRequireDefault(_car);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Board = function () {
	  function Board(cars) {
	    _classCallCheck(this, Board);
	
	    this.grid = new Array(6).fill(new Array(6));
	    this.cars = cars;
	    this.selectedCar;
	  }
	
	  _createClass(Board, [{
	    key: "setUpCars",
	    value: function setUpCars() {
	      var _this = this;
	
	      this.cars.forEach(function (car) {
	        car.segments.forEach(function (square) {
	          // $(`li[data-pos=[${square[0]}, ${square[1]}]`).addClass(car.color);
	          var $square = $("li").eq(square[0] * _this.grid.length + square[1]);
	          $square.addClass(car.color);
	          $square.addClass("car");
	          $square.click(function () {
	            $('.selected').removeClass("selected");
				car.segments.forEach(function (square) {
					var $square = $("li").eq(square[0] * _this.grid.length + square[1]);
					$square.addClass("selected");
				});
	            _this.selectedCar = car;
	          });
	        });
	      });
	    }
	  }, {
	    key: "isWon",
	    value: function isWon() {
		  let car=this.cars[0];
	      if (car.segments[0][1] == 5 || car.segments[car.segments.length-1][1] == 5) {
	        return true;
	      }
	      return false;
	    }
	  }]);
	
	  return Board;
	}();
	
	exports.default = Board;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var View = function () {
	  function View(board, $container) {
	    var _this = this;
	
	    _classCallCheck(this, View);
	
	    this.$container = $container;
	    this.board = board;
	    window.moveCount = 0;
	    this.render();
	    $(window).off("keydown");
	    $(window).on("keydown", function (event) {
	      if (_this.board.selectedCar) {
	        if (event.keyCode === 38) {
	          event.preventDefault();
	          _this.board.selectedCar.move("up");
	          _this.render();
	        } else if (event.keyCode === 40) {
	          event.preventDefault();
	          _this.board.selectedCar.move("down");
	          _this.render();
	        } else if (event.keyCode === 37) {
	          event.preventDefault();
	          _this.board.selectedCar.move("left");
	          _this.render();
	        } else if (event.keyCode === 39) {
	          event.preventDefault();
	          _this.board.selectedCar.move("right");
	          _this.render();
	          if (_this.board.isWon()) {
	            _this.handleWin();
	          }
	        }
	      }
	    });
	  }
	
	  _createClass(View, [{
	    key: "setUpBoard",
	    value: function setUpBoard() {
	      for (var i = 0; i < this.board.grid.length; i++) {
	        var $row = $("<ul>");
	        for (var j = 0; j < this.board.grid.length; j++) {
	          var $square = $("<li>");
	          $square.data("pos", [i, j]);
	          $row.append($square);
	        }
	        $row.data("row", i);
	        this.$container.append($row);
	      }
	      var $moveCounter = $("<div>تعداد حرکت: " + window.moveCount + "</div>");
	      $moveCounter.addClass("move-counter");
	      this.$container.append($moveCounter);

		  this.board.setUpCars();

		  for (let i = 0; i < this.board.grid.length; i++)
			for (let j = 0; j < this.board.grid[i].length; j++) {
			  let $square = $(`li`).eq(i*this.board.grid.length+j);
			  if(!$square.hasClass("car"))
			  {
				$square.click(() => {
				  let car = this.board.selectedCar;
				  if(car){
					car.moveSteps(car.sameDir([i, j]))
					this.render();
					if (this.board.isWon()) {
						this.handleWin();
					  }
				  }
				});
			  }
			}


	    }
	  }, {
	    key: "handleWin",
	    value: function handleWin() {
	      $(window).off("keydown");
	      $("." + this.board.selectedCar.color).removeClass("selected");
	      $(".win-phrase").addClass("show");
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      this.$container.empty();
	      this.setUpBoard();
	    	//   this.board.setUpCars();
	      if (this.board.selectedCar) {
			let car=this.board.selectedCar;
			car.segments.forEach(function (square) {
				var $square = $("li").eq(square[0] * 6 + square[1]);
				$square.addClass("selected");
			});
	      }
	    }
	  }]);
	  return View;
	}();
	
	exports.default = View;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map