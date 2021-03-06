const cpfValidation = (cpf) => {
  const validation = cpf.replace(/\.|-/g, '');

  let Soma;
  let Resto;
  Soma = 0;
  if (validation == '00000000000') return false;

  for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(validation.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(validation.substring(9, 10))) return false;

  Soma = 0;
  for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(validation.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto == 10 || Resto == 11) Resto = 0;
  if (Resto != parseInt(validation.substring(10, 11))) return false;

  return true;
};

export default cpfValidation;
