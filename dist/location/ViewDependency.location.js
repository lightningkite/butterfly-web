"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generated by Butterfly TypeScript converter
// File: location/ViewDependency.location.kt
// Package: com.lightningkite.butterfly.location
const GeoCoordinate_1 = require("./GeoCoordinate");
const LocationResult_1 = require("./LocationResult");
//! Declares com.lightningkite.butterfly.location.requestLocation
function xActivityAccessRequestLocation(this_RequestLocation, accuracyBetterThanMeters = 10.0, timeoutInSeconds = 100.0, onResult) {
    navigator.geolocation.getCurrentPosition((position) => {
        var _a, _b, _c, _d;
        return onResult(new LocationResult_1.LocationResult(new GeoCoordinate_1.GeoCoordinate(position.coords.latitude, position.coords.longitude), position.coords.accuracy, (_a = position.coords.altitude) !== null && _a !== void 0 ? _a : undefined, (_b = position.coords.altitudeAccuracy) !== null && _b !== void 0 ? _b : undefined, (_c = position.coords.heading) !== null && _c !== void 0 ? _c : undefined, (_d = position.coords.speed) !== null && _d !== void 0 ? _d : undefined), null);
    }, (err) => onResult(null, err.message), {
        maximumAge: timeoutInSeconds,
        timeout: timeoutInSeconds,
        enableHighAccuracy: accuracyBetterThanMeters <= 100
    });
}
exports.xActivityAccessRequestLocation = xActivityAccessRequestLocation;
//! Declares com.lightningkite.butterfly.location.requestLocationCached
function xActivityAccessRequestLocationCached(this_RequestLocationCached, accuracyBetterThanMeters = 10.0, timeoutInSeconds = 100.0, onResult) {
    navigator.geolocation.getCurrentPosition((position) => {
        var _a, _b, _c, _d;
        return onResult(new LocationResult_1.LocationResult(new GeoCoordinate_1.GeoCoordinate(position.coords.latitude, position.coords.longitude), position.coords.accuracy, (_a = position.coords.altitude) !== null && _a !== void 0 ? _a : undefined, (_b = position.coords.altitudeAccuracy) !== null && _b !== void 0 ? _b : undefined, (_c = position.coords.heading) !== null && _c !== void 0 ? _c : undefined, (_d = position.coords.speed) !== null && _d !== void 0 ? _d : undefined), null);
    }, (err) => onResult(null, err.message), {
        maximumAge: 60 * 60 * 1000,
        timeout: timeoutInSeconds,
        enableHighAccuracy: accuracyBetterThanMeters <= 100
    });
}
exports.xActivityAccessRequestLocationCached = xActivityAccessRequestLocationCached;
//# sourceMappingURL=ViewDependency.location.js.map