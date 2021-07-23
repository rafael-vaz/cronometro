import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Touchable,
} from "react-native";

import Header from "./src/components/Header";

import { styles } from "./src/styles/index";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      horas: 0,
      minutos: 0,
      segundos: 0,
      ativo: false,
      voltas: [],
      registro: 0,
    };

    this.pulsoDeClock = this.pulsoDeClock.bind(this);
    this.iniciaRelogio = this.iniciaRelogio.bind(this);
    this.pararRelogio = this.pararRelogio.bind(this);
    this.marcarVolta = this.marcarVolta.bind(this);
    this.zerarRelogio = this.zerarRelogio.bind(this);
  }

  iniciaRelogio() {
    if (!this.state.ativo) {
      this.setState({ clock: setInterval(this.pulsoDeClock, 1000) });
      this.setState({ ativo: true });
    }
  }

  pulsoDeClock() {
    var h = this.state.horas;
    var m = this.state.minutos;
    var s = this.state.segundos;

    if (s < 59) {
      s++;
    } else {
      s = 0;
      if (m < 59) {
        m++;
      } else {
        m = 0;
        h++;
      }
    }
    this.setState({ segundos: s, minutos: m, horas: h });
  }

  pararRelogio() {
    if (this.state.ativo) {
      clearInterval(this.state.clock);
      this.setState({ ativo: false });
    }
  }

  marcarVolta() {
    var txtDoCronometro =
      this.formatar(this.state.horas) +
      ":" +
      this.formatar(this.state.minutos) +
      ":" +
      this.formatar(this.state.segundos) +
      "\n";

    this.state.voltas.push(txtDoCronometro);

    this.forceUpdate();
  }

  formatar(t) {
    return t > 10 ? "" + t.toString() : t.toString();
  }

  zerarRelogio() {
    this.pararRelogio();
    this.setState({ segundos: 0, minutos: 0, horas: 0 });

    if (this.state.voltas.length > 0) {
      this.state.voltas.push("------- \n");
    }
  }

  render() {
    var txtH = this.formatar(this.state.horas);
    var txtM = this.formatar(this.state.minutos);
    var txtS = this.formatar(this.state.segundos);

    let imageDraw = require("./src/images/clock-draw.svg");
    let resetDraw = require("./src/images/reset.svg");
    let recordDraw = require("./src/images/record.svg");
    let pauseDraw = require("./src/images/pause.svg");
    let playDraw = require("./src/images/play.svg");
    let backgroundDraw = require("./src/images/wave.svg");

    return (
      <ScrollView>
        <Header></Header>

        <View style={[styles.background]}>
          <Image style={[styles.image]} source={imageDraw} />
        </View>
        <View style={[styles.background]}>
          <Text style={[styles.mainText]}>
            {txtH}:{txtM}:{txtS}
          </Text>
        </View>

        <View style={[styles.backgroundButton]}>
          <TouchableOpacity
            style={[styles.btnStyle]}
            onPress={this.iniciaRelogio}
          >
            <Image style={[styles.btnImage2]} source={playDraw} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btnStyle]}
            onPress={this.pararRelogio}
          >
            <Image style={[styles.btnImage2]} source={pauseDraw} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btnStyle]}
            onPress={this.marcarVolta}
            title="Marcar Volta"
          >
            <Image style={[styles.btnImage2]} source={recordDraw} />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btnStyle]}
            onPress={this.zerarRelogio}
            title="Zerar"
          >
            <Image style={[styles.btnImage]} source={resetDraw} />
          </TouchableOpacity>
        </View>

        <View style={[styles.registroContent]}>
          <Text style={[styles.registroTitle]}>Registros:</Text>
          <Text style={[styles.registroText]}>{this.state.voltas}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default App;
