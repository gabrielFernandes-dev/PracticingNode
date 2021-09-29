<h1 align=center>

    Praticing Node.js API

</h1>

### **Description**

This API was made exclusively for academic and portfolio exposure purposes. Here you'll be able to see and test basic CRUD operations in a `Users` context, plus authentication and authorization with the **JTW** lib, and finnaly, you'll be able to see a [Star Wars API](https://swapi.dev) integration. You'll be fully capable of requesting data about characters, starships and planets from the Star Wars Saga Univesrse. You can find some examples of how to do so on the [`requests.http`]('https://github.com/gabrielFernandes-dev/PraticingNodejs/requests.http') file.
<br/>
<br/><br/>

<h2 align=center>

    Running this project

</h2>
<hr>

**Requirements:**  
For running this project first you need to install [Node.js](https://nodejs.org/en/download/) on your computer. You also gonna need to install [Docker](https://docs.docker.com/get-docker/) for persisting data on a **PostgreSQL** database container.  
Once you've done that, open a new terminal and run this command:

<details>
    <summary> <b>HINT</b> </summary>
     Make sure there are no other services running on port <i>5432</i> or you can change it to one that suits you better. If you're on Windows you'll have to open the <code>cmd</code> as an administrator, ohterwise you should probalby run this command with `sudo`.
</details>  
<br/>

```
$ docker run -p 5432:5432 -d \  
-e POSTGRES_USER=postgres \  
-e POSTGRES_PASSWORD=postgres \  
-v pgdta:/var/lib/postgresql/data \   
postgres
```  
_(This command allows you to run the postgresql official image with the needed configuration in the 'background')_

Then, once you're inside the project directory you'll need to run the following command:

 ```
 $ npm install
 ```

_(This command will allow you to install all the project dependecies)_

Once you have all the dependencies installed on your local machine, you must open two separate terminals for running both the Users + StarWarsAPI and Authentication/Authorization requests handling servers.  
So, in the first one you should run:

```
$ npm start  
```

Then, in the second one you should run:

```
$ npm run start:auth
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

    Additional Info

</h2>
<br/>

<p align=center>
Hello there dear visitor! Hope you're enjoying this repo so far, I really put a lotta effort on it and hopefully I'll get a job at backend development soon. <br/> If I may, I'd like to ask for your help at this journey, so if you know any job opportunities, please tell 'em about what you've seen here. <br/>
It'd be a great if I could get the chance of showing what my dedication and power of willing is capable of. <br/>
And also you have any suggestions or criticisms, please feel free to express your opinion,  it's gonna be a huge pleasure to talk to you. Thanks mate!
</p>

#### **Author**:

Gabriel Fernandes, Frontend Developer Jr.

#### **About** :

> - _Brazillian, living on the state of Minas Gerais_
> - _Currently going for a System Analysis and Development degree (Technician Degree)_
> - _Currently working with React, Angular & Ionic/Angular stack in fronted development at Pluritech Brasil LTDA._

#### **Contact:**

- Mail: gabriel.work076@gmail.com
- Phone: _+55 (31) 99782-5681_
