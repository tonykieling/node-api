# Backend Assessment - Blog Posts

**How to run the app**  
1. run `'npm i'` to install the dependencies,
2. run `'npm start'` to initialize the app,
3. make requests :)

* One possible way to consume the API may be by other application, postman, curl, and so on.  
curl example: `curl -X GET http://localhost:3456/api/posts?tags=culture,tech,health,history&sortBy=id&direction=asc`

The default TCP port is 3456. 
In case to set another port, please go to `./index.js` and change the binding called `PORT`. Another way is setting a env variable `PORT`.

Route tests may be perfomed running `node ./test/routesTest.js` - feel free to change the parameters.

Regards,  
Tony Kieling