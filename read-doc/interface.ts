//================== 接口 ====================

 interface LabelledValue {
    label: string;
  }
  
  function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
  }
  // ts 编译器只检查必要的属性, 这里size没有用到故不会检查
  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);