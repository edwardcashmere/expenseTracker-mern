# ExpenseTracker-mern
# React-Node-Context-Mongo Application

## Expense Tracker
This application is an **Expense tracker** for tracking Income vs Expense.Built with mern stack with context api for state management


## Run Locally

To run the app locally, clone the repository then proceed to run add environment variables for your mongoDB setup. Then run the command :-

```bash
npm run project-local

```

This script will install all the dependencies and run your development server.Start using the application.




## production deployment 2

This deployment will be done on a digital ocean server, a script has been added to the package.json file to make the deployment
as easy as possible.

However to set up the server ,google ``server set-up for node application ubuntu server`` and pick the digital ocean documentation.
The digital ocean documentation is clear and precise on the steps to take and commands to run to set up the server successfuly. 

After which you can run 

```bash
npm run prod 

```

This will do all dependency install and start the application. You can check by typing your server ip with the port 8080 included  i.e ` 172:89:54:30:8080` this will take you to the login page. 


You will notice the app will be running on the foreground,and this is not adviced ,install pm2 with command 

```bash
npm i pm2 -g

```

If you run into a permission problem add sudo to the start of the command. Use pm2 to run your application.

```bash
npm run prod2

```

This script the same as the `npm run prod` script but now this will run your application in the background.


## Author

>EDWIN OMONDI



