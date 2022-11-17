const ruleEmail = (v) => {
  const regexp = /.+@.+/i;

  if (regexp.test(v)) {
    return true;
  }

  return "Некорректный email";
};

const rulePhoneNumber = (v) => {
  const regexp = /^\+7\d{10}$/;

  if (regexp.test(v.trim())) {
    return true;
  }

  return "Некорректный номер телефона";
};

const ruleName = (v) => {
  const regexp = /^[A-ZА-ЯЁ]{2,}$/i;

  if (regexp.test(v.trim())) {
    return true;
  }

  return "Некорректное значение";
};

export function useFormRules() {
  const rules = {
    name: [],
    email: [],
    phoneNumber: [],
  };

  rules.name.push(ruleName);
  rules.email.push(ruleEmail);
  rules.phoneNumber.push(rulePhoneNumber);
  /*

    уточнить правило на небязательность в случае isPhone === true и v.length === 0
  
  */
  return {
    rules,
  };
}
