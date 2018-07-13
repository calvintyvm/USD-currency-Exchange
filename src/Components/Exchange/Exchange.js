import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import "./styles.css";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
import Flag from "react-world-flags";
import moment from "moment";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  setAudPrice,
  setBgnPrice,
  setBrlPrice,
  setCadPrice,
  setChfPrice,
  setCnyPrice,
  setCzkPrice,
  setDkkPrice,
  setEurPrice,
  setGbpPrice,
  setHkdPrice,
  setHufPrice,
  setIdrPrice,
  setIlsPrice,
  setInrPrice,
  setIskPrice,
  setJpyPrice,
  setKrwPrice,
  setMxnPrice,
  setMyrPrice,
  setNokPrice,
  setNzdPrice,
  setPhpPrice,
  setPlnPrice,
  setRonPrice,
  setRubPrice,
  setSekPrice,
  setSgdPrice,
  setThbPrice,
  setTryPrice,
  setZarPrice
} from "../../redux/modules/SetPrice";
import {
  fetchTodayPrices,
  fetchYesterdayPrices
} from "../../redux/modules/PriceChange";
import Cards from "../Cards/Cards.js";

let yesterdaysDate = moment()
  .subtract(1, "days")
  .format("YYYY-MM-DD")
  .split("/")
  .join("-");

