const ruleParse = {
  name: {
    regexp: /^[A-ZА-ЯЁ]{2,}$/i,
    message: "Некорректное имя",
  },
  email: {
    regexp: /.+@.+/i,
    message: "Некорректный email",
  },
  phoneNumber: {
    regexp: /^\+7 \(\d{3}\) \d{3} \d{2}-\d{2}$/,
    message: "Некорректный номер телефона",
  },
};

const validateExpression = (value, regexp, errorMessage) => {
  if (value?.length === 0 || regexp.test(value)) return true;

  return errorMessage;
};

const validateException = (value) => value?.length > 0 || "Обязательное поле";

export function useFormRules(isPhone) {
  const rules = {
    name: [],
    email: [],
    phoneNumber: [],
  };

  for (let key in rules) {
    const regexp = ruleParse[key].regexp;
    const message = ruleParse[key].message;

    const result = (value) => validateExpression(value, regexp, message);

    rules[key].push(result);
  }

  if (!isPhone) {
    rules.name.push(validateException);
    rules.phoneNumber.push(validateException);
  }

  return {
    rules,
  };
}
