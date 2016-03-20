import DS from 'ember-data';

var Upgrade = DS.Model.extend({

});

/*

 */

Upgrade.reopenClass({
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
     }
 ]
});

export default Upgrade;
