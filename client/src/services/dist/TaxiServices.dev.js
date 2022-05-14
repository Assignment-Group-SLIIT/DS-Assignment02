"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTaxiReservation = exports.getOneTaxiReservation = exports.getUserAllTaxiReservations = exports.createTaxiReservation = void 0;

var _token = require("../utils/token");

var axios = require('axios');

var BASE_URL = "http://localhost:4000/taxis";

var createTaxiReservation = function createTaxiReservation(taxiPayload) {
  var response;
  return regeneratorRuntime.async(function createTaxiReservation$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.post(BASE_URL, taxiPayload, {
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

exports.createTaxiReservation = createTaxiReservation;

var getUserAllTaxiReservations = function getUserAllTaxiReservations(user) {
  var response;
  return regeneratorRuntime.async(function getUserAllTaxiReservations$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(axios.get("".concat(BASE_URL, "/").concat(user), {
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

exports.getUserAllTaxiReservations = getUserAllTaxiReservations;

var getOneTaxiReservation = function getOneTaxiReservation(user, date) {
  var response;
  return regeneratorRuntime.async(function getOneTaxiReservation$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(axios.get("".concat(BASE_URL, "/").concat(user, "/").concat(date), {
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
}; // export const updateTaxiReservation = async (user, date) => {
//     try {
//         const response = await axios.put(`${BASE_URL}/${user}/${date}`, updatePayload, {
//             headers: {
//                 'Access-Control-Allow-Origin': "*",
//                 'Access-Control-Allow-Headers': "Content-Type",
//                 'Authorization': 'Bearer ' + getToken()
//             }
//         });
//         return {
//             ok: true,
//             data: response.data
//         }
//     } catch (error) {
//         return {
//             ok: false,
//             error: error
//         }
//     }
// }


exports.getOneTaxiReservation = getOneTaxiReservation;

var deleteTaxiReservation = function deleteTaxiReservation(user, date) {
  var response;
  return regeneratorRuntime.async(function deleteTaxiReservation$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(axios["delete"]("".concat(BASE_URL, "/").concat(user, "/").concat(date), {
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

exports.deleteTaxiReservation = deleteTaxiReservation;
//# sourceMappingURL=TaxiServices.dev.js.map
