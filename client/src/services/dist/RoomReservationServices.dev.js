"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteRoom = exports.updateRoomReservationDetails = exports.getHotelRoomId = exports.getRoomDetailsByDate = exports.getAllReservedRoomsOfAHotel = exports.getAllAvailableRoomsOfAHotel = exports.getAllRoomsOfAReserver = exports.getAllRoomsOfAHotel = exports.createRoomReservation = void 0;

var _token = require("../utils/token");

var axios = require('axios');

var BASE_URL = "http://localhost:4000/rooms";

var createRoomReservation = function createRoomReservation(roomPayload) {
  var response;
  return regeneratorRuntime.async(function createRoomReservation$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.post(BASE_URL, roomPayload, {
            headers: {
              'Access-Control-Allow-Origin': "*",
              'Access-Control-Allow-Headers': "Content-Type",
              'Authorization': 'Bearer ' + (0, _token.getToken)()
            }
          }));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", {
            ok: true,
            data: response.data
          });

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", {
            ok: false,
            error: _context.t0
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.createRoomReservation = createRoomReservation;

var getAllRoomsOfAHotel = function getAllRoomsOfAHotel(hotelName) {
  var response;
  return regeneratorRuntime.async(function getAllRoomsOfAHotel$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(axios.post(BASE_URL + "/" + hotelName, {
            headers: {
              'Access-Control-Allow-Origin': "*",
              'Access-Control-Allow-Headers': "Content-Type",
              'Authorization': 'Bearer ' + (0, _token.getToken)()
            }
          }));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", {
            ok: true,
            data: response.data
          });

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", {
            ok: false,
            error: _context2.t0
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllRoomsOfAHotel = getAllRoomsOfAHotel;

var getAllRoomsOfAReserver = function getAllRoomsOfAReserver(reserver) {
  var response;
  return regeneratorRuntime.async(function getAllRoomsOfAReserver$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(axios.post(BASE_URL + "/reserver/" + reserver, {
            headers: {
              'Access-Control-Allow-Origin': "*",
              'Access-Control-Allow-Headers': "Content-Type",
              'Authorization': 'Bearer ' + (0, _token.getToken)()
            }
          }));

        case 3:
          response = _context3.sent;
          return _context3.abrupt("return", {
            ok: true,
            data: response.data
          });

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", {
            ok: false,
            error: _context3.t0
          });

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllRoomsOfAReserver = getAllRoomsOfAReserver;

var getAllAvailableRoomsOfAHotel = function getAllAvailableRoomsOfAHotel(hotelName) {
  var response;
  return regeneratorRuntime.async(function getAllAvailableRoomsOfAHotel$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(axios.get(BASE_URL + "/" + hotelName + "/available", {
            headers: {
              'Access-Control-Allow-Origin': "*",
              'Access-Control-Allow-Headers': "Content-Type",
              'Authorization': 'Bearer ' + (0, _token.getToken)()
            }
          }));

        case 3:
          response = _context4.sent;
          return _context4.abrupt("return", {
            ok: true,
            data: response.data
          });

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", {
            ok: false,
            error: _context4.t0
          });

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllAvailableRoomsOfAHotel = getAllAvailableRoomsOfAHotel;

var getAllReservedRoomsOfAHotel = function getAllReservedRoomsOfAHotel(hotelName) {
  var response;
  return regeneratorRuntime.async(function getAllReservedRoomsOfAHotel$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(axios.get(BASE_URL + "/" + hotelName + "/reserved", {
            headers: {
              'Access-Control-Allow-Origin': "*",
              'Access-Control-Allow-Headers': "Content-Type",
              'Authorization': 'Bearer ' + (0, _token.getToken)()
            }
          }));

        case 3:
          response = _context5.sent;
          return _context5.abrupt("return", {
            ok: true,
            data: response.data
          });

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", {
            ok: false,
            error: _context5.t0
          });

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getAllReservedRoomsOfAHotel = getAllReservedRoomsOfAHotel;

var getRoomDetailsByDate = function getRoomDetailsByDate(hotelName, room, date) {
  var response;
  return regeneratorRuntime.async(function getRoomDetailsByDate$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(axios.get("".concat(BASE_URL, "/").concat(hotelName, "/").concat(room, "/").concat(date), {
            headers: {
              'Access-Control-Allow-Origin': "*",
              'Access-Control-Allow-Headers': "Content-Type",
              'Authorization': 'Bearer ' + (0, _token.getToken)()
            }
          }));

        case 3:
          response = _context6.sent;
          return _context6.abrupt("return", {
            ok: true,
            data: response.data
          });

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", {
            ok: false,
            error: _context6.t0
          });

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getRoomDetailsByDate = getRoomDetailsByDate;

var getHotelRoomId = function getHotelRoomId(hotelName, room) {
  var response;
  return regeneratorRuntime.async(function getHotelRoomId$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(axios.get("".concat(BASE_URL, "/").concat(hotelName, "/").concat(room), {
            headers: {
              'Access-Control-Allow-Origin': "*",
              'Access-Control-Allow-Headers': "Content-Type",
              'Authorization': 'Bearer ' + (0, _token.getToken)()
            }
          }));

        case 3:
          response = _context7.sent;
          return _context7.abrupt("return", {
            ok: true,
            data: response.data
          });

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", {
            ok: false,
            error: _context7.t0
          });

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.getHotelRoomId = getHotelRoomId;

var updateRoomReservationDetails = function updateRoomReservationDetails(hotelName, room, updatePayload) {
  var response;
  return regeneratorRuntime.async(function updateRoomReservationDetails$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return regeneratorRuntime.awrap(axios.put("".concat(BASE_URL, "/").concat(hotelName, "/").concat(room), updatePayload, {
            headers: {
              'Access-Control-Allow-Origin': "*",
              'Access-Control-Allow-Headers': "Content-Type",
              'Authorization': 'Bearer ' + (0, _token.getToken)()
            }
          }));

        case 3:
          response = _context8.sent;
          return _context8.abrupt("return", {
            ok: true,
            data: response.data
          });

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", {
            ok: false,
            error: _context8.t0
          });

        case 10:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.updateRoomReservationDetails = updateRoomReservationDetails;

var deleteRoom = function deleteRoom(hotelName, room) {
  var response;
  return regeneratorRuntime.async(function deleteRoom$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return regeneratorRuntime.awrap(axios.delete("".concat(BASE_URL, "/").concat(hotelName, "/").concat(room), {
            headers: {
              'Access-Control-Allow-Origin': "*",
              'Access-Control-Allow-Headers': "Content-Type",
              'Authorization': 'Bearer ' + (0, _token.getToken)()
            }
          }));

        case 3:
          response = _context9.sent;
          return _context9.abrupt("return", {
            ok: true,
            data: response.data
          });

        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", {
            ok: false,
            error: _context9.t0
          });

        case 10:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.deleteRoom = deleteRoom;
//# sourceMappingURL=RoomReservationServices.dev.js.map
