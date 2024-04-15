const currencyFormatter = Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
    maximumFractionDigits: 2,
  });
  
  export default currencyFormatter;
  