import { LegacyPaymentSystem, ModernPaymentAPI, PaymentProcessor } from './problemAdapter.js';

class ModernPaymentAdapter {
  constructor(modernAPI) {
    this.modernAPI = modernAPI;
  }

  makePayment(amount) {
    const amountInCents = amount * 100;
    this.modernAPI.process(amountInCents);
  }
}

const legacySystem = new LegacyPaymentSystem();
const legacyProcessor = new PaymentProcessor(legacySystem);
legacyProcessor.pay(100); 

const modernAPI = new ModernPaymentAPI();
const adaptedSystem = new ModernPaymentAdapter(modernAPI);
const modernProcessor = new PaymentProcessor(adaptedSystem);
modernProcessor.pay(150); 