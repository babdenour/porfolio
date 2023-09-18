'use client'

import { Fragment } from 'react'
import { useSnapshot } from "valtio";
import { state } from "@/app/utils/state";
import traduction from '@/app/utils/traduction.json'
import { Tab } from '@headlessui/react'


let tabs = [
  {
    name: 'OPEN NET SARL',
    features: [
      {
        name: 'Dev Full-Stack Vue.Js/Python/odoo. Lausanne',
        description:
          `Mise en place d'une interface de gestion des données d'une application d'équivalence CO2. Via les technologies utilisées, Piccolo ORM, Vue.Js, PostgreSQL
          Modification des processus et document dans l'ERP Odoo via Python ORM Odoo, PostgreSQL, XML, CSS`,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg',
        imageAlt: 'Maple organizer base with slots, supporting white polycarbonate trays of various sizes.',
      },
    ],
  },
  {
    name: 'Material',
    features: [
      {
        name: 'Natural wood options',
        description:
          'Organize has options for rich walnut and bright maple base materials. Accent your desk with a contrasting material, or match similar woods for a calm and cohesive look. Every base is hand sanded and finished.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg',
        imageAlt:
          'Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment.',
      },
    ],
  },
  {
    name: 'Considerations',
    features: [
      {
        name: 'Helpful around the home',
        description:
          "Our customers use Organize throughout the house to bring efficiency to many daily routines. Enjoy Organize in your workspace, kitchen, living room, entry way, garage, and more. We can't wait to see how you'll use it!",
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-03.jpg',
        imageAlt: 'Walnut organizer base with white polycarbonate trays in the kitchen with various kitchen utensils.',
      },
    ],
  },
  {
    name: 'Included',
    features: [
      {
        name: "Everything you'll need",
        description:
          'The Organize base set includes the pen, phone, small, and large trays to help you group all your essential items. Expand your set with the drink coaster and headphone stand add-ons.',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-04.jpg',
        imageAlt: 'Walnut organizer system on black leather desk mat on top of white desk.',
      },
    ],
  },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function WorkCards() {
  const snap = useSnapshot(state);
  const index = snap.lang === "en" ? 0 : 1;

  tabs = traduction.work[index]

  return (
    <div className="relative isolate bg-gray-900 m-auto flex place-items-center justify-center rounded-3xl overflow-hidden">
      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
              {traduction.workcard[index].title}
            </h2>
          </div>

          <Tab.Group as="div" className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-gray-200 px-4 sm:px-0">
                <Tab.List className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className={({ selected }) =>
                        classNames(
                          selected
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                          'whitespace-nowrap border-b-2 py-6 text-sm font-medium'
                        )
                      }
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
            </div>

            <Tab.Panels as={Fragment}>
              {tabs.map((tab) => (
                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:col-span-5 lg:mt-0">
                        <h3 className="text-lg font-medium ">{feature.name}</h3>
                        <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                      </div>
                      <div className="lg:col-span-7">
                        <div className="aspect-h-1 aspect-w-2 overflow-hidden rounded-lg sm:aspect-h-2 sm:aspect-w-5">
                          <img src={feature.imageSrc} alt={feature.imageAlt + tab.name} className="object-cover object-center" />
                        </div>
                      </div>
                    </div>
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  )
}
