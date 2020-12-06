
const { Pool } = require('pg')
var cors = require('cors')
const pool = new Pool({
  user: 'cosc0233',
  password: '1793992PK',
  host: 'code.cs.uh.edu',
  database: 'COSC3380'
})
const express = require('express')
const session = require('express-session')
const async = require('async')
const pgSession = require('connect-pg-simple')(session)
const app = express()
app.use(cors())
// app.use(session({
//   name: 'hwsess',
//   saveUninitialized: false,
//   secret: 'session-secret',
//   resave: false,
//   store: new pgSession({
//     pool: pool,




//   }),
//   cookie: {
//     maxAge: 60000,
//     secure: false
//   }
// }))


app.get('/checkout', (req, res) => {
  console.log(' test')
  req.session.test = 'hello'
  console.log(req.session)
  res.send('Hello Y')
})

app.get('/search', (req, res, next) => {
  
  const { seats, dateTo, dateFrom, econ, placeTo, placeFrom } = req.query

  const econArr = ["econ", "business"]
  if (!seats || !dateFrom || !econ || !placeTo || !placeFrom || !econArr.find(elem => {
    return elem == econ
  })) {

    const err = new Error('Not all required data was passed')
    err.statusCode = 400
    return next(err)
  }

  var to = []
  var from = []

  to = placeTo.split(',')

  from = placeFrom.split(',')
  if (!to[1])
    to[1] = ''
  else
    to[1] = to[1].substr(1)
  console.log(to[1])
  if (!from[1])
    from[1] = ''
  else
    from[1] = from[1].substr(1)
  
  
  pool.connect((err, client, done) => {
    if (err)
      return next(err)
    async.parallel([
      function (callback) {
        client.query(`SELECT f.flight_id,scheduled_departure, scheduled_arrival, d.airport_name as airA,a.airport_name as airB,st.airport_name as airC  
      ,s.duration FROM flights f 
    inner join airport d on d.airport_code=f.departure_airport
    inner join airport a on a.airport_code=f.arrival_airport
    left join stops s on f.flight_id=s.flight_id
    left join airport st on s.air_code=st.airport_code
    inner join avail_seats se on se.flight_id=f.flight_id
    WHERE 
    d.city='${from[0]}' and
    a.city='${to[0]}' and d.st_coun='${from[1]}' and a.st_coun='${to[1]}'
    and scheduled_departure::date='${dateFrom}' and avail_${econ}-${seats}>0  `, (err, result) => {

          callback(err, result)

        })
      }, function (callback) {
        if (dateTo) {

          client.query(`SELECT f.flight_id,scheduled_departure, scheduled_arrival, d.airport_name as airA,a.airport_name as airB,st.airport_name as airC  
          ,s.duration FROM flights f 
        inner join airport d on d.airport_code=f.departure_airport
        inner join airport a on a.airport_code=f.arrival_airport
        left join stops s on f.flight_id=s.flight_id
        left join airport st on s.air_code=st.airport_code
        inner join avail_seats se on se.flight_id=f.flight_id 
        WHERE 
        d.city='${to[0]}' and
        a.city='${from[0]}' and d.st_coun='${to[1]}' and a.st_coun='${from[1]}'
        and scheduled_departure::date='${dateTo}' and avail_${econ}-${seats}>0 `, (err, res) => {
            callback(err, res)
          })
        }
        else
          callback(err, { rows: [] })
      }], function callbackFunc(err, result) {
        if (err)
          return next(err)
        done()
        const resu = [result[0].rows, result[1].rows]
        res.send(resu)


      })
  })
  console.log(dateFrom, econ, placeTo, placeFrom)


})
app.get('/hello', (req, res) => {

  req.session.destroy(err => {
    if (err)
      return res.redirect('/')
    res.clearCookie('cook')
    res.redirect('/hello')
  })
})
app.use(function (err, req, res, next) {
  
  if (!err.statusCode)
    err.statusCode = 500
  res.status(err.statusCode).json({ error: err.toString() })
})

app.listen(7000, () => console.log('app is listening on port 7000'))