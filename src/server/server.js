const express = require('express')
const app = express()
const port = 3000

var cookieParser = require('cookie-parser');//potrzebne do obsługi cookies
var expressSess=require('express-session')
app.use(cookieParser());//potrzebne do obsługi cookies
app.use(expressSess({secret: "Id of session"}))
app.get('/',
    (req,res)=> res.send("hellodsd")
)
app.get('/', function (req,res) {
    if(req.session.visits){
        req.session.visits++;
        res.send("Wizyta nr"+ req.session.visits);
    }else{
        req.session.visits=1;
        res.send("witaj po az pierwszy")
    }

})



app.get('/test/:id',

    (req,res) => {
        console.log(req.cookies.id);


        res.cookie("id", req.params.id, {expire: 360000 + Date.now()})
            .send(`Bieżący parametr: ${req.params.id}, Poprzedni parametr ${req.cookies.id}`)//Stworzenie ciasteczka o wartości wpisywanejn w wyszukiwarce
    }

)


//
// app.get('/test/:id',
//        (req,res) => {
//          var x=req.params.id
//         console.log(x);
//         res.send("Podstrona z parametrem"+x);
//   }
// )-wyświetlenie parametru wpisywanego w wyszukiwarce w oknie

app.get('/test',

    (req,res)=> {
        console.log('test');
        res.send("hPodstrona testowa");
    }

)

app.get('*',
    (req,res)=> {
        res.send('Brak wskazanego adresu')
    }
)


app.listen(port,
    () => console.log('Example app listening on port ${port}!'))