const yesterdayAPI = `https://exchangeratesapi.io/api/${yesterdaysDate}?base=USD`;
const usdAPI = "https://exchangeratesapi.io/api/latest?base=USD ";
class Exchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchTodayPrices());
    this.props.dispatch(fetchYesterdayPrices());

    fetch(usdAPI)
      .then(response => response.json())
      .then(data => this.setState({ data }));

    fetch(usdAPI)
      .then(response => response.json())
      .then(data => this.setState({ test: data.rates, isLoaded: true }));

    fetch(yesterdayAPI)
      .then(response => response.json())
      .then(data => this.setState({ yesterdayData: data }));
  }

  roundToThree(num) {
    return Number.parseFloat(num).toPrecision(5);
  }

  render() {
    let calculateDifference = (today, yesterday) => {
      return this.roundToThree((today - yesterday) / today);
    };

    return (
      <Wrapper>
        <ListContainer>
          <li>
            <h2>Australian Dollar</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setAudPrice(e.target.value));
                    }}
                    value={this.props.aud}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="aus" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.AUD * this.props.aud
                    )}
                  </p>
                  <p> AUD</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.AUD,
                    this.props.yesterdayData.AUD
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.AUD,
                    this.props.yesterdayData.AUD
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.AUD,
                    this.props.yesterdayData.AUD
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Bulgarian Lev</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setBgnPrice(e.target.value));
                    }}
                    value={this.props.bgn}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="bg" height="30" />
                  <p className="rate">
                    {this.roundToThree(
                      this.props.todayData.BGN * this.props.bgn
                    )}
                  </p>
                  <p> BGN</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.BGN,
                    this.props.yesterdayData.BGN
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.BGN,
                    this.props.yesterdayData.BGN
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.BGN,
                    this.props.yesterdayData.BGN
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Brazilian Real</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setBrlPrice(e.target.value));
                    }}
                    value={this.props.brl}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="br" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.BRL * this.props.brl
                    )}
                  </p>
                  <p>BRL</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.BRL,
                    this.props.yesterdayData.BRL
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.BRL,
                    this.props.yesterdayData.BRL
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.BRL,
                    this.props.yesterdayData.BRL
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Canadian Dollar</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setCadPrice(e.target.value));
                    }}
                    value={this.props.cad}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="ca" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.CAD * this.props.cad
                    )}
                  </p>
                  <p> CAD </p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.CAD,
                    this.props.yesterdayData.CAD
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.CAD,
                    this.props.yesterdayData.CAD
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.CAD,
                    this.props.yesterdayData.CAD
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Swiss Franc</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setChfPrice(e.target.value));
                    }}
                    value={this.props.chf}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="ch" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.CHF * this.props.chf
                    )}
                  </p>
                  <p>CHF</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.CHF,
                    this.props.yesterdayData.CHF
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.CHF,
                    this.props.yesterdayData.CHF
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.CHF,
                    this.props.yesterdayData.CHF
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Chinese Yuan</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setCnyPrice(e.target.value));
                    }}
                    value={this.props.cny}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="cn" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.CNY * this.props.cny
                    )}
                  </p>
                  <p>CNY</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.CNY,
                    this.props.yesterdayData.CNY
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.CNY,
                    this.props.yesterdayData.CNY
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.CNY,
                    this.props.yesterdayData.CNY
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Czech Koruna</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setCzkPrice(e.target.value));
                    }}
                    value={this.props.czk}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="cz" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.CZK * this.props.czk
                    )}
                  </p>
                  <p>CZK</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.CZK,
                    this.props.yesterdayData.CZK
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.CZK,
                    this.props.yesterdayData.CZK
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.CZK,
                    this.props.yesterdayData.CZK
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Danish Krone</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setDkkPrice(e.target.value));
                    }}
                    value={this.props.dkk}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="dk" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.DKK * this.props.dkk
                    )}
                  </p>
                  <p>DKK</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.DKK,
                    this.props.yesterdayData.DKK
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.DKK,
                    this.props.yesterdayData.DKK
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.DKK,
                    this.props.yesterdayData.DKK
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Euro</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setEurPrice(e.target.value));
                    }}
                    value={this.props.eur}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="e" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.EUR * this.props.eur
                    )}
                  </p>
                  <p>EUR</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.EUR,
                    this.props.yesterdayData.EUR
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.EUR,
                    this.props.yesterdayData.EUR
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.EUR,
                    this.props.yesterdayData.EUR
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Great British Pound</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setGbpPrice(e.target.value));
                    }}
                    value={this.props.gbp}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="gb" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.GBP * this.props.gbp
                    )}
                  </p>
                  <p>GBP</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.GBP,
                    this.props.yesterdayData.GBP
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.GBP,
                    this.props.yesterdayData.GBP
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.GBP,
                    this.props.yesterdayData.GBP
                  )}
                </h2>
                <h2> USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Hong Kong Dollar</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setHkdPrice(e.target.value));
                    }}
                    value={this.props.hkd}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="hk" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.HKD * this.props.hkd
                    )}
                  </p>
                  <p>HKD</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.HKD,
                    this.props.yesterdayData.HKD
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.HKD,
                    this.props.yesterdayData.HKD
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.HKD,
                    this.props.yesterdayData.HKD
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Hungarian Forint</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setHufPrice(e.target.value));
                    }}
                    value={this.props.huf}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="hu" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.HUF * this.props.huf
                    )}
                  </p>
                  <p>HUF</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.HUF,
                    this.props.yesterdayData.HUF
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.HUF,
                    this.props.yesterdayData.HUF
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.HUF,
                    this.props.yesterdayData.HUF
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Indonesian Rupiah</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setIdrPrice(e.target.value));
                    }}
                    value={this.props.idr}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="id" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.IDR * this.props.idr
                    )}
                  </p>
                  <p>IDR</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.IDR,
                    this.props.yesterdayData.IDR
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.IDR,
                    this.props.yesterdayData.IDR
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.IDR,
                    this.props.yesterdayData.IDR
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Israeli New Shekel</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setIlsPrice(e.target.value));
                    }}
                    value={this.props.ils}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="il" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.ILS * this.props.ils
                    )}
                  </p>
                  <p>ILS</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.ILS,
                    this.props.yesterdayData.ILS
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.ILS,
                    this.props.yesterdayData.ILS
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.ILS,
                    this.props.yesterdayData.ILS
                  )}
                  USD
                </h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Indian Rupee</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setInrPrice(e.target.value));
                    }}
                    value={this.props.inr}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="in" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.INR * this.props.inr
                    )}
                  </p>
                  <p>INR</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.INR,
                    this.props.yesterdayData.INR
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.INR,
                    this.props.yesterdayData.INR
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.INR,
                    this.props.yesterdayData.INR
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Icelandic Króna</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setIskPrice(e.target.value));
                    }}
                    value={this.props.isk}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="is" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.ISK * this.props.isk
                    )}
                  </p>
                  <p>ISK</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.ISK,
                    this.props.yesterdayData.ISK
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.ISK,
                    this.props.yesterdayData.ISK
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.ISK,
                    this.props.yesterdayData.ISK
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Japanese Yen</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setJpyPrice(e.target.value));
                    }}
                    value={this.props.jpy}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="jp" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.JPY * this.props.jpy
                    )}
                  </p>
                  <p>JPY</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.JPY,
                    this.props.yesterdayData.JPY
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.JPY,
                    this.props.yesterdayData.JPY
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.JPY,
                    this.props.yesterdayData.JPY
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>South Korean Won</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setKrwPrice(e.target.value));
                    }}
                    value={this.props.krw}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="kr" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.KRW * this.props.krw
                    )}
                  </p>
                  <p>KRW</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.KRW,
                    this.props.yesterdayData.KRW
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.KRW,
                    this.props.yesterdayData.KRW
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.KRW,
                    this.props.yesterdayData.KRW
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Mexican Peso</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setMxnPrice(e.target.value));
                    }}
                    value={this.props.mxn}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="mx" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.MXN * this.props.mxn
                    )}
                  </p>
                  <p>MXN</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.MXN,
                    this.props.yesterdayData.MXN
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.MXN,
                    this.props.yesterdayData.MXN
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.MXN,
                    this.props.yesterdayData.MXN
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Malaysian Ringgit</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setMyrPrice(e.target.value));
                    }}
                    value={this.props.myr}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="my" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.MYR * this.props.myr
                    )}
                  </p>
                  <p>MYR</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.MYR,
                    this.props.yesterdayData.MYR
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.MYR,
                    this.props.yesterdayData.MYR
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.MYR,
                    this.props.yesterdayData.MYR
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Norwegian Krone </h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setNokPrice(e.target.value));
                    }}
                    value={this.props.nok}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="no" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.NOK * this.props.nok
                    )}
                  </p>
                  <p>NOK</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.NOK,
                    this.props.yesterdayData.NOK
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.NOK,
                    this.props.yesterdayData.NOK
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.NOK,
                    this.props.yesterdayData.NOK
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>New Zealand Dollar</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setNzdPrice(e.target.value));
                    }}
                    value={this.props.nzd}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="nz" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.NZD * this.props.nzd
                    )}
                  </p>
                  <p>NZD</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.NZD,
                    this.props.yesterdayData.NZD
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.NZD,
                    this.props.yesterdayData.NZD
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.NZD,
                    this.props.yesterdayData.NZD
                  )}
                </h2>
                <h2> USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Philippine Piso</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setPhpPrice(e.target.value));
                    }}
                    value={this.props.php}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="ph" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.PHP * this.props.php
                    )}
                  </p>
                  <p>PHP</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.PHP,
                    this.props.yesterdayData.PHP
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.PHP,
                    this.props.yesterdayData.PHP
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.PHP,
                    this.props.yesterdayData.PHP
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Poland złoty</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setPlnPrice(e.target.value));
                    }}
                    value={this.props.pln}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <p>
                    <Flag code="pl" height="30" />
                    {this.roundToThree(
                      this.props.todayData.PLN * this.props.pln
                    )}
                  </p>
                  <p>PLN</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.PLN,
                    this.props.yesterdayData.PLN
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.PLN,
                    this.props.yesterdayData.PLN
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.PLN,
                    this.props.yesterdayData.PLN
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Romanian Leu</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setRonPrice(e.target.value));
                    }}
                    value={this.props.ron}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="ro" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.RON * this.props.ron
                    )}
                  </p>
                  <p>RON</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.RON,
                    this.props.yesterdayData.RON
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.RON,
                    this.props.yesterdayData.RON
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.RON,
                    this.props.yesterdayData.RON
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Russian Ruble </h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setRubPrice(e.target.value));
                    }}
                    value={this.props.rub}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="ru" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.RUB * this.props.rub
                    )}
                  </p>
                  <p>RUB</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.RUB,
                    this.props.yesterdayData.RUB
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.RUB,
                    this.props.yesterdayData.RUB
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.RUB,
                    this.props.yesterdayData.RUB
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Swedish Krona</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setSekPrice(e.target.value));
                    }}
                    value={this.props.sek}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="se" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.SEK * this.props.sek
                    )}
                  </p>
                  <p>SEK</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.SEK,
                    this.props.yesterdayData.SEK
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.SEK,
                    this.props.yesterdayData.SEK
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.SEK,
                    this.props.yesterdayData.SEK
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Singaporean Dollar</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setSgdPrice(e.target.value));
                    }}
                    value={this.props.sgd}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="sg" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.SGD * this.props.sgd
                    )}
                  </p>
                  <p>SGD</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.SGD,
                    this.props.yesterdayData.SGD
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.SGD,
                    this.props.yesterdayData.SGD
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.SGD,
                    this.props.yesterdayData.SGD
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Thai Baht</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setThbPrice(e.target.value));
                    }}
                    value={this.props.thb}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="th" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.THB * this.props.thb
                    )}
                  </p>
                  <p>THB</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.THB,
                    this.props.yesterdayData.THB
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.THB,
                    this.props.yesterdayData.THB
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.THB,
                    this.props.yesterdayData.THB
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>Turkish Lira</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setTryPrice(e.target.value));
                    }}
                    value={this.props.try}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="tr" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.TRY * this.props.try
                    )}
                  </p>
                  <p>TRY</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.TRY,
                    this.props.yesterdayData.TRY
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.TRY,
                    this.props.yesterdayData.TRY
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.TRY,
                    this.props.yesterdayData.TRY
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
          <li>
            <h2>South African Rand</h2>
            <Card>
              <CardContent className="card">
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.props.dispatch(setZarPrice(e.target.value));
                    }}
                    value={this.props.zar}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="za" height="30" />
                  <p>
                    {this.roundToThree(
                      this.props.todayData.ZAR * this.props.zar
                    )}
                  </p>
                  <p>ZAR</p>
                </RateContainer>
              </CardContent>
            </Card>
            <ChangeContainer>
              <FontAwesomeIcon
                icon={
                  calculateDifference(
                    this.props.todayData.ZAR,
                    this.props.yesterdayData.ZAR
                  ) > 0
                    ? faArrowUp
                    : faArrowDown
                }
                style={
                  calculateDifference(
                    this.props.todayData.ZAR,
                    this.props.yesterdayData.ZAR
                  ) > 0
                    ? { color: "green" }
                    : { color: "red" }
                }
              />
              <div>
                <h2>
                  {calculateDifference(
                    this.props.todayData.ZAR,
                    this.props.yesterdayData.ZAR
                  )}
                </h2>
                <h2>USD</h2>
              </div>
            </ChangeContainer>
          </li>
        </ListContainer>
      </Wrapper>
    );
  }
}

