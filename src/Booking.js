import React from 'react';
import './Booking.css';
import { Nav, Navbar, Accordion, Card, Alert, Form, Row, Col, Button, InputGroup } from 'react-bootstrap';

class Booking extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    componentDidMount() {
        this.getDB()
    }
    getDB() {

    }
    travelingCard() {
        var elem = []
        for (var x = 0; x < 5; x++) {
            elem.push(
                <Card.Body>
                    <Card.Title>
                        <h6><b>Traveler {x}: Adult, primary contact</b></h6>
                    </Card.Title>
                    <Card.Text>
                        {x == 0 && <p style={{ fontSize: '15px' }}>Traveler names must match government-issued photo ID exactly.</p>}
                        <Form>
                            <Form.Row>
                                <Form.Group className='col-md-3' as={Col} controlId="formGridEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group className='col-md-3' as={Col} controlId="formGridEmail">
                                    <Form.Label>Middle Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group className='col-md-3' as={Col} controlId="formGridEmail">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Label>Gender</Form.Label>
                            <Form.Group>
                                <Form.Check inline name='gender' type="radio" label='Male' aria-label="radio 1" />
                                <Form.Check inline name='gender' type="radio" label='Female' aria-label="radio 1" />
                            </Form.Group>

                            <Form.Label>Date of birth</Form.Label>
                            <Form.Row>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Control custom required as="select">
                                        <option value=''>Month</option>
                                        <option value='1'>01-Jan</option>
                                        <option value='2'>02-Feb</option>
                                        <option value='3'>03-Mar</option>
                                        <option value='4'>04-Apr</option>
                                        <option value='5'>05-May</option>
                                        <option value='6'>06-Jun</option>
                                        <option value='7'>07-Jul</option>
                                        <option value='8'>08-Aug</option>
                                        <option value='9'>09-Sep</option>
                                        <option value='10'>10-Oct</option>
                                        <option value='11'>11-Nov</option>
                                        <option value='12'>12-Dec</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group style={{ marginLeft: '8px' }} controlId="exampleForm.ControlSelect1">
                                    <Form.Control custom required as="select">
                                        <option value="" selected="">Day</option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>

                                    </Form.Control>
                                </Form.Group>

                                <Form.Group style={{ marginLeft: '8px' }}>
                                    <Form.Control custom required as="select">
                                        <option value="" selected="">Year</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                        <option value="2012">2012</option>
                                        <option value="2011">2011</option>
                                        <option value="2010">2010</option>
                                        <option value="2009">2009</option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                        <option value="1969">1969</option>
                                        <option value="1968">1968</option>
                                        <option value="1967">1967</option>
                                        <option value="1966">1966</option>
                                        <option value="1965">1965</option>
                                        <option value="1964">1964</option>
                                        <option value="1963">1963</option>
                                        <option value="1962">1962</option>
                                        <option value="1961">1961</option>
                                        <option value="1960">1960</option>
                                        <option value="1959">1959</option>
                                        <option value="1958">1958</option>
                                        <option value="1957">1957</option>
                                        <option value="1956">1956</option>
                                        <option value="1955">1955</option>
                                        <option value="1954">1954</option>
                                        <option value="1953">1953</option>
                                        <option value="1952">1952</option>
                                        <option value="1951">1951</option>
                                        <option value="1950">1950</option>
                                        <option value="1949">1949</option>
                                        <option value="1948">1948</option>
                                        <option value="1947">1947</option>
                                        <option value="1946">1946</option>
                                        <option value="1945">1945</option>
                                        <option value="1944">1944</option>
                                        <option value="1943">1943</option>
                                        <option value="1942">1942</option>
                                        <option value="1941">1941</option>
                                        <option value="1940">1940</option>
                                        <option value="1939">1939</option>
                                        <option value="1938">1938</option>
                                        <option value="1937">1937</option>
                                        <option value="1936">1936</option>
                                        <option value="1935">1935</option>
                                        <option value="1934">1934</option>
                                        <option value="1933">1933</option>
                                        <option value="1932">1932</option>
                                        <option value="1931">1931</option>
                                        <option value="1930">1930</option>
                                        <option value="1929">1929</option>
                                        <option value="1928">1928</option>
                                        <option value="1927">1927</option>
                                        <option value="1926">1926</option>
                                        <option value="1925">1925</option>
                                        <option value="1924">1924</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                        {x == 0 &&
                            <div>
                                <p><b>Seat selection</b></p>
                                <p style={{ fontSize: '15px' }}>Your specific seat will be assigned by the airline before your flight.</p>
                            </div>}
                    </Card.Text>
                    {x != 4 && <hr style={{ height: '1px' }}></hr>}
                </Card.Body>
            )
        }
        return (elem)
    }
    render() {
        return (
            <div>


                <div className='container'>
                    <h4>Secure booking - only takes a few minutes!</h4>

                    <Alert variant='primary'>
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm8-7A8 8 0 1 1 0 8a8 8 0 0 1 16 0z" />
                            <path fill-rule="evenodd" d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        Prices not guaranteed until booked
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill- rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                        </svg>
                        Free cancellation within 24 hours of booking!
                    </Alert>

                    <Accordion>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Promotions
                                <svg style={{ marginLeft: '5px' }} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
                                </svg>
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    Promo Code: holiday
                                    <Form.Group>
                                        <InputGroup style={{ marginTop: '10px' }}>
                                            <Form.Control className='col-lg-2' size="lg" type="text" placeholder="Promo Code" />
                                            <InputGroup.Append>
                                                <Button variant="dark">Apply</Button>{' '}
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Form.Group>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    <Card className='card'>
                        <Card.Header>
                            <span>
                                <svg style={{ marginBottom: '8px', marginRight: '5px' }} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-person-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
                                    <path fill-rule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    <path fill-rule="evenodd" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z" />
                                </svg>
                                <h4 style={{ display: "inline" }}>Who's traveling?</h4>
                            </span>
                        </Card.Header>

                        {this.travelingCard()}
                    </Card>
                    <Form noValidate validated>
                        <Card>
                            <Card.Header>
                                <span>
                                    <svg style={{ marginBottom: '8px', marginRight: '5px' }} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-telephone-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z" />
                                    </svg>
                                    <h4 style={{ display: "inline" }}>Contact info</h4>
                                </span>
                            </Card.Header>

                            <Card.Body>

                                <Form.Row>
                                    <Form.Group className='col-lg-3' controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control required type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                </Form.Row>
                                <Form.Row>
                                    <Form.Group>
                                        <Form.Label>Country/Territory Code</Form.Label>
                                        <Form.Control as='select' className='col-lg-10'>
                                            <option value="93" data-country-iso="afg" data-country-name="Afghanistan">
                                                Afghanistan +93
                                </option>
                                            <option value="355" data-country-iso="alb" data-country-name="Albania">
                                                Albania +355
                                </option>
                                            <option value="213" data-country-iso="dza" data-country-name="Algeria">
                                                Algeria +213
                                </option>
                                            <option value="1" data-country-iso="asm" data-country-name="American Samoa">
                                                American Samoa +1
                                </option>
                                            <option value="376" data-country-iso="and" data-country-name="Andorra">
                                                Andorra +376
                                </option>
                                            <option value="244" data-country-iso="ago" data-country-name="Angola">
                                                Angola +244
                                </option>
                                            <option value="1" data-country-iso="aia" data-country-name="Anguilla">
                                                Anguilla +1
                                </option>
                                            <option value="672" data-country-iso="ata" data-country-name="Antarctica">
                                                Antarctica +672
                                </option>
                                            <option value="1" data-country-iso="atg" data-country-name="Antigua and Barbuda">
                                                Antigua and Barbuda +1
                                </option>
                                            <option value="54" data-country-iso="arg" data-country-name="Argentina">
                                                Argentina +54
                                </option>
                                            <option value="374" data-country-iso="arm" data-country-name="Armenia">
                                                Armenia +374
                                </option>
                                            <option value="297" data-country-iso="abw" data-country-name="Aruba">
                                                Aruba +297
                                </option>
                                            <option value="61" data-country-iso="aus" data-country-name="Australia">
                                                Australia +61
                                </option>
                                            <option value="43" data-country-iso="aut" data-country-name="Austria">
                                                Austria +43
                                </option>
                                            <option value="994" data-country-iso="aze" data-country-name="Azerbaijan">
                                                Azerbaijan +994
                                </option>
                                            <option value="1" data-country-iso="bhs" data-country-name="Bahamas">
                                                Bahamas +1
                                </option>
                                            <option value="973" data-country-iso="bhr" data-country-name="Bahrain">
                                                Bahrain +973
                                </option>
                                            <option value="880" data-country-iso="bgd" data-country-name="Bangladesh">
                                                Bangladesh +880
                                </option>
                                            <option value="1" data-country-iso="brb" data-country-name="Barbados">
                                                Barbados +1
                                </option>
                                            <option value="375" data-country-iso="blr" data-country-name="Belarus">
                                                Belarus +375
                                </option>
                                            <option value="32" data-country-iso="bel" data-country-name="Belgium">
                                                Belgium +32
                                </option>
                                            <option value="501" data-country-iso="blz" data-country-name="Belize">
                                                Belize +501
                                </option>
                                            <option value="229" data-country-iso="ben" data-country-name="Benin">
                                                Benin +229
                                </option>
                                            <option value="1" data-country-iso="bmu" data-country-name="Bermuda">
                                                Bermuda +1
                                </option>
                                            <option value="975" data-country-iso="btn" data-country-name="Bhutan">
                                                Bhutan +975
                                </option>
                                            <option value="591" data-country-iso="bol" data-country-name="Bolivia">
                                                Bolivia +591
                                </option>
                                            <option value="387" data-country-iso="bih" data-country-name="Bosnia and Herzegovina">
                                                Bosnia and Herzegovina +387
                                </option>
                                            <option value="267" data-country-iso="bwa" data-country-name="Botswana">
                                                Botswana +267
                                </option>
                                            <option value="55" data-country-iso="bra" data-country-name="Brazil">
                                                Brazil +55
                                </option>
                                            <option value="1" data-country-iso="vgb" data-country-name="British Virgin Islands">
                                                British Virgin Islands +1
                                </option>
                                            <option value="673" data-country-iso="brn" data-country-name="Brunei">
                                                Brunei +673
                                </option>
                                            <option value="359" data-country-iso="bgr" data-country-name="Bulgaria">
                                                Bulgaria +359
                                </option>
                                            <option value="226" data-country-iso="bfa" data-country-name="Burkina Faso">
                                                Burkina Faso +226
                                </option>
                                            <option value="257" data-country-iso="bdi" data-country-name="Burundi">
                                                Burundi +257
                                </option>
                                            <option value="855" data-country-iso="khm" data-country-name="Cambodia">
                                                Cambodia +855
                                </option>
                                            <option value="237" data-country-iso="cmr" data-country-name="Cameroon">
                                                Cameroon +237
                                </option>
                                            <option value="1" data-country-iso="can" data-country-name="Canada">
                                                Canada +1
                                </option>
                                            <option value="238" data-country-iso="cpv" data-country-name="Cape Verde">
                                                Cape Verde +238
                                </option>
                                            <option value="1" data-country-iso="cym" data-country-name="Cayman Islands">
                                                Cayman Islands +1
                                </option>
                                            <option value="236" data-country-iso="caf" data-country-name="Central African Republic">
                                                Central African Republic +236
                                </option>
                                            <option value="235" data-country-iso="tcd" data-country-name="Chad">
                                                Chad +235
                                </option>
                                            <option value="56" data-country-iso="chl" data-country-name="Chile">
                                                Chile +56
                                </option>
                                            <option value="86" data-country-iso="chn" data-country-name="China">
                                                China +86
                                </option>
                                            <option value="61" data-country-iso="cxr" data-country-name="Christmas Island">
                                                Christmas Island +61
                                </option>
                                            <option value="61" data-country-iso="cck" data-country-name="Cocos Islands">
                                                Cocos Islands +61
                                </option>
                                            <option value="57" data-country-iso="col" data-country-name="Colombia">
                                                Colombia +57
                                </option>
                                            <option value="269" data-country-iso="com" data-country-name="Comoros">
                                                Comoros +269
                                </option>
                                            <option value="682" data-country-iso="cok" data-country-name="Cook Islands">
                                                Cook Islands +682
                                </option>
                                            <option value="506" data-country-iso="cri" data-country-name="Costa Rica">
                                                Costa Rica +506
                                </option>
                                            <option value="385" data-country-iso="hrv" data-country-name="Croatia">
                                                Croatia +385
                                </option>
                                            <option value="53" data-country-iso="cub" data-country-name="Cuba">
                                                Cuba +53
                                </option>
                                            <option value="599" data-country-iso="cuw" data-country-name="Curacao">
                                                Curacao +599
                                </option>
                                            <option value="357" data-country-iso="cyp" data-country-name="Cyprus">
                                                Cyprus +357
                                </option>
                                            <option value="420" data-country-iso="cze" data-country-name="Czech Republic">
                                                Czech Republic +420
                                </option>
                                            <option value="225" data-country-iso="civ" data-country-name="Côte d'Ivoire">
                                                Côte d'Ivoire +225
                                </option>
                                            <option value="243" data-country-iso="cod" data-country-name="Democratic Republic of the Congo">
                                                Democratic Republic of the Congo +243
                                </option>
                                            <option value="45" data-country-iso="dnk" data-country-name="Denmark">
                                                Denmark +45
                                </option>
                                            <option value="253" data-country-iso="dji" data-country-name="Djibouti">
                                                Djibouti +253
                                </option>
                                            <option value="1" data-country-iso="dma" data-country-name="Dominica">
                                                Dominica +1
                                </option>
                                            <option value="1" data-country-iso="dom" data-country-name="Dominican Republic">
                                                Dominican Republic +1
                                </option>
                                            <option value="593" data-country-iso="ecu" data-country-name="Ecuador">
                                                Ecuador +593
                                </option>
                                            <option value="20" data-country-iso="egy" data-country-name="Egypt">
                                                Egypt +20
                                </option>
                                            <option value="503" data-country-iso="slv" data-country-name="El Salvador">
                                                El Salvador +503
                                </option>
                                            <option value="224" data-country-iso="gnq" data-country-name="Equatorial Guinea">
                                                Equatorial Guinea +224
                                </option>
                                            <option value="291" data-country-iso="eri" data-country-name="Eritrea">
                                                Eritrea +291
                                </option>
                                            <option value="372" data-country-iso="est" data-country-name="Estonia">
                                                Estonia +372
                                </option>
                                            <option value="268" data-country-iso="swz" data-country-name="Eswatini">
                                                Eswatini +268
                                </option>
                                            <option value="251" data-country-iso="eth" data-country-name="Ethiopia">
                                                Ethiopia +251
                                </option>
                                            <option value="500" data-country-iso="flk" data-country-name="Falkland Islands">
                                                Falkland Islands +500
                                </option>
                                            <option value="298" data-country-iso="fro" data-country-name="Faroe Islands">
                                                Faroe Islands +298
                                </option>
                                            <option value="252" data-country-iso="som" data-country-name="Federal Republic of Somalia">
                                                Federal Republic of Somalia +252
                                </option>
                                            <option value="691" data-country-iso="fsm" data-country-name="Federated States of Micronesia">
                                                Federated States of Micronesia +691
                                </option>
                                            <option value="679" data-country-iso="fji" data-country-name="Fiji">
                                                Fiji +679
                                </option>
                                            <option value="358" data-country-iso="fin" data-country-name="Finland">
                                                Finland +358
                                </option>
                                            <option value="33" data-country-iso="fra" data-country-name="France">
                                                France +33
                                </option>
                                            <option value="594" data-country-iso="guf" data-country-name="French Guiana">
                                                French Guiana +594
                                </option>
                                            <option value="689" data-country-iso="pyf" data-country-name="French Polynesia">
                                                French Polynesia +689
                                </option>
                                            <option value="241" data-country-iso="gab" data-country-name="Gabon">
                                                Gabon +241
                                </option>
                                            <option value="220" data-country-iso="gmb" data-country-name="Gambia">
                                                Gambia +220
                                </option>
                                            <option value="995" data-country-iso="geo" data-country-name="Georgia">
                                                Georgia +995
                                </option>
                                            <option value="49" data-country-iso="deu" data-country-name="Germany">
                                                Germany +49
                                </option>
                                            <option value="233" data-country-iso="gha" data-country-name="Ghana">
                                                Ghana +233
                                </option>
                                            <option value="350" data-country-iso="gib" data-country-name="Gibraltar">
                                                Gibraltar +350
                                </option>
                                            <option value="30" data-country-iso="grc" data-country-name="Greece">
                                                Greece +30
                                </option>
                                            <option value="299" data-country-iso="grl" data-country-name="Greenland">
                                                Greenland +299
                                </option>
                                            <option value="1" data-country-iso="grd" data-country-name="Grenada">
                                                Grenada +1
                                </option>
                                            <option value="590" data-country-iso="glp" data-country-name="Guadeloupe">
                                                Guadeloupe +590
                                </option>
                                            <option value="1" data-country-iso="gum" data-country-name="Guam">
                                                Guam +1
                                </option>
                                            <option value="502" data-country-iso="gtm" data-country-name="Guatemala">
                                                Guatemala +502
                                </option>
                                            <option value="224" data-country-iso="gin" data-country-name="Guinea">
                                                Guinea +224
                                </option>
                                            <option value="245" data-country-iso="gnb" data-country-name="Guinea-Bissau">
                                                Guinea-Bissau +245
                                </option>
                                            <option value="592" data-country-iso="guy" data-country-name="Guyana">
                                                Guyana +592
                                </option>
                                            <option value="509" data-country-iso="hti" data-country-name="Haiti">
                                                Haiti +509
                                </option>
                                            <option value="504" data-country-iso="hnd" data-country-name="Honduras">
                                                Honduras +504
                                </option>
                                            <option value="852" data-country-iso="hkg" data-country-name="Hong Kong SAR">
                                                Hong Kong SAR +852
                                </option>
                                            <option value="36" data-country-iso="hun" data-country-name="Hungary">
                                                Hungary +36
                                </option>
                                            <option value="354" data-country-iso="isl" data-country-name="Iceland">
                                                Iceland +354
                                </option>
                                            <option value="91" data-country-iso="ind" data-country-name="India">
                                                India +91
                                </option>
                                            <option value="62" data-country-iso="idn" data-country-name="Indonesia">
                                                Indonesia +62
                                </option>
                                            <option value="98" data-country-iso="irn" data-country-name="Iran">
                                                Iran +98
                                </option>
                                            <option value="964" data-country-iso="irq" data-country-name="Iraq">
                                                Iraq +964
                                </option>
                                            <option value="353" data-country-iso="irl" data-country-name="Ireland">
                                                Ireland +353
                                </option>
                                            <option value="972" data-country-iso="isr" data-country-name="Israel">
                                                Israel +972
                                </option>
                                            <option value="39" data-country-iso="ita" data-country-name="Italy">
                                                Italy +39
                                </option>
                                            <option value="1" data-country-iso="jam" data-country-name="Jamaica">
                                                Jamaica +1
                                </option>
                                            <option value="81" data-country-iso="jpn" data-country-name="Japan">
                                                Japan +81
                                </option>
                                            <option value="962" data-country-iso="jor" data-country-name="Jordan">
                                                Jordan +962
                                </option>
                                            <option value="7" data-country-iso="kaz" data-country-name="Kazakhstan">
                                                Kazakhstan +7
                                </option>
                                            <option value="254" data-country-iso="ken" data-country-name="Kenya">
                                                Kenya +254
                                </option>
                                            <option value="686" data-country-iso="kir" data-country-name="Kiribati">
                                                Kiribati +686
                                </option>
                                            <option value="965" data-country-iso="kwt" data-country-name="Kuwait">
                                                Kuwait +965
                                </option>
                                            <option value="996" data-country-iso="kgz" data-country-name="Kyrgyzstan">
                                                Kyrgyzstan +996
                                </option>
                                            <option value="856" data-country-iso="lao" data-country-name="Laos">
                                                Laos +856
                                </option>
                                            <option value="371" data-country-iso="lva" data-country-name="Latvia">
                                                Latvia +371
                                </option>
                                            <option value="961" data-country-iso="lbn" data-country-name="Lebanon">
                                                Lebanon +961
                                </option>
                                            <option value="266" data-country-iso="lso" data-country-name="Lesotho">
                                                Lesotho +266
                                </option>
                                            <option value="231" data-country-iso="lbr" data-country-name="Liberia">
                                                Liberia +231
                                </option>
                                            <option value="218" data-country-iso="lby" data-country-name="Libya">
                                                Libya +218
                                </option>
                                            <option value="423" data-country-iso="lie" data-country-name="Liechtenstein">
                                                Liechtenstein +423
                                </option>
                                            <option value="370" data-country-iso="ltu" data-country-name="Lithuania">
                                                Lithuania +370
                                </option>
                                            <option value="352" data-country-iso="lux" data-country-name="Luxembourg">
                                                Luxembourg +352
                                </option>
                                            <option value="853" data-country-iso="mac" data-country-name="Macau SAR">
                                                Macau SAR +853
                                </option>
                                            <option value="261" data-country-iso="mdg" data-country-name="Madagascar">
                                                Madagascar +261
                                </option>
                                            <option value="265" data-country-iso="mwi" data-country-name="Malawi">
                                                Malawi +265
                                </option>
                                            <option value="60" data-country-iso="mys" data-country-name="Malaysia">
                                                Malaysia +60
                                </option>
                                            <option value="960" data-country-iso="mdv" data-country-name="Maldives">
                                                Maldives +960
                                </option>
                                            <option value="223" data-country-iso="mli" data-country-name="Mali">
                                                Mali +223
                                </option>
                                            <option value="356" data-country-iso="mlt" data-country-name="Malta">
                                                Malta +356
                                </option>
                                            <option value="692" data-country-iso="mhl" data-country-name="Marshall Islands">
                                                Marshall Islands +692
                                </option>
                                            <option value="596" data-country-iso="mtq" data-country-name="Martinique">
                                                Martinique +596
                                </option>
                                            <option value="222" data-country-iso="mrt" data-country-name="Mauritania">
                                                Mauritania +222
                                </option>
                                            <option value="230" data-country-iso="mus" data-country-name="Mauritius">
                                                Mauritius +230
                                </option>
                                            <option value="269" data-country-iso="myt" data-country-name="Mayotte">
                                                Mayotte +269
                                </option>
                                            <option value="52" data-country-iso="mex" data-country-name="Mexico">
                                                Mexico +52
                                </option>
                                            <option value="373" data-country-iso="mda" data-country-name="Moldova">
                                                Moldova +373
                                </option>
                                            <option value="377" data-country-iso="mco" data-country-name="Monaco">
                                                Monaco +377
                                </option>
                                            <option value="976" data-country-iso="mng" data-country-name="Mongolia">
                                                Mongolia +976
                                </option>
                                            <option value="382" data-country-iso="mne" data-country-name="Montenegro">
                                                Montenegro +382
                                </option>
                                            <option value="1" data-country-iso="msr" data-country-name="Montserrat">
                                                Montserrat +1
                                </option>
                                            <option value="212" data-country-iso="mar" data-country-name="Morocco">
                                                Morocco +212
                                </option>
                                            <option value="258" data-country-iso="moz" data-country-name="Mozambique">
                                                Mozambique +258
                                </option>
                                            <option value="95" data-country-iso="mmr" data-country-name="Myanmar">
                                                Myanmar +95
                                </option>
                                            <option value="264" data-country-iso="nam" data-country-name="Namibia">
                                                Namibia +264
                                </option>
                                            <option value="674" data-country-iso="nru" data-country-name="Nauru">
                                                Nauru +674
                                </option>
                                            <option value="977" data-country-iso="npl" data-country-name="Nepal">
                                                Nepal +977
                                </option>
                                            <option value="31" data-country-iso="nld" data-country-name="Netherlands">
                                                Netherlands +31
                                </option>
                                            <option value="599" data-country-iso="ant" data-country-name="Netherlands Antilles">
                                                Netherlands Antilles +599
                                </option>
                                            <option value="687" data-country-iso="ncl" data-country-name="New Caledonia">
                                                New Caledonia +687
                                </option>
                                            <option value="64" data-country-iso="nzl" data-country-name="New Zealand">
                                                New Zealand +64
                                </option>
                                            <option value="505" data-country-iso="nic" data-country-name="Nicaragua">
                                                Nicaragua +505
                                </option>
                                            <option value="227" data-country-iso="ner" data-country-name="Niger">
                                                Niger +227
                                </option>
                                            <option value="234" data-country-iso="nga" data-country-name="Nigeria">
                                                Nigeria +234
                                </option>
                                            <option value="683" data-country-iso="niu" data-country-name="Niue">
                                                Niue +683
                                </option>
                                            <option value="672" data-country-iso="nfk" data-country-name="Norfolk Island">
                                                Norfolk Island +672
                                </option>
                                            <option value="850" data-country-iso="prk" data-country-name="North Korea">
                                                North Korea +850
                                </option>
                                            <option value="389" data-country-iso="mkd" data-country-name="North Macedonia">
                                                North Macedonia +389
                                </option>
                                            <option value="1" data-country-iso="mnp" data-country-name="Northern Mariana Islands">
                                                Northern Mariana Islands +1
                                </option>
                                            <option value="47" data-country-iso="nor" data-country-name="Norway">
                                                Norway +47
                                </option>
                                            <option value="968" data-country-iso="omn" data-country-name="Oman">
                                                Oman +968
                                </option>
                                            <option value="92" data-country-iso="pak" data-country-name="Pakistan">
                                                Pakistan +92
                                </option>
                                            <option value="680" data-country-iso="plw" data-country-name="Palau">
                                                Palau +680
                                </option>
                                            <option value="972" data-country-iso="pse" data-country-name="Palestinian Territories">
                                                Palestinian Territories +972
                                </option>
                                            <option value="507" data-country-iso="pan" data-country-name="Panama">
                                                Panama +507
                                </option>
                                            <option value="675" data-country-iso="png" data-country-name="Papua New Guinea">
                                                Papua New Guinea +675
                                </option>
                                            <option value="595" data-country-iso="pry" data-country-name="Paraguay">
                                                Paraguay +595
                                </option>
                                            <option value="51" data-country-iso="per" data-country-name="Peru">
                                                Peru +51
                                </option>
                                            <option value="63" data-country-iso="phl" data-country-name="Philippines">
                                                Philippines +63
                                </option>
                                            <option value="48" data-country-iso="pol" data-country-name="Poland">
                                                Poland +48
                                </option>
                                            <option value="351" data-country-iso="prt" data-country-name="Portugal">
                                                Portugal +351
                                </option>
                                            <option value="1" data-country-iso="pri" data-country-name="Puerto Rico">
                                                Puerto Rico +1
                                </option>
                                            <option value="974" data-country-iso="qat" data-country-name="Qatar">
                                                Qatar +974
                                </option>
                                            <option value="242" data-country-iso="cog" data-country-name="Republic of the Congo">
                                                Republic of the Congo +242
                                </option>
                                            <option value="262" data-country-iso="reu" data-country-name="Reunion">
                                                Reunion +262
                                </option>
                                            <option value="40" data-country-iso="rou" data-country-name="Romania">
                                                Romania +40
                                </option>
                                            <option value="7" data-country-iso="rus" data-country-name="Russia">
                                                Russia +7
                                </option>
                                            <option value="250" data-country-iso="rwa" data-country-name="Rwanda">
                                                Rwanda +250
                                </option>
                                            <option value="685" data-country-iso="wsm" data-country-name="Samoa">
                                                Samoa +685
                                </option>
                                            <option value="378" data-country-iso="smr" data-country-name="San Marino">
                                                San Marino +378
                                </option>
                                            <option value="239" data-country-iso="stp" data-country-name="Sao Tome and Principe">
                                                Sao Tome and Principe +239
                                </option>
                                            <option value="966" data-country-iso="sau" data-country-name="Saudi Arabia">
                                                Saudi Arabia +966
                                </option>
                                            <option value="221" data-country-iso="sen" data-country-name="Senegal">
                                                Senegal +221
                                </option>
                                            <option value="381" data-country-iso="srb" data-country-name="Serbia">
                                                Serbia +381
                                </option>
                                            <option value="248" data-country-iso="syc" data-country-name="Seychelles">
                                                Seychelles +248
                                </option>
                                            <option value="232" data-country-iso="sle" data-country-name="Sierra Leone">
                                                Sierra Leone +232
                                </option>
                                            <option value="65" data-country-iso="sgp" data-country-name="Singapore">
                                                Singapore +65
                                </option>
                                            <option value="1" data-country-iso="sxm" data-country-name="Sint Maarten">
                                                Sint Maarten +1
                                </option>
                                            <option value="421" data-country-iso="svk" data-country-name="Slovakia">
                                                Slovakia +421
                                </option>
                                            <option value="386" data-country-iso="svn" data-country-name="Slovenia">
                                                Slovenia +386
                                </option>
                                            <option value="677" data-country-iso="slb" data-country-name="Solomon Islands">
                                                Solomon Islands +677
                                </option>
                                            <option value="27" data-country-iso="zaf" data-country-name="South Africa">
                                                South Africa +27
                                </option>
                                            <option value="82" data-country-iso="kor" data-country-name="South Korea">
                                                South Korea +82
                                </option>
                                            <option value="211" data-country-iso="ssd" data-country-name="South Sudan">
                                                South Sudan +211
                                </option>
                                            <option value="34" data-country-iso="esp" data-country-name="Spain">
                                                Spain +34
                                </option>
                                            <option value="94" data-country-iso="lka" data-country-name="Sri Lanka">
                                                Sri Lanka +94
                                </option>
                                            <option value="290" data-country-iso="shn" data-country-name="St. Helena">
                                                St. Helena +290
                                </option>
                                            <option value="1" data-country-iso="kna" data-country-name="St. Kitts and Nevis">
                                                St. Kitts and Nevis +1
                                </option>
                                            <option value="1" data-country-iso="lca" data-country-name="St. Lucia">
                                                St. Lucia +1
                                </option>
                                            <option value="508" data-country-iso="spm" data-country-name="St. Pierre and Miquelon">
                                                St. Pierre and Miquelon +508
                                </option>
                                            <option value="1" data-country-iso="vct" data-country-name="St. Vincent and the Grenadines">
                                                St. Vincent and the Grenadines +1
                                </option>
                                            <option value="249" data-country-iso="sdn" data-country-name="Sudan">
                                                Sudan +249
                                </option>
                                            <option value="597" data-country-iso="sur" data-country-name="Suriname">
                                                Suriname +597
                                </option>
                                            <option value="46" data-country-iso="swe" data-country-name="Sweden">
                                                Sweden +46
                                </option>
                                            <option value="41" data-country-iso="che" data-country-name="Switzerland">
                                                Switzerland +41
                                </option>
                                            <option value="963" data-country-iso="syr" data-country-name="Syria">
                                                Syria +963
                                </option>
                                            <option value="886" data-country-iso="twn" data-country-name="Taiwan">
                                                Taiwan +886
                                </option>
                                            <option value="992" data-country-iso="tjk" data-country-name="Tajikistan">
                                                Tajikistan +992
                                </option>
                                            <option value="255" data-country-iso="tza" data-country-name="Tanzania">
                                                Tanzania +255
                                </option>
                                            <option value="66" data-country-iso="tha" data-country-name="Thailand">
                                                Thailand +66
                                </option>
                                            <option value="228" data-country-iso="tgo" data-country-name="Togo">
                                                Togo +228
                                </option>
                                            <option value="690" data-country-iso="tkl" data-country-name="Tokelau">
                                                Tokelau +690
                                </option>
                                            <option value="676" data-country-iso="ton" data-country-name="Tonga">
                                                Tonga +676
                                </option>
                                            <option value="1" data-country-iso="tto" data-country-name="Trinidad and Tobago">
                                                Trinidad and Tobago +1
                                </option>
                                            <option value="216" data-country-iso="tun" data-country-name="Tunisia">
                                                Tunisia +216
                                </option>
                                            <option value="90" data-country-iso="tur" data-country-name="Turkey">
                                                Turkey +90
                                </option>
                                            <option value="993" data-country-iso="tkm" data-country-name="Turkmenistan">
                                                Turkmenistan +993
                                </option>
                                            <option value="1" data-country-iso="tca" data-country-name="Turks and Caicos">
                                                Turks and Caicos +1
                                </option>
                                            <option value="688" data-country-iso="tuv" data-country-name="Tuvalu">
                                                Tuvalu +688
                                </option>
                                            <option value="1" data-country-iso="vir" data-country-name="U.S. Virgin Islands">
                                                U.S. Virgin Islands +1
                                </option>
                                            <option value="256" data-country-iso="uga" data-country-name="Uganda">
                                                Uganda +256
                                </option>
                                            <option value="380" data-country-iso="ukr" data-country-name="Ukraine">
                                                Ukraine +380
                                </option>
                                            <option value="971" data-country-iso="are" data-country-name="United Arab Emirates">
                                                United Arab Emirates +971
                                </option>
                                            <option value="44" data-country-iso="gbr" data-country-name="United Kingdom">
                                                United Kingdom +44
                                </option>
                                            <option value="1" selected="selected" data-country-iso="usa" data-country-name="United States of America">
                                                United States of America +1
                                </option>
                                            <option value="598" data-country-iso="ury" data-country-name="Uruguay">
                                                Uruguay +598
                                </option>
                                            <option value="998" data-country-iso="uzb" data-country-name="Uzbekistan">
                                                Uzbekistan +998
                                </option>
                                            <option value="678" data-country-iso="vut" data-country-name="Vanuatu">
                                                Vanuatu +678
                                </option>
                                            <option value="39" data-country-iso="vat" data-country-name="Vatican City">
                                                Vatican City +39
                                </option>
                                            <option value="58" data-country-iso="ven" data-country-name="Venezuela">
                                                Venezuela +58
                                </option>
                                            <option value="84" data-country-iso="vnm" data-country-name="Vietnam">
                                                Vietnam +84
                                </option>
                                            <option value="681" data-country-iso="wlf" data-country-name="Wallis and Futuna">
                                                Wallis and Futuna +681
                                </option>
                                            <option value="967" data-country-iso="yem" data-country-name="Yemen">
                                                Yemen +967
                                </option>
                                            <option value="260" data-country-iso="zmb" data-country-name="Zambia">
                                                Zambia +260
                                </option>
                                            <option value="263" data-country-iso="zwe" data-country-name="Zimbabwe">
                                                Zimbabwe +263
                                </option>

                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="formGridAddress1">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control className='col-lg-12' placeholder="123-456-7890" />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group id="formGridCheckbox">
                                    <Form.Check className='label' type="checkbox" label="Receive text alerts about this trip. Message and data rates may apply" />
                                </Form.Group>
                            </Card.Body>
                        </Card>

                        <Card className='card'>
                            <Card.Header>
                                <span>
                                    <svg style={{ marginBottom: '8px', marginRight: '5px' }} width="1em" height="2em" viewBox="0 0 16 16" class="bi bi-credit-card-2-back" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M14 3H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                                        <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1zM1 9h14v2H1V9z" />
                                    </svg>
                                    <h4 style={{ display: "inline" }}>How would you like to pay?</h4>
                                </span>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <h6><b>Traveler 1: Adult, primary contact</b></h6>
                                </Card.Title>
                                <Card.Text>
                                    <Form.Row>
                                        <Form.Group className='col-lg-5' as={Col}>
                                            
                                            <Form.Control
                                                required
                                                type="text"
                                            />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group className='col-lg-4' as={Col}>
                                            <Form.Label>Debit/Credit card number</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                            />
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Label>Expiration date</Form.Label>
                                    <Form.Row>
                                        <Form.Group controlId="exampleForm.ControlSelect1">
                                            <Form.Control custom required as="select">
                                                <option value=''>Month</option>
                                                <option value='1'>01-Jan</option>
                                                <option value='2'>02-Feb</option>
                                                <option value='3'>03-Mar</option>
                                                <option value='4'>04-Apr</option>
                                                <option value='5'>05-May</option>
                                                <option value='6'>06-Jun</option>
                                                <option value='7'>07-Jul</option>
                                                <option value='8'>08-Aug</option>
                                                <option value='9'>09-Sep</option>
                                                <option value='10'>10-Oct</option>
                                                <option value='11'>11-Nov</option>
                                                <option value='12'>12-Dec</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group style={{ marginLeft: '8px' }}>
                                            <Form.Control custom required as="select">
                                                <option value=''>Year</option>
                                                <option value='2020'>2020</option>
                                                <option value='2021'>2021</option>
                                                <option value='2022'>2022</option>
                                                <option value='2023'>2023</option>
                                                <option value='2024'>2024</option>
                                                <option value='2025'>2025</option>
                                                <option value='2026'>2026</option>
                                                <option value='2027'>2027</option>
                                                <option value='2028'>2028</option>
                                                <option value='2029'>2029</option>
                                                <option value='2030'>2030</option>
                                                <option value='2031'>2031</option>
                                                <option value='2032'>2032</option>
                                                <option value='2033'>2033</option>
                                                <option value='2034'>2034</option>
                                                <option value='2035'>2035</option>
                                                <option value='2036'>2036</option>
                                                <option value='2037'>2037</option>
                                                <option value='2038'>2038</option>
                                                <option value='2039'>2039</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row>

                                    <Form.Row>
                                        <Form.Group as={Col}>
                                            <Form.Label>Security code</Form.Label>
                                            <Form.Control className='col-md-1'
                                                required
                                                type="text"
                                            />
                                        </Form.Group>
                                    </Form.Row>

                                    <hr></hr>

                                    <Form.Group>
                                        <Form.Row>
                                        <Col>
                                        <Form.Label>Country/Territory</Form.Label>
                                        </Col> 
                                        </Form.Row>
                                        <Form.Control custom required as='select' className='col-lg-6'>
                                            <option value="">Select</option>
                                            <option value="ALB">Albania</option>
                                            <option value="DZA">Algeria</option>
                                            <option value="ASM">American Samoa</option>
                                            <option value="AND">Andorra</option>
                                            <option value="AGO">Angola</option>
                                            <option value="AIA">Anguilla</option>
                                            <option value="ATA">Antarctica</option>
                                            <option value="ATG">Antigua and Barbuda</option>
                                            <option value="ARG">Argentina</option>
                                            <option value="ARM">Armenia</option>
                                            <option value="ABW">Aruba</option>
                                            <option value="AUS">Australia</option>
                                            <option value="AUT">Austria</option>
                                            <option value="AZE">Azerbaijan</option>
                                            <option value="BHS">Bahamas</option>
                                            <option value="BHR">Bahrain</option>
                                            <option value="BGD">Bangladesh</option>
                                            <option value="BRB">Barbados</option>
                                            <option value="BLR">Belarus</option>
                                            <option value="BEL">Belgium</option>
                                            <option value="BLZ">Belize</option>
                                            <option value="BEN">Benin</option>
                                            <option value="BMU">Bermuda</option>
                                            <option value="BTN">Bhutan</option>
                                            <option value="BOL">Bolivia</option>
                                            <option value="BES">Bonaire, Sint Eustatius and Saba</option>
                                            <option value="BIH">Bosnia and Herzegovina</option>
                                            <option value="BWA">Botswana</option>
                                            <option value="BVT">Bouvet Island</option>
                                            <option value="BRA">Brazil</option>
                                            <option value="IOT">British Indian Ocean Territory</option>
                                            <option value="VGB">British Virgin Islands</option>
                                            <option value="BRN">Brunei</option>
                                            <option value="BGR">Bulgaria</option>
                                            <option value="BFA">Burkina Faso</option>
                                            <option value="BDI">Burundi</option>
                                            <option value="KHM">Cambodia</option>
                                            <option value="CMR">Cameroon</option>
                                            <option value="CAN">Canada</option>
                                            <option value="CPV">Cape Verde</option>
                                            <option value="CYM">Cayman Islands</option>
                                            <option value="CAF">Central African Republic</option>
                                            <option value="TCD">Chad</option>
                                            <option value="CHL">Chile</option>
                                            <option value="CHN">China</option>
                                            <option value="CXR">Christmas Island</option>
                                            <option value="CCK">Cocos Islands</option>
                                            <option value="COL">Colombia</option>
                                            <option value="COM">Comoros</option>
                                            <option value="COK">Cook Islands</option>
                                            <option value="CRI">Costa Rica</option>
                                            <option value="HRV">Croatia</option>
                                            <option value="CUB">Cuba</option>
                                            <option value="CUW">Curacao</option>
                                            <option value="CYP">Cyprus</option>
                                            <option value="CZE">Czech Republic</option>
                                            <option value="CIV">Côte d'Ivoire</option>
                                            <option value="DNK">Denmark</option>
                                            <option value="DJI">Djibouti</option>
                                            <option value="DMA">Dominica</option>
                                            <option value="DOM">Dominican Republic</option>
                                            <option value="ECU">Ecuador</option>
                                            <option value="EGY">Egypt</option>
                                            <option value="SLV">El Salvador</option>
                                            <option value="GNQ">Equatorial Guinea</option>
                                            <option value="ERI">Eritrea</option>
                                            <option value="EST">Estonia</option>
                                            <option value="SWZ">Eswatini</option>
                                            <option value="ETH">Ethiopia</option>
                                            <option value="FLK">Falkland Islands</option>
                                            <option value="FRO">Faroe Islands</option>
                                            <option value="SOM">Federal Republic of Somalia</option>
                                            <option value="FSM">Federated States of Micronesia</option>
                                            <option value="FJI">Fiji</option>
                                            <option value="FIN">Finland</option>
                                            <option value="FRA">France</option>
                                            <option value="GUF">French Guiana</option>
                                            <option value="PYF">French Polynesia</option>
                                            <option value="ATF">French Southern and Antarctic Territories</option>
                                            <option value="GAB">Gabon</option>
                                            <option value="GMB">Gambia</option>
                                            <option value="GEO">Georgia</option>
                                            <option value="DEU">Germany</option>
                                            <option value="GHA">Ghana</option>
                                            <option value="GIB">Gibraltar</option>
                                            <option value="GRC">Greece</option>
                                            <option value="GRL">Greenland</option>
                                            <option value="GRD">Grenada</option>
                                            <option value="GLP">Guadeloupe</option>
                                            <option value="GUM">Guam</option>
                                            <option value="GTM">Guatemala</option>
                                            <option value="GIN">Guinea</option>
                                            <option value="GNB">Guinea-Bissau</option>
                                            <option value="GUY">Guyana</option>
                                            <option value="HTI">Haiti</option>
                                            <option value="HMD">Heard and Mcdonald Islands</option>
                                            <option value="HND">Honduras</option>
                                            <option value="HKG">Hong Kong SAR</option>
                                            <option value="HUN">Hungary</option>
                                            <option value="ISL">Iceland</option>
                                            <option value="IND">India</option>
                                            <option value="IDN">Indonesia</option>
                                            <option value="IRL">Ireland</option>
                                            <option value="ISR">Israel</option>
                                            <option value="ITA">Italy</option>
                                            <option value="JAM">Jamaica</option>
                                            <option value="JPN">Japan</option>
                                            <option value="JOR">Jordan</option>
                                            <option value="KAZ">Kazakhstan</option>
                                            <option value="KEN">Kenya</option>
                                            <option value="KIR">Kiribati</option>
                                            <option value="KWT">Kuwait</option>
                                            <option value="KGZ">Kyrgyzstan</option>
                                            <option value="LAO">Laos</option>
                                            <option value="LVA">Latvia</option>
                                            <option value="LBN">Lebanon</option>
                                            <option value="LSO">Lesotho</option>
                                            <option value="LBY">Libya</option>
                                            <option value="LIE">Liechtenstein</option>
                                            <option value="LTU">Lithuania</option>
                                            <option value="LUX">Luxembourg</option>
                                            <option value="MAC">Macau SAR</option>
                                            <option value="MDG">Madagascar</option>
                                            <option value="MWI">Malawi</option>
                                            <option value="MYS">Malaysia</option>
                                            <option value="MDV">Maldives</option>
                                            <option value="MLI">Mali</option>
                                            <option value="MLT">Malta</option>
                                            <option value="MHL">Marshall Islands</option>
                                            <option value="MTQ">Martinique</option>
                                            <option value="MRT">Mauritania</option>
                                            <option value="MUS">Mauritius</option>
                                            <option value="MYT">Mayotte</option>
                                            <option value="MEX">Mexico</option>
                                            <option value="MDA">Moldova</option>
                                            <option value="MCO">Monaco</option>
                                            <option value="MNG">Mongolia</option>
                                            <option value="MNE">Montenegro</option>
                                            <option value="MSR">Montserrat</option>
                                            <option value="MAR">Morocco</option>
                                            <option value="MOZ">Mozambique</option>
                                            <option value="MMR">Myanmar</option>
                                            <option value="NAM">Namibia</option>
                                            <option value="NRU">Nauru</option>
                                            <option value="NPL">Nepal</option>
                                            <option value="NLD">Netherlands</option>
                                            <option value="NCL">New Caledonia</option>
                                            <option value="NZL">New Zealand</option>
                                            <option value="NIC">Nicaragua</option>
                                            <option value="NER">Niger</option>
                                            <option value="NGA">Nigeria</option>
                                            <option value="NIU">Niue</option>
                                            <option value="NFK">Norfolk Island</option>
                                            <option value="MKD">North Macedonia</option>
                                            <option value="MNP">Northern Mariana Islands</option>
                                            <option value="NOR">Norway</option>
                                            <option value="OMN">Oman</option>
                                            <option value="PAK">Pakistan</option>
                                            <option value="PLW">Palau</option>
                                            <option value="PSE">Palestinian Territories</option>
                                            <option value="PAN">Panama</option>
                                            <option value="PNG">Papua New Guinea</option>
                                            <option value="PRY">Paraguay</option>
                                            <option value="PER">Peru</option>
                                            <option value="PHL">Philippines</option>
                                            <option value="PCN">Pitcairn Island</option>
                                            <option value="POL">Poland</option>
                                            <option value="PRT">Portugal</option>
                                            <option value="PRI">Puerto Rico</option>
                                            <option value="QAT">Qatar</option>
                                            <option value="COG">Republic of the Congo</option>
                                            <option value="REU">Reunion</option>
                                            <option value="ROU">Romania</option>
                                            <option value="RUS">Russia</option>
                                            <option value="RWA">Rwanda</option>
                                            <option value="SGS">S. Georgia and Sandwich Is.</option>
                                            <option value="WSM">Samoa</option>
                                            <option value="SMR">San Marino</option>
                                            <option value="STP">Sao Tome and Principe</option>
                                            <option value="SAU">Saudi Arabia</option>
                                            <option value="SEN">Senegal</option>
                                            <option value="SRB">Serbia</option>
                                            <option value="SYC">Seychelles</option>
                                            <option value="SLE">Sierra Leone</option>
                                            <option value="SGP">Singapore</option>
                                            <option value="SXM">Sint Maarten</option>
                                            <option value="SVK">Slovakia</option>
                                            <option value="SVN">Slovenia</option>
                                            <option value="SLB">Solomon Islands</option>
                                            <option value="ZAF">South Africa</option>
                                            <option value="KOR">South Korea</option>
                                            <option value="ESP">Spain</option>
                                            <option value="LKA">Sri Lanka</option>
                                            <option value="BLM">St. Barthelemy</option>
                                            <option value="SHN">St. Helena</option>
                                            <option value="KNA">St. Kitts and Nevis</option>
                                            <option value="LCA">St. Lucia</option>
                                            <option value="MAF">St. Martin</option>
                                            <option value="SPM">St. Pierre and Miquelon</option>
                                            <option value="VCT">St. Vincent and the Grenadines</option>
                                            <option value="SUR">Suriname</option>
                                            <option value="SJM">Svalbard</option>
                                            <option value="SWE">Sweden</option>
                                            <option value="CHE">Switzerland</option>
                                            <option value="TWN">Taiwan</option>
                                            <option value="TJK">Tajikistan</option>
                                            <option value="TZA">Tanzania</option>
                                            <option value="THA">Thailand</option>
                                            <option value="TLS">Timor Leste</option>
                                            <option value="TGO">Togo</option>
                                            <option value="TKL">Tokelau</option>
                                            <option value="TON">Tonga</option>
                                            <option value="TTO">Trinidad and Tobago</option>
                                            <option value="TUN">Tunisia</option>
                                            <option value="TUR">Turkey</option>
                                            <option value="TKM">Turkmenistan</option>
                                            <option value="TCA">Turks and Caicos</option>
                                            <option value="TUV">Tuvalu</option>
                                            <option value="VIR">U.S. Virgin Islands</option>
                                            <option value="UGA">Uganda</option>
                                            <option value="UKR">Ukraine</option>
                                            <option value="ARE">United Arab Emirates</option>
                                            <option value="GBR">United Kingdom</option>
                                            <option value="USA" selected="">United States of America</option>
                                            <option value="URY">Uruguay</option>
                                            <option value="UMI">US Minor Outlying Islands</option>
                                            <option value="UZB">Uzbekistan</option>
                                            <option value="VUT">Vanuatu</option>
                                            <option value="VAT">Vatican City</option>
                                            <option value="VEN">Venezuela</option>
                                            <option value="VNM">Vietnam</option>
                                            <option value="WLF">Wallis and Futuna</option>
                                            <option value="ESH">Western Sahara</option>
                                            <option value="ZMB">Zambia</option>
                                            <option value="ZWE">Zimbabwe</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="formGridAddress1">
                                        <Form.Label>Billing address 1</Form.Label>
                                        <Form.Control className='col-lg-6' placeholder="123 Main St" />
                                    </Form.Group>

                                    <Form.Group controlId="formGridAddress2">
                                        <Form.Label>Billing address 2</Form.Label>
                                        <Form.Control className='col-lg-6' placeholder="Apartment, studio, or floor" />
                                    </Form.Group>

                                    <Form.Row>
                                        <Form.Group className='col-lg-3' as={Col} controlId="formGridCity">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control />
                                        </Form.Group>

                                        <Form.Group className='col-sm-2' as={Col} controlId="formGridState">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control as="select" required custom>
                                                <option value="">Select</option>
                                                <option value="AL">AL</option><option value="AK">AK</option><option value="AZ">AZ</option><option value="AR">AR</option><option value="CA">CA</option><option value="CO">CO</option><option value="CT">CT</option><option value="DE">DE</option><option value="DC">DC</option><option value="FL">FL</option><option value="GA">GA</option><option value="HI">HI</option><option value="ID">ID</option><option value="IL">IL</option><option value="IN">IN</option><option value="IA">IA</option><option value="KS">KS</option><option value="KY">KY</option><option value="LA">LA</option><option value="ME">ME</option><option value="MD">MD</option><option value="MA">MA</option><option value="MI">MI</option><option value="MN">MN</option><option value="MS">MS</option><option value="MO">MO</option><option value="MT">MT</option><option value="NE">NE</option><option value="NV">NV</option><option value="NH">NH</option><option value="NJ">NJ</option><option value="NM">NM</option><option value="NY">NY</option><option value="NC">NC</option><option value="ND">ND</option><option value="OH">OH</option><option value="OK">OK</option><option value="OR">OR</option><option value="PA">PA</option><option value="RI">RI</option><option value="SC">SC</option><option value="SD">SD</option><option value="TN">TN</option><option value="TX">TX</option><option value="UT">UT</option><option value="VT">VT</option><option value="VA">VA</option><option value="WA">WA</option><option value="WV">WV</option><option value="WI">WI</option><option value="WY">WY</option><option value="AS">AS</option><option value="FM">FM</option><option value="GU">GU</option><option value="MH">MH</option><option value="MP">MP</option><option value="PW">PW</option><option value="PR">PR</option><option value="VI">VI</option><option value="AA">AA</option><option value="AE">AE</option><option value="AP">AP</option>
                                            </Form.Control>
                                        </Form.Group>

                                        <Form.Group className='col-sm-2' as={Col} controlId="formGridZip">
                                            <Form.Label>Zip</Form.Label>
                                            <Form.Control />
                                        </Form.Group>
                                    </Form.Row>

                                </Card.Text>

                            </Card.Body>
                        </Card>

                        <Card style={{ marginBottom: '10px' }} className='card'>
                            <Card.Header>
                                <span>
                                    <svg style={{ marginBottom: '8px', marginRight: '5px' }} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-clipboard-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                        <path fill-rule="evenodd" d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                    </svg>
                                    <h4 style={{ display: "inline" }}>Review and book your trip</h4>
                                </span>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <h6>Please Read!</h6>
                                </Card.Title>
                                <Card.Text>
                                    <ol>
                                        <li>Review your trip details to make sure the dates and times are correct.</li>
                                        <li>Check your spelling. Flight passenger names must match government-issued photo ID exactly.</li>
                                        <li>
                                            Review the terms of your booking:
                                        <ul>
                                                <li>Airline assigns seats</li>
                                                <li>Bring a carry-on bag</li>
                                                <li>Pay to bring a checked bag</li>
                                            </ul>
                                        </li>
                                    </ol>
                                    <p>By selecting to complete this booking, I acknowledge that I have read and accept the above Rules & Restrictions.</p>
                                    <Button size="lg" type='submit' variant="outline-success">Complete Booking
                                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </Button>{' '}
                                    <div className='message'>
                                        <svg style={{ marginBottom: '5px', marginRight: '5px' }} width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-lock" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M11.5 8h-7a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-7-1a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7zm0-3a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z" />
                                        </svg>
                                        <p style={{ fontSize: '14px', display: "inline" }}>We use secure transmission and encrypted storage to protect your personal information.</p>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Form>
                </div>

            </div >
        )
    }
}

export default Booking