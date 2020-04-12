var homepage = require('../pages/homepage');

describe('Calculator website demo tests', function () {
    it('addition test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('100');

        homepage.enterSecondNumber('200');

        homepage.clickGo();

        homepage.verifyResult('300');
        browser.sleep(2000);

    });
    it('substraction test', function(){
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('500');
        homepage.selectOperator('-');
        homepage.enterSecondNumber('100');
        homepage.clickGo();
        homepage.verifyResult('400');
        browser.sleep(2000);
    });

    it('Multiplication test', function(){
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('5');
        homepage.selectOperator('*');
        homepage.enterSecondNumber('2');
        homepage.clickGo();
        homepage.verifyResult('10');
        browser.sleep(2000);
    });

    it('Multiplication test', function(){
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('6');
        homepage.selectOperator('/');
        homepage.enterSecondNumber('2');
        homepage.clickGo();
        homepage.verifyResult('3');
        browser.sleep(2000);
    });
});