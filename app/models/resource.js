/*

accumulator serves as an memory and arithmatic unit which can store and operate on a number having as many as 10 digits with its sign indication
                         It contains a 10 by 10 block of vaccuum tubes.
                         There were 10 accumulators in the final ENIAC.
*/
import DS from 'ember-data';

var Resource = DS.Model.extend({
    simple: DS.attr("boolean"),
    text: DS.attr("string"),
    max: DS.attr("number"),
    current: DS.attr("number"),
    image: DS.attr("string")
});

Resource.reopenClass({
  FIXTURES: [
    {
      id: 1,
      simple: true,
      text: "Vacuum Tubes",
      max: "17468",
      current: 1,
      image: "General_electric_pliotron_pp_schenectady_3.jpg",
    },
    {
      id: 2,
      simple: true,
      text: "Resistors",
      max: "70000",
      current: 0,
      image: "1940_resistor.jpg"
    },
    {
      id: 3,
      simple: true,
      text: "Capacitors",
      max: "10000",
      current: 0,
      image: "1940_capacitor.jpg"
    },
    {
      id: 4,
      simple: true,
      text: "Relays",
      max: "1500",
      current: 0,
      image: "relay.jpg"
    },
    {
      id: 5,
      simple: true,
      text: "Hand-Soldered Joints",
      max: "5000000",
      current: 0,
      image: "solder_joint.jpg",
    },
    {
      id: 6,
      simple: true,
      text: "Manual Switches",
      max: "6000",
      current: 0,
      image: "switch.jpg",
    },
    {
      id: 7,
      simple: true,
      text: "Panels",
      max: "6000",
      current: 0,
      image: "eniac_accumulator.jpg",
    },
  ]
});

export default Resource;
