<p align=center>
    <img src="https://nodejs.org/static/images/logo.svg">
</p>

<h1 align=center>
    Practicing Node.js API
</h1>

<p align=center>
    <a href="#desc">Description</a> | <a href="#run">Run Locally</a> | <a href="#"></a> | <a href="#"></a>
</p>


<h2 id="desc"> 
    Description 
</h2>

This API was made exclusively for academic and portfolio exposure purposes. Here you'll be able to see and test basic CRUD operations in a `Users` context, plus authentication and authorization with the [**JTW**](https://www.npmjs.com/package/jsonwebtoken) lib, and finnaly, you'll be able to see a [Star Wars API](https://swapi.dev) integration (which depends on a login to have access to it). You'll be fully capable of requesting data about characters, starships and planets from the Star Wars Saga Univesrse. You can find some examples of how to do so on the [`requests.http`](https://github.com/gabrielFernandes-dev/PraticingNode/blob/master/requests.http) file.  
Thanks to the JWT library, on this API you'll be able to request a new token since your first access token expires in a gap of ***3 minutes*** after logging in (feel free to lower or increase it on your pc). For the database, I went for a ***PostgreSQL*** instance running on a ***Docker*** [container](https://www.docker.com/resources/what-container). I also wen't for a [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping) instead of writing queries myself. In my case, I chose to use [Sequelize ORM](https://sequelize.org).

<details>
    <summary> :exclamation: <b>Quick Tip</b> </summary>
    If you're on VSCode, check out the <a href="https://marketplace.visualstudio.com/items?itemName=humao.rest-client" target="_blank">RestClient</a> extension. This is what the <code>.http</code> file is for.
</details>  

<br/>
<br/>
    
<h2 id="run">
    Running Locally 
</h2>

**Requirements:**  
For running this project first you need to install [Node.js](https://nodejs.org/en/download/) on your computer. You also gonna need to install [Docker](https://docs.docker.com/get-docker/) for persisting data on a **PostgreSQL** database container.  
Once you've done that, open a new terminal and run this command:

<details>
    <summary> :warning: <b>HINT</b> </summary>
     Make sure there are no other services running on port <i>5432</i> or you can change it to one that suits you better. If you're on Windows you should try opening <code>cmd</code> as an administrator, ohterwise you should probably run this command as superuser with the <code>sudo</code> command.
</details>  
<br/>

```
docker run -p 5432:5432 -d \  
-e POSTGRES_USER=postgres \  
-e POSTGRES_PASSWORD=postgres \  
-v pgdta:/var/lib/postgresql/data \   
postgres
```  
_(This command allows you to run the postgresql official image with the needed configuration in the 'background')_
<br/>


Then, once you're inside the project directory you'll need to run the following commands:


```
 npx sequelize db:migrate
```
_(This will do the hard work for you and handle the creation of the necessary tables)_.

 ```
  npm install
 ```
_(This command will install all the project dependecies)_

Once you have all the dependencies installed on your local machine, you must open ***two separate terminals*** for running both the Users + StarWarsAPI and Authentication/Authorization requests handling servers.  
So, in the first one, run:

```
 npm start  
```

Then run this in the next one:

```
 npm run start:auth
```

<p align=center>
This wraps things up. Your server should be up and running by now. Have fun and don't forget...
</p>
<p align=center>  
May the froce be with you!
</p>
<br/>
<hr>
<h2 align=center>

    Plus

</h2>
<br/>

<p align=center>
Hello there dear visitor! Hope you're enjoying this repo so far, I really put a lotta effort on it and hopefully I'll get a job at backend development soon. <br/> If I may, I'd like to ask for your help at this journey, so if you know any job opportunities, please tell 'em about what you've seen here. <br/>
It'd be a great if I could get the chance of showing what my dedication and power of willing is capable of. <br/>
And also you have any suggestions or criticisms, please feel free to express your opinion,  it's gonna be a huge pleasure to talk to you and learn what you have to tell me.
</p>

#### **Author**:

Gabriel Fernandes, Frontend Developer Jr.

#### **About Me** :

> - _Brazillian, living on the state of Minas Gerais_
> - _Currently going for a System Analysis and Development degree (Technician Degree)_
> - _Currently working with a stack which contains React, Angular and Ionic/Angular as an intern in fronted development at Pluritech Brasil LTDA._

#### **Contact:**

- Mail: gabriel.work076@gmail.com
- Phone: _+55 (31) 99782-5681_
