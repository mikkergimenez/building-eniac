import DS from 'ember-data';

var Chapter = DS.Model.extend({
    type: DS.attr("string"),
    text: DS.attr("string"),
    meta: DS.attr("string"),
    goal_value: DS.attr("number"),
    goal_type: DS.attr("string")
});

/**
  * Notes:
  * Prep work began before July of 1943, with purchases and some project work being done in April and May of 1943 (ENIAC in Action, P31)
  * A detailed list of necessary electrical components and instruemnts were drawn up
  * The war department was provided with a list of project staff so background checks/other security measures could be put in place.
  * A Formal letter of intent was sent describing a $150,000 project spread over 15 months.
  * Initial contract was for only six months, with supplemental contracts to be awarded if progress of satisfactory
  * By the end of June a detailed budget was sent to the Moore School's accountants
  *
  * Goldstine worked for the Army, Mauchly and Eckert worked for the Moore's school.
  * P. 32
  * Mauchly and Eckert had to keep teaching while working on the project.
  *
  * 18 named employees (Arthur W. Burks (Ph.D in Philosophy), T. Kite Sharpless, )
  * 9 Total Research Engineers.
  *
  * 5 Lab Engineers
  * 3 Junior Engineers
  * 4 Technicians
  * One assistante Technician
  * Secretary
  *
  * Lamps
  * Hand Tools
  * Drawing Tables
  * Drawers
  * Light Machine Tools
  * Safety Equipment
  *
  * John Brainerd wrote: "To build a staff, obtain materials, and carry on at double quick speed during the middle of the war was ... a task of 60 to 80 hours per week for the leaders, with much of the work futile, promises unkept, goods diverted, and mental breakdowns lurking around each weekend."
  *
  * Page 33
  *
  * Build an electronic version of [an] ordinary computing machine.
  *
  * Electronic Pulses, the number 7 is transmitted by passing seven pulses down a wire.
  * Invented a "Decade counteR"
  *
  * An accumulator contained eight decades and a PM counter, Single integer of up to 8 digits
  * P 34
  * Size of the accumulator was increased to ten digits in order to reduce rounding error.  They wanted 5 digit accuracy of results
  *
  * Page 35 -> 2 accumulator test to justify contract extensions and budget increases.
  * Targetted for August of 1944
  *
  * P. 36 -> The design of the accumulator unit was completed in October/November of 1943.
  * Operations were triggered by special "program pulses" carried into special input and output termianls attached directly to the program controls on a network of wires known as "program lines".
  * Accumulators were synchronized by a "Cycling Unit"
  */



Chapter.reopenClass({
  FIXTURES: [
    {
      id: 1,
      type: "text",
      meta: "",
      text: "In July of 1943, work began in secret on \"Project PX\" at the University of Pennsylvania's Moore School of Electrical Engineering",
      goal_value: 10,
      goal_type: "time"
    },
    {
      id: 2,
      type: "text",
      meta: "",
      text: "The ENIAC (Electronic Numerical Integrator And Computer) was to be the world's first electronic computer.",
      goal_value: 10,
      goal_type: "time"
    },
    {
      id: 3,
      type: "text-image",
      meta: "images/General_electric_pliotron_pp_schenectady_3.jpg",
      text: "Vaccuum tubes were the key technology involved in it's creation.  Over 17,000 were used in it's final creation.",
      goal_value: 10,
      goal_type: "time"
    },
    {
      id: 4,
      type: "text",
      meta: "",
      text: "You better start building.",
      goal_value: 10,
      goal_type: "time"
    },
    {
      id: 5,
      type: "game",
      meta: "images/us_army/eniac10.png",
      text: "\"U.S. Army Photo\", from K. Kempf, \"Historical Monograph: Electronic Computers Within the Ordnance Corps\" The ENIAC, in BRL building 328. Left: Glen Beck Right: Frances Elizabeth Snyder Holberton",
      goal_value: 60,
      goal_type: "time"
    },
    {
      id: 6,
      type: "game",
      meta: "images/us_army/eniac9.png",
      text: "\"U.S. Army Photo\", from K. Kempf, \"Historical Monograph: Electronic Computers Within the Ordnance Corps\" The ENIAC, in BRL building 328. Left: Glen Beck Right: Frances Elizabeth Snyder Holberton",
      goal_value: 60,
      goal_type: "time"
    },
    {
      id: 7,
      type: "game",
      meta: "images/us_army/eniac5.png",
      text: "\"U.S. Army Photo\", from K. Kempf, \"Historical Monograph: Electronic Computers Within the Ordnance Corps\" The ENIAC, in BRL building 328. Left: Glen Beck Right: Frances Elizabeth Snyder Holberton",
      goal_value: 60,
      goal_type: "time"
    },
    {
      id: 8,
      type: "game",
      meta: "images/us_army/eniac2.png",
      text: "\"U.S. Army Photo\", from K. Kempf, \"Historical Monograph: Electronic Computers Within the Ordnance Corps\" The ENIAC, in BRL building 328. Left: Glen Beck Right: Frances Elizabeth Snyder Holberton",
      goal_value: 60,
      goal_type: "time"
    },
    {
      id: 9,
      type: "game",
      meta: "images/us_army/eniac1.png",
      text: "\"U.S. Army Photo\", from K. Kempf, \"Historical Monograph: Electronic Computers Within the Ordnance Corps\" The ENIAC, in BRL building 328. Left: Glen Beck Right: Frances Elizabeth Snyder Holberton",
      goal_value: 60,
      goal_type: "time"
    },
    {
      id: 10,
      type: "game",
      meta: "images/us_army/eniac1.png",
      text: "By August 1944, the Moore school had completed a prototype, using 2 accumulators that proved computation could be carried out reliably using vacuum tubes.",
      reference: "eniac_in_action 35",
      goal_value: 2,
      goal_type: "accumulator"
    },
    {
      id: 100,
      type: "text-animation",
      meta: "",
      text: "Let's turn it on",
      goal_value: 60,
      goal_type: "time"
    },
    {
      id: 101,
      type: "text-animation",
      meta: "flicker",
      text: "The ENIAC consumed 150,000 Watts of Electricity.  That would be about $13,392 per month at today's average of 12 cents per killowatt hour.",
      goal_value: 10,
      goal_type: "time"
  },
    {
      id: 102,
      type: "text",
      text: "There was a rumor that when turned on the ENIAC caused the city of Philadelphia to experience brownouts, however, this was first reported incorrectly by the Philadelphia Bulletin in 1946 and since then has become an urban myth.",
      reference: "http://inventors.about.com/od/estartinventions/a/Eniac.htm",
      goal_value: 10,
      goal_type: "time"
  },
  {
      id: 105,
      type: "text-animation",
      meta: "images/General_electric_pliotron_pp_schenectady_3.jpg",
      text: "This is the Eniac on a chip, a chip designed in 1997 to replicate the logic of an ENIAC"
  }
  ]
});

export default Chapter;
