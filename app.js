
const { Pool } = require('pg')
let queries=[]
var cors = require('cors')
const pg = require('pg-promise')()
const db = pg({
  user: 'cosc0233',
  password: '1793992PK',
  host: 'code.cs.uh.edu',
  database: 'COSC3380'
});

const express = require('express')
const session = require('express-session')
const async = require('async')
const pgSession = require('connect-pg-simple')(session)
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
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
app.get('/queries',(req,res)=>{
  res.send(queries)
})
app.post('/checkin',async(req,res,next)=>{
  let body=req.body
  db.task(async t=>{
    let check=await db.any('select ticket_no,name from ticket inner join passengers p ON ticket.passenger_id = p.passenger_id where ticket_no=$1 and name=$2 ',[parseInt(body.ticketNo),body.firstName+' '+body.lastName])
    if(check.length===0)
    return{found:false}


  }).then(data=>res.send(data)).catch(e=>next(e))
})
app.post('/checkout', async (req, res, next) => {
  let vals = req.body
  let priceB
  
  db.tx(async t => {
    queries.push(pg.as.format('select price from flights where flight_id=$1', [parseInt(vals.flightIDA)]))
    let p = await t.one('select price from flights where flight_id=$1', [parseInt(vals.flightIDA)])

    if (vals.flightIDB !== ''){
      priceB = await t.one('select price from flights where flight_id=$1', [parseInt(vals.flightIDB)])
      queries.push(pg.as.format('select price from flights where flight_id=$1', [parseInt(vals.flightIDB)]))
    }
    let x = await t.any('update customers set name=$1,phone=$2 where email=$3 returning customer_id ', [vals.customer.name, vals.customer.phoneNumber, vals.customer.email])
    queries.push(('update customers set name=$1,phone=$2 where email=$3 returning customer_id ', [vals.customer.name, vals.customer.phoneNumber, vals.customer.email]))

    if (x.length === 0) {
      let { phoneNumber, ...cus } = vals.customer
      cus.phone = phoneNumber
      queries.push(pg.as.format('insert into customers (${this:name}) values(${this:list}) returning customer_id', cus))
      x = await t.any(pg.as.format('insert into customers (${this:name}) values(${this:list}) returning customer_id', cus))
    }
    let temp = vals.payment

    let y = await t.any(pg.as.format('update payment set credit_card_no=$2,expiration_date=$3,security_code=$4 where customer_id=$1 returning customer_id ', [x[0].customer_id, temp.cardNo, temp.expMon + '-' + temp.expYr, temp.secCode]))
    queries.push(pg.as.format('update payment set credit_card_no=$2,expiration_date=$3,security_code=$4 where customer_id=$1 returning customer_id ', [x[0].customer_id, temp.cardNo, temp.expMon + '-' + temp.expYr, temp.secCode]))

    if (y.length === 0) {
      let cc = { credit_card_no: temp.cardNo, expiration_date: temp.expMon + '-' + temp.expYr, security_code: temp.secCode, customer_id: x[0].customer_id }
      y = await t.any(pg.as.format('insert into payment (${this:name}) values(${this:list})', cc))
      queries.push(pg.as.format('insert into payment (${this:name}) values(${this:list})', cc))
    }
    let pro = await t.any('select promo_code,discount from promos where promo_code=$1 ', [vals.promo])
    queries.push(pg.as.format('select promo_code,discount from promos where promo_code=$1 ', [vals.promo]))
    if (pro.length === 0)
      vals.discountRate = 0
    else
      vals.discountRate = pro[0].discount
    let indPrice = ((((p.price + (priceB ? (priceB.price - 150) : 0)) + (vals.econ !== 'econ' ? 200 : 0))) * (1 - (vals.discountRate * .01))).toFixed(2)
    let payParams = {
      taxes: parseFloat(((((p.price + (priceB ? (priceB.price - 150) : 0)) + (vals.econ !== 'econ' ? 200 : 0)) * (vals.adult + vals.child)) * .0825 * (1 - (vals.discountRate * .01))).toFixed(2)),
      total: parseFloat(((((p.price + (priceB ? (priceB.price - 150) : 0)) + (vals.econ !== 'econ' ? 200 : 0)) * (vals.adult + vals.child)) * 1.0825 * (1 - (vals.discountRate * .01))).toFixed(2)),
    }
    if (vals.discountRate !== 0)
      payParams.promo_code = vals.promo


    let pbi = await t.one(pg.as.format('insert into payment_breakdown (${this:name}) values(${this:csv}) returning payment_breakdown_id', payParams))
    queries.push(pg.as.format('insert into payment_breakdown (${this:name}) values(${this:csv}) returning payment_breakdown_id', payParams))
    for (let i = 0; i < (vals.adult + vals.child); i++) {
      t.any(pg.as.format('insert into individual_breakdown (payment_breakdown_id,total) values($1,$2)', [pbi.payment_breakdown_id, parseFloat(indPrice)]))
      queries.push(pg.as.format('insert into individual_breakdown (payment_breakdown_id,total) values($1,$2)', [pbi.payment_breakdown_id, parseFloat(indPrice)]))
    }
    for (let i = 0; i < vals.infant; i++)
      t.any(pg.as.format('insert into individual_breakdown (payment_breakdown_id,total) values($1,0)', [pbi.payment_breakdown_id]))
      queries.push(pg.as.format('insert into individual_breakdown (payment_breakdown_id,total) values($1,0)', [pbi.payment_breakdown_id]))
    let bRef = await (t.one(pg.as.format('insert into bookings (payment_breakdown_id,customer_id,book_date) values ($1,$2,now()) returning book_ref', [pbi.payment_breakdown_id, x[0].customer_id])))
    queries.push(pg.as.format('insert into bookings (payment_breakdown_id,customer_id,book_date) values ($1,$2,now()) returning book_ref', [pbi.payment_breakdown_id, x[0].customer_id]))
    let pass = []
    for (let j in vals.travelers) {
      let k = vals.travelers[j]
      let tr = {
        name: k.name + ' ' + k.lastName,
        dob: k.dob,
        gender: k.gender === 'male' ? 'm' : 'f'
      }
      let pq = await t.one('insert into passengers (${this:name}) values(${this:csv}) returning passenger_id', tr)
      queries.push(pg.as.format('insert into passengers (${this:name}) values(${this:csv}) returning passenger_id', tr))
      pass.push(pq.passenger_id)


    }
    let colName = 'avail_' + vals.econ


    let resFlight = await t.any('update avail_seats set $1:raw=$1:raw-$2,$3:raw=$3:raw+$2 where flight_id=$4 and $1:raw>0 returning flight_id', [colName, vals.child + vals.infant + vals.adult, 'total_' + vals.econ, parseInt(vals.flightIDA)])
    queries.push(pg.as.format('update avail_seats set $1:raw=$1:raw-$2,$3:raw=$3:raw+$2 where flight_id=$4 and $1:raw>0 returning flight_id', [colName, vals.child + vals.infant + vals.adult, 'total_' + vals.econ, parseInt(vals.flightIDA)]))
    let waitlist
    if (resFlight.length === 0) {
      waitlist = await t.any('insert into waitlist (flight_id,book_ref) values($1,$2)', [parseInt(vals.flightIDA), bRef.book_ref])
      queries.push(pg.as.format('insert into waitlist (flight_id,book_ref) values($1,$2)', [parseInt(vals.flightIDA), bRef.book_ref]))

      return { book_ref: bRef.book_ref, waitList: true, tickets: [] }
    }
    
    let tickets = []

   
    

      
      for (let pa in pass) {

        let tick = await t.one('insert into ticket (${this:name}) values (${this:csv}) returning ticket_no', { book_ref: bRef.book_ref, passenger_id: pass[pa] })
        queries.push(pg.as.format('insert into ticket (${this:name}) values (${this:csv}) returning ticket_no', { book_ref: bRef.book_ref, passenger_id: pass[pa] }))
        await t.any('insert into ticket_flights (${this:name}) values(${this:csv})', { flight_id: vals.flightIDA, ticket_no: tick.ticket_no })
        queries.push(pg.as.format('insert into ticket_flights (${this:name}) values(${this:csv})', { flight_id: vals.flightIDA, ticket_no: tick.ticket_no }))

        tickets.push(tick.ticket_no)
        
      }
    
  return { tickets: tickets, waitList: false, book_ref: bRef.book_ref }
  }).then(data => {
    
    if (data.waitList || req.body.flightIDB === '')
      res.send(data)
    else {
      db.tx(async t => {
        let vals = req.body
        let resFlightB
          resFlightB = await t.any('update avail_seats set $1:raw=$1:raw-$2,$3:raw=$3:raw+$2 where flight_id=$4 and $1:raw>0 returning flight_id', ['avail_' + vals.econ, vals.child + vals.infant + vals.adult, 'total_' + vals.econ, parseInt(vals.flightIDB)])
          queries.push(pg.as.format('update avail_seats set $1:raw=$1:raw-$2,$3:raw=$3:raw+$2 where flight_id=$4 and $1:raw>0 returning flight_id', ['avail_' + vals.econ, vals.child + vals.infant + vals.adult, 'total_' + vals.econ, parseInt(vals.flightIDB)]))
          
          if(resFlightB.length===0){
            await t.any('insert into waitlist (flight_id,book_ref) values($1,$2)', [parseInt(vals.flightIDB), data.book_ref]) 
            queries.push(pg.as.format('insert into waitlist (flight_id,book_ref) values($1,$2)', [parseInt(vals.flightIDB), data.book_ref]))
            return {book_ref: data.book_ref, waitList: true, tickets: [] }
          }
          for(f in data.tickets){
            
              await t.any('insert into ticket_flights (${this:name}) values(${this:csv})', { flight_id: vals.flightIDB, ticket_no: data.tickets[f] })
              queries.push(pg.as.format('insert into ticket_flights (${this:name}) values(${this:csv})', { flight_id: vals.flightIDB, ticket_no: data.tickets[f] }))
            
          }
          return {waitList:false,book_ref:data.book_ref,tickets:data.tickets}

      }).then(data=>res.send(data)).catch(e=>{console.log(e);next(e)})
    }
  }).catch(e => { console.log(e); next(e) })

  
})

