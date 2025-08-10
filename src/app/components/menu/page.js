'use client'

import { motion } from "framer-motion";

export default function MenuComponent(){
      const menu = [
    {
      title: "Combos (Includes Large Fry & Drink)",
      items: [
        { name: "2 Hot Dogs", desc: "Classic grilled franks served in a fresh bun.", price: "$11.50" },
        { name: "2 Cheese Jalapeño Smoked Sausages", desc: "Bold, smoky flavor with a spicy kick.", price: "$12.00" },
        { name: "Hamburger", desc: "Juicy 1/3 lb patty with crisp lettuce, tomato, and pickles.", price: "$10.00" },
        { name: "Cheeseburger", desc: "Our classic burger topped with melted American cheese.", price: "$11.00" },
        { name: "Chili Cheeseburger", desc: "Smothered in savory chili and cheddar cheese.", price: "$13.00" }
      ],
    },
    {
      title: "Pizza",
      items: [
        { name: '7" Cheese', desc: "Perfectly melted cheese on a golden crust.", price: "$7.00" },
        { name: 'Pepperoni', desc: "", price: "+ $1.00" },
        { name: 'Veggies', desc: "Onions, Peppers, Olives", price: "+ $1.00" },
      ],
    },
    {
      title: "Salads",
      items: [
        { name: "Simple Salad", desc: "Fresh greens with tomato and cucumber.", price: "$5.00" },
        { name: "Chef Salad", desc: "Loaded with ham, turkey, cheese, and boiled egg.", price: "$7.00" },
        { name: "Deluxe Salad", desc: "Chef salad plus extra toppings for hearty flavor.", price: "$9.00" }
      ],
    },
    {
      title: "À La Carte",
      items: [
        { name: "Fries", desc: "Crispy golden fries with a fluffy center.", price: "$5.00" },
        { name: "Hot Dog", desc: "Classic grilled frank with your choice of toppings.", price: "$3.00" },
        { name: "Chili Cheese Dog", desc: "Topped with savory chili and melted cheddar.", price: "$5.00" },
        { name: "Philly Cheesesteak Sandwich", desc: "Steak and cheese with jalapeño popper heat.", price: "$?.00" },
        { name: "Cheese Jalapeño Sausage on Bun", desc: "Smoky, cheesy, and perfectly spiced.", price: "$4.00" },
        { name: "1/3 lb Hamburger", desc: "Thick, juicy patty grilled to perfection.", price: "$5.00 + $1 for cheese" }
      ],
    },
    {
      title: "Add-Ons",
      items: [
        { name: "Cheese Sauce", desc: "Creamy, rich cheese blend.", price: "$1.00" },
        { name: "Chili", desc: "Hearty beef chili with a savory kick.", price: "$1.50" }
      ],
    },
    {
      title: "Drinks ($2.50 each)",
      items: [
        { name: "Coke", desc: "", price: "" },
        { name: "Sprite", desc: "", price: "" },
        { name: "Mountain Dew", desc: "", price: "" },
        { name: "Fanta Orange", desc: "", price: "" },
        { name: "Water", desc: "", price: "" }
      ],
    },
  ];
  
    return(
        <>
            <section className="py-20 bg-amber-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl text-amber-900 mb-12 text-center"
                >
                Our Menu
                </motion.h2>

                {menu.map((category, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h3 className="text-3xl font-semibold text-amber-800 mb-3">
                    {category.title}
                    </h3>
                    <ul className="divide-y divide-gray-200">
                    {category.items.map((item, i) => (
                <li
                    key={i}
                    className="py-3 flex flex-col sm:flex-row sm:justify-between"
                    >
                    <div className="flex flex-col">
                        <p className="font-medium text-amber-900">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                    <span className="text-amber-800 font-semibold mt-2 sm:mt-0 sm:ml-4">
                        {item.price}
                    </span>
                    </li>
                    ))}
                    </ul>
                </motion.div>
                ))}
            </div>
            </section>
        </>
    )
}