# AplikasiCloud
Linux Debian


Enjoy, experiment, share your results!

Clone Data
~~~
  $ git clone 
~~~
Cek direktori
~~~
$ mkdir data
$ ls -la
total ..
drwxr-xr-x 4 bpdp users  4096 Dec 15 11:00 .
drwxr-xr-x 8 bpdp users  4096 Dec 13 21:31 ..
...
...
...
drwxr-xr-x 2 bpdp users  4096 Dec 12 08:05 data
...
...
...
$ mongod --dbpath ./data --rest
~~~
Install monggoDB
~~~
	$ sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com --recv EA312927
	$ echo "deb http://repo.mongodb.org/apt/debian wheezy/mongodb-org/3.2 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
	$ sudo apt-get update
	$ sudo apt-get install -y mongodb-org
	$ sudo apt-get install -y mongodb-org=3.2.0 mongodb-org-server=3.2.0 mongodb-org-shell=3.2.0 mongodb-org-mongos=3.2.0 mongodb-org-tools=3.2.0
~~~
- Maka akan tambil seperti berikut
~~~
echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-org-shell hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
~~~
~~~
  - The MongoDB instance stores its data files in /var/lib/mongodb 
	- its log files in /var/log/mongodb by default, and runs using the mongodb user account. You can specify alternate log and data file directories in /etc/mongod.conf. See systemLog.path and storage.dbPath for additional information. 
	- If you change the user that runs the MongoDB process, you must modify the access control rights to the /var/lib/mongodb and /var/log/mongodb directories to give this user access to these directories.
	- sudo service mongod start
	- sudo service mongod stop
	- sudo service mongod restart
~~~
untuk uninstall
~~~	
	- sudo service mongod stop
	- sudo apt-get purge mongodb-org*
	- sudo rm -r /var/log/mongodb
	- sudo rm -r /var/lib/mongodb
~~~
Jalankan MonggoDB
~~~
root@zero:/home/rayzal/GithubFiles/OnlineLibrary/express-mongoose-mvc# mongo
MongoDB shell version: 3.2.0
connecting to: test
Server has startup warnings: 
2015-12-12T00:12:47.177+0700 I CONTROL  [initandlisten] 
2015-12-12T00:12:47.177+0700 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/defrag is 'always'.
2015-12-12T00:12:47.177+0700 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
2015-12-12T00:12:47.177+0700 I CONTROL  [initandlisten] 
> exit
bye
root@zero:/home/rayzal/GithubFiles/OnlineLibrary/express-mongoose-mvc# mongo status
MongoDB shell version: 3.2.0
connecting to: status
Server has startup warnings: 
2015-12-12T00:12:47.177+0700 I CONTROL  [initandlisten] 
2015-12-12T00:12:47.177+0700 I CONTROL  [initandlisten] ** WARNING: /sys/kernel/mm/transparent_hugepage/defrag is 'always'.
2015-12-12T00:12:47.177+0700 I CONTROL  [initandlisten] **        We suggest setting it to 'never'
2015-12-12T00:12:47.177+0700 I CONTROL  [initandlisten] 
> 
~~~
Selanjutnya jalankan populate.js
~~~
root@zero:/home/rayzal/GithubFiles/OnlineLibrary/express-mongoose-mvc# mongo populate.js 
MongoDB shell version: 3.2.0
connecting to: test
connecting to: localhost:27017/mydb
~~~
Selanjutnya entry data
~~~
$ mongo
MongoDB shell version: 2.6.0
connecting to: test
> db
test
> use mydb
switched to db mydb
> show dbs
local	(empty)
> emp1 = { name : "Zaky", address : "Griya Purwa Asri" }
{ "name" : "Zaky", "address" : "Griya Purwa Asri" }
> emp2 = { name : "Ahmad", address : "Purwomartani", email : "zakyahmadaditya@gmail.com" }
{
	"name" : "Ahmad",
	"address" : "Purwomartani",
	"email" : "zakyahmadaditya@gmail.com"
}
> emp3 = { name : "Aditya", address : "Kalasan", phone: "08787878787" }
{ "name" : "Aditya", "address" : "Kalasan", "phone" : "08787878787" }
> db.employees.insert( emp1 )
> db.employees.insert( emp2 )
> db.employees.insert( emp3 )
> show dbs
local	(empty)
mydb	0.0625GB
> db
mydb
> show collections
employees
system.indexes
> db.employees.find()
{ "_id" : ObjectId("50c74b63a7f83cba11e6b21e"), "name" : "Zaky", "address" : 
	"Griya Purwa Asri" }
{ "_id" : ObjectId("50c74b6da7f83cba11e6b21f"), "name" : "Ahmad", "address" : 
	"Purwomartani", "email" : "zakyahmadaditya@gmail.com" }
{ "_id" : ObjectId("50c74b79a7f83cba11e6b220"), "name" : "Aditya", "address" : 
	"Kalasan", "phone" : "08787878787" }
> db.employees.find( {name : "Ahmad"} )
{ "_id" : ObjectId("50c74b6da7f83cba11e6b21f"), "name" : "Ahmad", "address" : 
	"Purwomartani", "email" : "zakyahmadaditya@gmail.com" }
> db.employees.findOne()
{
	"_id" : ObjectId("50c74b63a7f83cba11e6b21e"),
	"name" : "Zaky",
	"address" : "Griya Purwa Asri"
}
> db.employees.find().limit(2)
{ "_id" : ObjectId("50c74b63a7f83cba11e6b21e"), "name" : "Zaky", "address" : 
	"Griya Purwa Asri" }
{ "_id" : ObjectId("50c74b6da7f83cba11e6b21f"), "name" : "Ahmad", "address" : 
	"Purwomartani", "email" : "zakyahmadaditya@gmail.com" }
> 
~~~
Install [Gulp](http://gulpjs.com) dan gulp-jshint plugin:
~~~
$ npm install -g gulp
$ npm install --save-dev gulp
$ npm install --save-dev gulp-jshint
~~~
npm argument **--save-dev** is used to put modules into **devDependencies** in **package.json**.
Install Node.js modules
~~~
$ npm install
~~~
Note: 
Node-gyp mengharuskan install 2, bukan Python 3.

Menjalankan server:

~~~
$ node app.js
~~~

or better yet, use Gulp:

~~~
$ gulp
~~~
~~~
root@zero:/home/rayzal/GithubFiles/OnlineLibrary/express-mongoose-mvc# gulp
[01:01:26] Using gulpfile /home/rayzal/GithubFiles/OnlineLibrary/express-mongoose-mvc/gulpfile.js
[01:01:26] Starting 'default'...
Express server listening on port 3000
[01:01:26] Finished 'default' after 4.07 ms
~~~

* Hasil:
	* http://localhost:3000/
	* http://localhost:3000/employees => Daftar employees (menggunakan JSON)

- Bahan Bacaan
- Express
- http://expressjs.com/en/starter/installing.html
- MongoDB
- http://www.tutorialspoint.com/mongodb/index.htm