export default connect(state => ({
  aud: state.SetPrice.aud,
  bgn: state.SetPrice.bgn,
  brl: state.SetPrice.brl,
  cad: state.SetPrice.cad,
  chf: state.SetPrice.chf,
  cny: state.SetPrice.cny,
  czk: state.SetPrice.czk,
  dkk: state.SetPrice.dkk,
  eur: state.SetPrice.eur,
  gbp: state.SetPrice.gbp,
  hkd: state.SetPrice.hkd,
  huf: state.SetPrice.huf,
  idr: state.SetPrice.idr,
  ils: state.SetPrice.ils,
  inr: state.SetPrice.inr,
  isk: state.SetPrice.isk,
  jpy: state.SetPrice.jpy,
  krw: state.SetPrice.krw,
  mxn: state.SetPrice.mxn,
  myr: state.SetPrice.myr,
  nok: state.SetPrice.nok,
  nzd: state.SetPrice.nzd,
  php: state.SetPrice.php,
  pln: state.SetPrice.pln,
  ron: state.SetPrice.ron,
  rub: state.SetPrice.rub,
  sek: state.SetPrice.sek,
  sgd: state.SetPrice.sgd,
  thb: state.SetPrice.thb,
  try: state.SetPrice.try,
  zar: state.SetPrice.zar,
  todayData: state.PriceChange.todayData,
  yesterdayData: state.PriceChange.yesterdayData
}))(Exchange);

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ListContainer = styled.ul`
  justify-content: space-between;
  padding-left: 0px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

const RateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
  p:nth-child(3) {
    font-weight: bold;
  }
`;

const ChangeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  div {
    display: flex;
    h2:nth-child(2) {
      margin-left: 5%;
    }
  }
`;
