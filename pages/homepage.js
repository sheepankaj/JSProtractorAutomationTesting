var homepage = function () {
    
    let firstNumber_input = element(by.model('first'));
    let secondNumber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));
    let operator = element(by.model('operator'));

   this.get = function(url){
       browser.get(url);
   };

    this.enterFirstNumber = function(firstNo){
        firstNumber_input.sendKeys(firstNo);
    };
    this.enterSecondNumber = function(secondNo){
        secondNumber_input.sendKeys(secondNo);
    };
    this.clickGo = function(){
        goButton.click();
    };

    this.selectOperator = function(sub){
        operator.sendKeys(sub);
    };

    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);
    };
};

module.exports = new homepage();