app.get('/checkout', (req, res, next) => {

  let { flightIDA, flightIDB, econ, seats } = req.query
  seats = parseInt(seats)
  flightIDA = parseInt(flightIDA)
  let query = `SELECT price,d.city as dc,a.city as ac, d.st_coun as ds,a.st_coun as as,scheduled_departure, scheduled_arrival, d.airport_code as airA,a.airport_code as airB,st.airport_code as airC,s.duration,price,scheduled_departure,scheduled_arrival FROM flights f inner join airport d on d.airport_code=f.departure_airport inner join airport a on a.airport_code=f.arrival_airport left join stops s on f.flight_id=s.flight_id left join airport st on s.air_code=st.airport_code inner join avail_seats se on se.flight_id=f.flight_id WHERE f.flight_id=$1 and avail_${econ}-$2>0`
  db.task(async t => {
    const a = await t.any(query, [flightIDA, seats])
    if (flightIDB) {
      const b = await t.any(query, [flightIDB, seats])
      return { a, b }
    }
    return { a }
  }).then(resu => {
    res.send([resu.a, resu.b ? resu.b : []])
  }).catch(e => next(e))
  // pool.connect((err, client, release) => {

  //   if (err)
  //     return next(err)
  //   async.parallel([
  //     function (callback) {
  //       client.query(query, [flightIDA, seats], (err, result) => {

  //         callback(err, result)

  //       })
  //     }, function (callback) {
  //       if (flightIDB) {

  //         client.query(query, [parseInt(flightIDB), seats], (err, res) => {
  //           callback(err, res)
  //         })
  //       }
  //       else
  //         callback(err, { rows: [] })
  //     }], function callbackFunc(err, result) {
  //       release()
  //       if (err)
  //         return next(err)

  //       const resu = [result[0].rows, result[1].rows]
  //       res.send(resu)


  //     })
  // })
})

