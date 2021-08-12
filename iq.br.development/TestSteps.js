const { browser, by, element } = require("protractor");
var herokuappPage = require("../iq.br.pages/HerokuappPage");

beforeEach( function() {
    browser.get('http://the-internet.herokuapp.com/');
    
  });

describe('verify ui elements on herokuapp.com', function() {
    it('verify checkbox can be selected', function() {
     herokuappPage.getCheckboxLink().click();
     herokuappPage.getCheckbox1Button().click();
     expect(herokuappPage.getCheckbox1Button().isSelected()).toBe(true);
    });

    it('verify dropdown options', function() {
        herokuappPage.getDropdownLink().click();
        var dropdownOptions= herokuappPage.dropdownOptionList();
        expect(dropdownOptions.count()).toEqual(3);
        var second= dropdownOptions.get(2).click();
        expect(second.getText()).toEqual('Option 2');
       });
  });