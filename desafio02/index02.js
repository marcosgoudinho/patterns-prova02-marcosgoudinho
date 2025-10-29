import { TV } from './problemBridge.js';

class RemoteControl {
  constructor(device) {
    this.device = device;
  }

  pressPowerButton(on) {
    if (on) this.device.turnOn();
    else this.device.turnOff();
  }
}

class TVDevice extends TV {}

class Radio {
  turnOn() {
    console.log("Rádio ligado.");
  }

  turnOff() {
    console.log("Rádio desligado.");
  }
}

const tv = new TVDevice();
const radio = new Radio();

const tvRemote = new RemoteControl(tv);
const radioRemote = new RemoteControl(radio);

tvRemote.pressPowerButton(true);   
tvRemote.pressPowerButton(false);  

radioRemote.pressPowerButton(true);   
radioRemote.pressPowerButton(false);
