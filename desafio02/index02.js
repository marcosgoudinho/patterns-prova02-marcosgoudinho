// Implementação (Implementor)
class Device {
    turnOn() {}
    turnOff() {}
  }
  
  // Implementação concreta (ConcreteImplementor)
  class TV extends Device {
    turnOn() {
      console.log("TV ligada.");
    }
  
    turnOff() {
      console.log("TV desligada.");
    }
  }
  
  // Outra possível implementação (para mostrar a flexibilidade)
  class Radio extends Device {
    turnOn() {
      console.log("Rádio ligado.");
    }
  
    turnOff() {
      console.log("Rádio desligado.");
    }
  }
  
  // Abstração (Abstraction)
  class RemoteControl {
    constructor(device) {
      this.device = device;
    }
  
    pressPowerButton(on) {
      if (on) this.device.turnOn();
      else this.device.turnOff();
    }
  }
  
  // Uso
  
  const tv = new TV();
  const remoteTV = new RemoteControl(tv);
  remoteTV.pressPowerButton(true);
  remoteTV.pressPowerButton(false);
  
  const radio = new Radio();
  const remoteRadio = new RemoteControl(radio);
  remoteRadio.pressPowerButton(true);
  remoteRadio.pressPowerButton(false);
  