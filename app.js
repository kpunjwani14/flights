
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


app.get('/checkout', (req, res, next) => {

  let { flightIDA, flightIDB, econ, seats } = req.query
  seats = parseInt(seats)
  flightIDA = parseInt(flightIDA)
  let query = `SELECT price,d.city as dc,a.city as ac, d.st_coun as ds,a.st_coun as as,scheduled_departure, scheduled_arrival, d.airport_code as airA,a.airport_code as airB,st.airport_code as airC,s.duration,price,scheduled_departure,scheduled_arrival FROM flights f inner join airport d on d.airport_code=f.departure_airport inner join airport a on a.airport_code=f.arrival_airport left join stops s on f.flight_id=s.flight_id left join airport st on s.air_code=st.airport_code inner join avail_seats se on se.flight_id=f.flight_id WHERE f.flight_id=$1 and avail_${econ}-$2>0`
  pool.connect((err, client, release) => {

    if (err)
      return next(err)
    async.parallel([
      function (callback) {
        client.query(query, [flightIDA, seats], (err, result) => {

          callback(err, result)

        })
      }, function (callback) {
        if (flightIDB) {

          client.query(query, [parseInt(flightIDB), seats], (err, res) => {
            callback(err, res)
          })
        }
        else
          callback(err, { rows: [] })
      }], function callbackFunc(err, result) {
        release()
        if (err)
          return next(err)

        const resu = [result[0].rows, result[1].rows]
        res.send(resu)


      })
  })
})

app.get('/promos', async (req, res, next) => {
  const client = await pool.connect()
  try {
    const data = await client.query('select discount from promos where promo_code=$1', [req.query.code])
    res.send(data.rows)
  }
  catch (e) {
    next(e)
  }
  finally {
    client.release()
  }
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
  
  if (!from[1])
    from[1] = ''
  else
    from[1] = from[1].substr(1)
  let vals=[from[0],to[0],from[1],to[1],dateFrom,parseInt(seats)]
  let query = `SELECT f.flight_id,scheduled_departure, scheduled_arrival, d.airport_name as airA,a.airport_name as airB,st.airport_name as airC  
  ,s.duration,price,scheduled_departure,scheduled_arrival FROM flights f 
inner join airport d on d.airport_code=f.departure_airport
inner join airport a on a.airport_code=f.arrival_airport
left join stops s on f.flight_id=s.flight_id
left join airport st on s.air_code=st.airport_code
inner join avail_seats se on se.flight_id=f.flight_id
WHERE 
d.city=$1 and
a.city=$2 and d.st_coun=$3 and a.st_coun=$4
and scheduled_departure::date=$5 and avail_${econ}-$6>0`
  pool.connect((err, client, done) => {
    if (err)
      return next(err)
    async.parallel([
      function (callback) {
        client.query(query,vals, (err, result) => {

          callback(err, result)

        })
      }, function (callback) {
        if (dateTo) {
          let valB=[to[0],from[0],to[1],from[1],dateTo,parseInt(seats)]
          
          
          

          client.query(query,valB, (err, res) => {
            callback(err, res)
          })
        }
        else
          callback(err, { rows: [] })
      }], function callbackFunc(err, result) {
        done()
        if (err)
          return next(err)

        const resu = [result[0].rows, result[1].rows]
        res.send(resu)


      })
  })
  console.log(dateFrom, econ, placeTo, placeFrom)


})

app.use(function (err, req, res, next) {

  if (!err.statusCode)
    err.statusCode = 500
  res.status(err.statusCode).json({ error: err.toString() })
})

app.listen(7000, () => console.log('app is listening on port 7000'))