app.get('/promos', async (req, res, next) => {
  db.task(async t => {
    const x = await t.any('select discount from promos where promo_code=$1', [req.query.code])
    return { x }
  }).then(resu => res.send(resu.x)).catch(e => next(e))
  // const client = await pool.connect()
  // try {
  //   const data = await client.query('select discount from promos where promo_code=$1', [req.query.code])
  //   res.send(data.rows)
  // }
  // catch (e) {
  //   next(e)
  // }
  // finally {
  //   client.release()
  // }
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
  let vals = [from[0], to[0], from[1], to[1], dateFrom, parseInt(seats)]
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
  db.task(async t => {
    const a = await t.any(query, vals)
    if (dateTo) {
      const b = await t.any(query, [to[0], from[0], to[1], from[1], dateTo, parseInt(seats)])
      return { a, b }
    }
    return { a }
  }).then(resu => {
    res.send([resu.a, resu.b ? resu.b : []])
  }).catch(e => { console.log(e); next(e) })

  // pool.connect((err, client, done) => {
  //   if (err)
  //     return next(err)
  //   async.parallel([
  //     function (callback) {
  //       client.query(query,vals, (err, result) => {

  //         callback(err, result)

  //       })
  //     }, function (callback) {
  //       if (dateTo) {
  //         let valB=[to[0],from[0],to[1],from[1],dateTo,parseInt(seats)]


  //         client.query(query,valB, (err, res) => {
  //           callback(err, res)
  //         })
  //       }
  //       else
  //         callback(err, { rows: [] })
  //     }], function callbackFunc(err, result) {
  //       done()
  //       if (err)
  //         return next(err)

  //       const resu = [result[0].rows, result[1].rows]
  //       res.send(resu)


  //     })
  // })
  // console.log(dateFrom, econ, placeTo, placeFrom)


})

app.use(function (err, req, res, next) {

  if (!err.statusCode)
    err.statusCode = 500
  res.status(err.statusCode).json({ error: err.toString() })
})

app.listen(7000, () => console.log('app is listening on port 7000'))