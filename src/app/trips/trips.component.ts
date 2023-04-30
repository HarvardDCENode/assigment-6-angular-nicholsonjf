import { Component } from '@angular/core';


@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent {
  trips = [
    {
      name: "The Great Pickle Parade",
      description: "We traveled to the Pickle Capital of the World for the annual pickle festival",
      startDate: new Date("2023-08-01"),
      endDate: new Date("2023-08-05")
    },
    {
      name: "The Bubble Bath Expedition",
      description: "We ventured into the wilderness to find the world's largest natural bubble bath",
      startDate: new Date("2023-09-10"),
      endDate: new Date("2023-09-14")
    },
    {
      name: "The Cheese Wheel Odyssey",
      description: "We drove across the country in search of the perfect cheese wheel",
      startDate: new Date("2023-10-01"),
      endDate: new Date("2023-10-15")
    },
    {
      name: "The Spork Safari",
      description: "We explored the wilds of Africa with nothing but sporks for utensils",
      startDate: new Date("2024-01-01"),
      endDate: new Date("2024-01-14")
    },
    {
      name: "The Epic Donut Dash",
      description: "We raced across the country to see who could eat the most donuts in one sitting",
      startDate: new Date("2024-02-10"),
      endDate: new Date("2024-02-14")
    },
    {
      name: "The Pineapple Pilgrimage",
      description: "We journeyed to Hawaii to pay homage to the mighty pineapple",
      startDate: new Date("2024-04-01"),
      endDate: new Date("2024-04-10")
    },
    {
      name: "The Lobster Lollapalooza",
      description: "We indulged in a week-long lobster feast in Maine",
      startDate: new Date("2024-06-01"),
      endDate: new Date("2024-06-07")
    },
    {
      name: "The Tuba Tour",
      description: "We took a road trip across the country playing our tubas at every stop",
      startDate: new Date("2024-07-01"),
      endDate: new Date("2024-07-14")
    },
    {
      name: "The Sasquatch Search",
      description: "We trekked through the Pacific Northwest in search of Bigfoot",
      startDate: new Date("2024-08-01"),
      endDate: new Date("2024-08-10")
    },
    {
      name: "The Unicorn Uproar",
      description: "We caused chaos at a unicorn-themed amusement park",
      startDate: new Date("2024-09-01"),
      endDate: new Date("2024-09-05")
    },
    {
      name: "The Potato Party",
      description: "We celebrated all things potato with a week-long festival in Idaho",
      startDate: new Date("2024-10-01"),
      endDate: new Date("2024-10-07")
    },
    {
      name: "The Pirate Plunder",
      description: "We sailed the high seas in search of treasure",
      startDate: new Date("2025-01-01"),
      endDate: new Date("2025-01-14")
    },
    {
      name: "The Spicy Salsa Soiree",
      description: "We tested our spice tolerance at a salsa festival in New Mexico",
      startDate: new Date("2025-03-01"),
      endDate: new Date("2025-03-05")
    }
  ];
}

