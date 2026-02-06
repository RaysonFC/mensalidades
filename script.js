document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('parcelaSelect');
  const vencimento = document.getElementById('vencimento');

  const meses = [
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  select.addEventListener('change', () => {
    const index = select.selectedIndex;
    vencimento.textContent = `Vencimento: 10 de ${meses[index]}`;
  });
});
