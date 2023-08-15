Here is a frontend challenge I did for encord - the task can be found here (as of 15/08/2023): https://encord.com/static/encord-frontend-challenge-06ac443cdfeb4b088ed4723631364918.pdf

The task involved creating a frontend app with 2 tabs, each table containing a table and some basic functionality to simulate submitting then viewing some analysis tasks.

This app is fundamnetally quite similar to my Spot the Imag-gen Difference app I made https://github.com/rorymcd98/spot-the-image-gen

# To run:

The JSON server should start concurrently (apologies npm users :))

`yarn build && yarn preview`

or

`yarn dev`

# What I think I did well?:

- File structure is sensible.
- Component organisation is good, not too much drilling.
- `Table.tsx` is cool/reusable-ish - it accepts a component and a generic then renders table rows.
- I think I demonstrate a good grasp of TypeScript, using some features like `Omit`, `generics`, `as const` etc.

# What I could have done better?:

- Obviously UI needs work. I could have also reused some button components and such.
- Used different packages:
  - Zustand - stores are just better than contexts in most situations imo.
  - Zod (schema validation) - I heard you guys (encord) use a cool python-typescript package which does this so I didn't feel the need to demonstrate Zod.
  - Elastic EUI components - Prebuilt UI components would have made a nicer looking app, but I would not have been able to demonstrate tailwind.
  - React-query - This would have given me some nicer status messages for calling the API, but axios was sufficient for this use.
- App.tsx was getting a bit top-heavy, I could have wrapped all the context providers in a single component.
- My PredictModal isn't well implemented - you can end up with dozens of modals as there is no 'global' modal.
- Improved linting, config, cleanup of unused depencies and files, better management of `package.json`

# Where I deviated from the brief:

- There is no 'cancel' button in the dialogue, rather an X to close.
- My timestamps are just date time
- I opted for multi color b-boxes without a coloured background.
