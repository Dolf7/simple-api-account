# Simple Account Api

Herbify Intern Requitment challenge 

Task: <br>
Buatlah CRUD dengan menggunakan Node.js (TypeScript/JavaScript), database MySQL, satu route untuk mengunggah gambar, dan konfigurasi websocket untuk realtime communication dengan FrontEnd

Ini adalah sebuah API pengelolahan akung pengguna yang sederhana. REST API ini menggunakan Express JS dan database MySql 

### installation
```
npm install
```

### Create env
create .env used for connection to mysql database
```
db_host=        //your host
db_user=        //your user
db_database=    //database schema - better apply empty schema
db_password=    //database password
```

### Run
```
npm run start
```

## API DOCUMENTATION 

### /account path
https://documenter.getpostman.com/view/15838554/2s9YkgEkzg


### /upload path

/upload used to upload a picture for updating account profile picture.  database will store the path to the uploaded images

Test can be Run in [upload_image_form](/view/upload_image_form.html)<br>
make sure to use id params in path
```
http://localhost:5000/upload/{{id}}
```

for example 
```
http://localhost:5000/upload/be65ab9d-c647-484b-959a-288a8557e958
```

images stored in [images](./images/) folder and 
the result can be checked at [images](./images/) folder

## Web Socket

Simple Web socket to ensure communication between client and server. The function to send and receive message from server and client.

note : The test only run in 1 client at a time!

To test web socket you can view [index page](./views/index.html) or you can get in
`/`off web app.

event : 
- connect
- hello-from-server
- hello-from-client
- msg
- disconnected
