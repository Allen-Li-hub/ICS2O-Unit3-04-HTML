// Copyright (c) 2022 Allen Li All rights reserved
//
// Created by: Allen Li
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-04-HTML/sw.js", {
    scope: "/ICS2O-Unit3-04-HTML/",
  })
}

/**
 * This function displays an alert.
 */
function calculateVolumeClicked() {
  // input
  const fahrenheit = parseFloat(document.getElementById("fahrenheit").value)

  // process
  const Celsius = (fahrenheit - 32) * (5 / 9)

  // output
  document.getElementById("volume").innerHTML =
    "Celsius is: " + Celsius.toFixed(2) + " °C."
}
