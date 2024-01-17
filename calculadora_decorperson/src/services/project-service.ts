export function getTotalSalePrice(
  totalPriceProduct: number,
  factorComplexWork: number,
  discount: number


) {
  discount = totalPriceProduct * factorComplexWork * (discount / 100);
  return totalPriceProduct * factorComplexWork - discount;
}

export function getAliquota(totalPriceProduct: number, aliquota: number) {
  return totalPriceProduct * (aliquota / 100);
}

export function getComission(totalPriceProduct: number, comission: number) {
  return totalPriceProduct * (comission / 100);
}

export function getGrossProfit(
  totalSalePrice: number,
  totalProductPrice: number,
  aliquota: number,
  architectComission: number,
  sellerCommision: number
) {
  const aliq = (aliquota / 100) * totalSalePrice;
  const comArq = (architectComission / 100) * totalSalePrice;
  const comVend = (sellerCommision / 100) * totalSalePrice;

  return totalSalePrice - totalProductPrice - aliq - comArq - comVend;
}
