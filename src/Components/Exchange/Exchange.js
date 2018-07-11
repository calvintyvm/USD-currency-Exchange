import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import "./styles.css";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Flag from "react-world-flags";

const usdAPI = "https://exchangeratesapi.io/api/latest?base=USD ";

class Exchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      input1: 1,
      input2: 1,
      input3: 1,
      input4: 1,
      input5: 1,
      input6: 1,
      input7: 1,
      input8: 1,
      input9: 1,
      input10: 1,
      input11: 1,
      input12: 1,
      input13: 1,
      input14: 1,
      input15: 1,
      input16: 1,
      input17: 1,
      input18: 1,
      input19: 1,
      input20: 1,
      input21: 1,
      input22: 1,
      input23: 1,
      input24: 1,
      input25: 1,
      input26: 1,
      input27: 1,
      input28: 1,
      input29: 1,
      input30: 1,
      input31: 1,
      input32: 0
    };
  }

  componentDidMount() {
    fetch(usdAPI)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
  }

  render() {
    return (
      <Wrapper>
        <ListContainer>
          <li>
            <h2>Australian Dollar</h2>
            <Card>
              <CardContent className="card">
                {/* <TextField
                  id="with-placeholder"
                  label="Australian Dollar"
                  placeholder="Enter Here"
                  className="textField"
                  margin="normal"
                  type="number"
                  onChange={e => {
                    this.setState({ input1: e.target.value });
                  }}
                /> */}
                <FormControl fullWidth>
                  <InputLabel htmlFor="adornment-amount">Amount</InputLabel>
                  <Input
                    id="adornment-amount"
                    onChange={e => {
                      this.setState({ input1: e.target.value });
                    }}
                    value={this.state.input1}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="aus" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates &&
                        this.state.data.rates.AUD * this.state.input1
                    )}
                  </p>
                  <p> AUD</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input2: e.target.value });
                    }}
                    value={this.state.input2}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="bg" height="30" />
                  <p className="rate">
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.BGN
                    ) * this.state.input2}
                  </p>
                  <p> BGN</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input3: e.target.value });
                    }}
                    value={this.state.input3}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="br" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.BRL
                    ) * this.state.input3}
                  </p>
                  <p>BRL</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input4: e.target.value });
                    }}
                    value={this.state.input4}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="ca" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.CAD
                    ) * this.state.input4}
                  </p>
                  <p> CAD </p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input5: e.target.value });
                    }}
                    value={this.state.input5}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="ch" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.CHF
                    ) * this.state.input5}
                  </p>
                  <p>CHF</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input6: e.target.value });
                    }}
                    value={this.state.input6}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="cn" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.CNY
                    ) * this.state.input6}
                  </p>
                  <p>CNY</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input7: e.target.value });
                    }}
                    value={this.state.input7}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="cz" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.CZK
                    ) * this.state.input7}
                  </p>
                  <p>CZK</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input8: e.target.value });
                    }}
                    value={this.state.input8}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="dk" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.DKK
                    ) * this.state.input8}
                  </p>
                  <p>DKK</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input9: e.target.value });
                    }}
                    value={this.state.input9}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="e" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.EUR
                    ) * this.state.input9}
                  </p>
                  <p>EUR</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input10: e.target.value });
                    }}
                    value={this.state.input10}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="gb" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.GBP
                    ) * this.state.input10}
                  </p>
                  <p>GBP</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input11: e.target.value });
                    }}
                    value={this.state.input11}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="hk" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.HKD
                    ) * this.state.input11}
                  </p>
                  <p>HKD</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input12: e.target.value });
                    }}
                    value={this.state.input12}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="hu" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.HUF
                    ) * this.state.input12}
                  </p>
                  <p>HUF</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input13: e.target.value });
                    }}
                    value={this.state.input13}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="id" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.IDR
                    ) * this.state.input13}
                  </p>
                  <p>IDR</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input14: e.target.value });
                    }}
                    value={this.state.input14}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="il" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.ILS
                    ) * this.state.input14}
                  </p>
                  <p>ILS</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input15: e.target.value });
                    }}
                    value={this.state.input15}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="in" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.INR
                    ) * this.state.input15}
                  </p>
                  <p>INR</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input16: e.target.value });
                    }}
                    value={this.state.input16}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="is" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.ISK
                    ) * this.state.input16}
                  </p>
                  <p>ISK</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input17: e.target.value });
                    }}
                    value={this.state.input17}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="jp" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.JPY
                    ) * this.state.input17}
                  </p>
                  <p>JPY</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input18: e.target.value });
                    }}
                    value={this.state.input18}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="kr" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.KRW
                    ) * this.state.input18}
                  </p>
                  <p>KRW</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input19: e.target.value });
                    }}
                    value={this.state.input19}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="mx" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.MXN
                    ) * this.state.input19}
                  </p>
                  <p>MXN</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input20: e.target.value });
                    }}
                    value={this.state.input20}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="my" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.MYR
                    ) * this.state.input20}
                  </p>
                  <p>MYR</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input21: e.target.value });
                    }}
                    value={this.state.input21}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="no" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.NOK
                    ) * this.state.input21}
                  </p>
                  <p>NOK</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input22: e.target.value });
                    }}
                    value={this.state.input22}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="nz" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.NZD
                    ) * this.state.input22}
                  </p>
                  <p>NZD</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input23: e.target.value });
                    }}
                    value={this.state.input23}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="ph" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.PHP
                    ) * this.state.input23}
                  </p>
                  <p>PHP</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input24: e.target.value });
                    }}
                    value={this.state.input24}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <p>
                    <Flag code="pl" height="30" />
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.PLN
                    ) * this.state.input24}
                  </p>
                  <p>PLN</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input25: e.target.value });
                    }}
                    value={this.state.input25}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="ro" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.RON
                    ) * this.state.input25}
                  </p>
                  <p>RON</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input26: e.target.value });
                    }}
                    value={this.state.input26}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="ru" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.RUB
                    ) * this.state.input26}
                  </p>
                  <p>RUB</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input27: e.target.value });
                    }}
                    value={this.state.input27}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="se" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.SEK
                    ) * this.state.input27}
                  </p>
                  <p>SEK</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input28: e.target.value });
                    }}
                    value={this.state.input28}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="sg" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.SGD
                    ) * this.state.input28}
                  </p>
                  <p>SGD</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input29: e.target.value });
                    }}
                    value={this.state.input29}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="th" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.THB
                    ) * this.state.input29}
                  </p>
                  <p>THB</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input30: e.target.value });
                    }}
                    value={this.state.input30}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="tr" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.TRY
                    ) * this.state.input30}
                  </p>
                  <p>TRY</p>
                </RateContainer>
              </CardContent>
            </Card>
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
                      this.setState({ input31: e.target.value });
                    }}
                    value={this.state.inpu31}
                    startAdornment={
                      <InputAdornment position="start">USD</InputAdornment>
                    }
                    type="number"
                  />
                </FormControl>
                <RateContainer>
                  <Flag code="za" height="30" />
                  {/* {this.state.input31 == 0
                    ? "Enter USD"
                    : `${this.roundToTwo(
                        this.state.data.rates && this.state.data.rates.ZAR
                      ) * this.state.input31} ZAR`} */}
                  <Flag code="za" height="30" />
                  <p>
                    {this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.ZAR
                    ) * this.state.input31}
                  </p>
                  <p>ZAR</p>
                </RateContainer>
              </CardContent>
            </Card>
          </li>
        </ListContainer>
      </Wrapper>
    );
  }
}

export default Exchange;

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ListContainer = styled.ul`
  justify-content: space-between;
  padding-left: 0px;
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
