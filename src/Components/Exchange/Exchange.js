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
import AustraliaFlag from "../../assets/images/flags.png";

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
                {/* {this.roundNumber(
                  (this.state.data.rates && this.state.data.rates.AUD) *
                    this.state.input1
                )} */}
                {/* {this.roundToTwo(
                  (this.state.data.rates &&
                    this.state.data.rates.AUD.toFixed(3)) * this.state.input1
                )} */}
                <RateContainer>
                  <img src={AustraliaFlag} />
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
            <Card>
              <CardContent className="card">
                <TextField
                  type="number"
                  id="with-placeholder"
                  label="Bulgarian Lev"
                  placeholder="Enter Here"
                  className="textField"
                  margin="normal"
                  onChange={e => {
                    this.setState({ input2: e.target.value });
                  }}
                />
                <RateContainer>
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
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Brazilian Real"
                  placeholder="Enter Here"
                  className="textField"
                  margin="normal"
                  type="number"
                  onChange={e => {
                    this.setState({ input3: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.BRL
                ) * this.state.input3}
                BRL
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Canadian Dollar"
                  placeholder="Enter Here"
                  className="textField"
                  margin="normal"
                  type="number"
                  onChange={e => {
                    this.setState({ input4: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.CAD
                ) * this.state.input4}
                CAD
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Swiss Franc"
                  placeholder="Enter Here"
                  className="textField"
                  margin="normal"
                  type="number"
                  onChange={e => {
                    this.setState({ input5: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.CHF
                ) * this.state.input5}
                CHF
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Chinese Yuan"
                  placeholder="Enter Here"
                  className="textField"
                  margin="normal"
                  type="number"
                  onChange={e => {
                    this.setState({ input6: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.CNY
                ) * this.state.input6}
                CNY
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Czech Koruna"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input7: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.CZK
                ) * this.state.input7}
                CZK
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Danish Krone"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input8: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.DKK
                ) * this.state.input8}
                DKK
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Euro"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input9: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.EUR
                ) * this.state.input9}
                EUR
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="British Pound"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input10: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.GBP
                ) * this.state.input10}
                GBP
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Hong Kong Dollar"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input11: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.HKD
                ) * this.state.input11}
                HKD
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Hungarian Forint"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input12: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.HUF
                ) * this.state.input12}
                HUF
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Indonesian Rupiah"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input13: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.IDR
                ) * this.state.input13}
                IDR
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Israeli New Shekel"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input14: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.ILS
                ) * this.state.input14}
                ILS
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Indian Rupee"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input15: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.INR
                ) * this.state.input15}
                INR
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Icelandic Króna"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input16: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.ISK
                ) * this.state.input16}
                ISK
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Japanese Yen"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input17: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.JPY
                ) * this.state.input17}
                JPY
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="South Korean Won"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input18: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.KRW
                ) * this.state.input18}
                KRW
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Mexican Peso"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input19: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.MXN
                ) * this.state.input19}
                MXN
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Malaysian Ringgit"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input20: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.MYR
                ) * this.state.input20}
                MYR
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Norwegian Krone"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input21: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.NOK
                ) * this.state.input21}
                NOK
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="New Zealand Dollar"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input22: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.NZD
                ) * this.state.input22}
                NZD
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Philippine Piso"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input23: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.PHP
                ) * this.state.input23}
                PHP
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label=" Poland złoty"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input24: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.PLN
                ) * this.state.input24}
                PLN
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Romanian Leu"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input25: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.RON
                ) * this.state.input25}
                RON
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Russian Ruble"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input26: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.RUB
                ) * this.state.input26}
                RUB
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Swedish Krona"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input27: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.SEK
                ) * this.state.input27}
                SEK
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Singaporean Dollar"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input24: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.SGD
                ) * this.state.input28}
                SGD
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Thai Baht"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input1: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.THB
                ) * this.state.input29}
                THB
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="Turkish lira"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input30: e.target.value });
                  }}
                />
                {this.roundToTwo(
                  this.state.data.rates && this.state.data.rates.TRY
                ) * this.state.input30}
                TRY
              </CardContent>
            </Card>
          </li>
          <li>
            <Card>
              <CardContent className="card">
                <TextField
                  id="with-placeholder"
                  label="South African Rand"
                  placeholder="Enter Here"
                  className="textField"
                  type="number"
                  onChange={e => {
                    this.setState({ input31: e.target.value });
                  }}
                />
                {this.state.input31 == 0
                  ? "Enter USD"
                  : `${this.roundToTwo(
                      this.state.data.rates && this.state.data.rates.ZAR
                    ) * this.state.input31} ZAR`}
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
