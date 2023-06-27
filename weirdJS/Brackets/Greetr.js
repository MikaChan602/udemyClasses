(function (global, $) {
  // 'new' an Object
  var Greetr = function (firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };
  // hidden within the scope of the IIFE and never directly accessible;
  var supportedLangs = ["en", "es"]; // 隱蔽變數，外部無法取用;

  // informal greetings
  const greetings = {
    en: "Hello",
    es: "Hola",
  };
  // formal greetings
  const formalGreetings = {
    en: "Greetings",
    es: "Saludos",
  };
  // formal greetings
  const logMessages = {
    en: "Logged in",
    es: "Inicia sesión",
  };

  // 實體物件開始位置
  Greetr.prototype = {
    fullName: function () {
      return this.firstName + " " + this.lastName;
    },
    validate: function () {
      // check that is a valid language
      // references the externally inaccessible 'supportedLangs' within the closure
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },

    greeting: function () {
      return greetings[this.language] + " " + this.firstName + "!";
    },
    formalGreeting: function () {
      return formalGreetings[this.language] + ", " + this.fullName();
    },

    greet: function (formal) {
      var msg;
      // if undefined or null it will be coerced to 'false
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }
      // 'this' refers to the calling object at execution time
      // makes the method chainable
      if (console) {
        console.log(msg);
      }

      return this;
    },
    log: function () {
      if (console) {
        console.log(logMessages[this.language] + ": " + this.fullName());
      }
      return this;
    },
    setLang: function (lang) {
      this.language = lang;
      this.validate();
      // make chainable
      return this;
    },
    HTMLGreeting: function (selector, formal) {
      if (!$) {
        throw "jQuery not loaded";
      }

      if (!selector) {
        throw "Missing jQuery selector";
      }
      // determine the message
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      $(selector).html(msg);
      return this;
    },
  };
  // 實體物件結束位置

  // 真正函式開始的地方
  Greetr.init = function (firstName, lastName, language) {
    const self = this; // 先把this設定另一個變數，這樣才可以避免this指錯地方。
    self.firstName = firstName || "default";
    self.lastName = lastName || "default";
    self.language = language || "en";
  };

  Greetr.init.prototype = Greetr.prototype;

  global.Greetr = global.$G = Greetr;
  return global.Greetr;
})(window, jQuery);
