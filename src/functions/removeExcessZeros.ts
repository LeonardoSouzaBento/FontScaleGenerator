export function removeExcessZerosAndToFix(num: number): string {
  let str = num.toString().replace(",", ".");

  // 🔹 Normaliza para no máximo 6 casas decimais
  if (str.includes(".")) {
    const [, decimalPart] = str.split(".");
    if (decimalPart.length > 6) {
      str = num.toFixed(6);
    }
  }

  let chars = str.split("");
  let zeroCount = 0;

  // 🔹 Remove zeros consecutivos finais (mantendo no máx. 2)
  for (let i = chars.length - 1; i >= 0; i--) {
    const char = chars[i];

    if (char === ".") break;

    if (char === "0") {
      zeroCount++;
      if (zeroCount > 2) {
        chars.splice(i, 1);
      }
    } else {
      break;
    }
  }

  // 🔹 Garante parte decimal com duas casas
  const dotIndex = chars.indexOf(".");

  if (dotIndex === -1) {
    chars.push(".", "0", "0");
  } else {
    const decimals = chars.length - dotIndex - 1;

    if (decimals === 0) {
      chars.push("0", "0");
    } else if (decimals === 1) {
      chars.push("0");
    }
  }

  return chars.join("");
}
