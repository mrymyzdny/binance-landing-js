const emailTest = (value) => {
  const emailPattern = /^([a-z0-9]+@[a-z]+\.[a-z]{2,3}$)/g;
  return emailPattern.test(value);
};

const nationalCodeTest = (value) => {
    console.log(value)
};

const phoneNumberTest = (value) => {
    console.log(value)

};

export default {
  emailTest,
  nationalCodeTest,
  phoneNumberTest
};
