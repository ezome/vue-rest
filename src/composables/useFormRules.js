const ruleEmail = (v) => {
  const regexp = /.+@.+/i;

  if (regexp.test(v)) {
    return true;
  }

  return "Некорректный email";
};

const rulePhoneNumber = (v) => {
  const regexp = /^\+7 \(\d{3}\) \d{3} \d{2}-\d{2}$/;

  if (v.length === 0 || regexp.test(v)) {
    return true;
  }

  return "Некорректный номер телефона";
};

const ruleName = (v) => {
  const regexp = /^[A-ZА-ЯЁ]{2,}$/i;

  if (v.length === 0 || regexp.test(v.trim())) {
    return true;
  }

  return "Некорректное значение";
};

export function useFormRules(isPhone) {
  const rules = {
    name: [],
    email: [],
    phoneNumber: [],
  };

  rules.name.push(ruleName);
  rules.email.push(ruleEmail);
  rules.phoneNumber.push(rulePhoneNumber);

  if (!isPhone) {
    rules.name.push((v) => v.length > 0 || "Обязательное поле");
    rules.phoneNumber.push((v) => v.length > 0 || "Обязательное поле");
  }

  return {
    rules,
  };
}
