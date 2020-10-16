# What is this?

This is an example of how to use micro frontends with react using a javascript approach.

# Setup

## With docker

If you have docker it is pretty simple, the following command will setup and run all the services for you.

`docker-compose up --build`

## Without docker

By running the `setup` script from the root folder you'll have all the dependencies installed and it will also build the micro frontends. Once everything is in place the script will start the `json-server` and the `host-app` for you.

1. `node setup.js`   ... let it finish installing everything

2. Goto HostedApp folder(to run the Hosted app that contains the mfe apps:products and cart mfes)
   right click package.json, launch terminal
   see the start script how it sets a port ... you can change
   see host-app/.env.local and how it sets the port  ... you can change but the ports much match
   npm run start

3. Goto the backend folder
   right click package.json, launch terminal
   npm run start


# Running the app

With both setup options you should be able to visit [http://localhost:3000](http://localhost:3000) where you'll find the app running.

# Parts

## The host-app

It is a React application that wants to be a french bulldog accessory webshop. This one is the responsible for rendering the micro frontends as well.

## Products micro frontend

As it's name implies this tiny React app displays some products in a form of small cards with nice images. The user can add a product to the cart or increase their number by adding them again.

## Cart micro frontend

This one is a small React app that renders a list of products in cart. The user can delete them or modify their number.

## Backend

The backend is a fake REST API created with the `json-server` package. The database consists of products and cart.

## Source

https://github.com/burzaszsolt/react-micro-frontends

https://levelup.gitconnected.com/a-micro-frontend-solution-for-react-1914b19663b
