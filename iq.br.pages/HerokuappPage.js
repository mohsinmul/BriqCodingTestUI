var herokuappPage = function(){
var checkboxLink= element(by.xpath("//div[@id='content']/ul/li/a[text()='Checkboxes']"));
var checkbox1Button= element(by.xpath("//form[@id='checkboxes']/input[1]"));

var dropdownLink= element(by.xpath("//div[@id='content']/ul/li/a[text()='Dropdown']"));
var dropdownOptionList = element.all(by.xpath("//*[@id='dropdown']/option"));

this.getCheckboxLink=function(){
  return checkboxLink;
};

this.getCheckbox1Button =function(){
  return checkbox1Button;
};

this.getDropdownLink = function(){
  return dropdownLink;
};

this.dropdownOptionList = function(){
  return dropdownOptionList;
};
};

module.exports = new herokuappPage();