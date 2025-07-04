// 处理金额(正负数)添加千分位并不四舍五入
export const fmtMoney = (num: string | number, decimalPlaces = 2) => {
  if (num === undefined || num === null || num === '') return;

  const amount = Number.isFinite(num) ? num : +num;

  // 将金额转换为字符串
  let amountStr = amount.toString();

  // 检查是否为负数
  let isNegative = false;
  if (amountStr.startsWith('-')) {
    isNegative = true;
    amountStr = amountStr.substring(1);
  }

  // 检查是否存在小数点
  const decimalIndex = amountStr.indexOf('.');
  let integerPart = amountStr;
  let decimalPart = '';
  if (decimalIndex !== -1) {
    integerPart = amountStr.substring(0, decimalIndex);
    decimalPart = amountStr.substring(decimalIndex + 1);
  }

  // 添加千分位逗号
  if (integerPart.length > 3) {
    let formattedIntegerPart = '';
    let count = 0;
    for (let i = integerPart.length - 1; i >= 0; i--) {
      formattedIntegerPart = integerPart[i] + formattedIntegerPart;
      count++;
      if (count === 3 && i !== 0) {
        formattedIntegerPart = ',' + formattedIntegerPart;
        count = 0;
      }
    }
    integerPart = formattedIntegerPart;
  }

  // 补零和指定小数位数
  if (decimalPart.length < decimalPlaces) {
    decimalPart = decimalPart.padEnd(decimalPlaces, '0');
  } else if (decimalPart.length > decimalPlaces) {
    decimalPart = decimalPart.substring(0, decimalPlaces);
  }

  // 根据是否为负数添加符号
  if (isNegative) {
    amountStr = '-' + integerPart + '.' + decimalPart;
  } else {
    amountStr = integerPart + '.' + decimalPart;
  }

  return amountStr;
};

// 复制文本到剪贴板
export const copy = async (str: any) => {
  if (navigator.clipboard) {
    const text = await navigator.clipboard.writeText(str);
    console.log(text);
  } else {
    const input = document.createElement('input');
    input.value = str;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    document.body.removeChild(input);
  }
};
