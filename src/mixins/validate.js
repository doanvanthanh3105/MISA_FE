export default {
  validateNotNull(temp) {
    if (temp == null || temp.trim() == '') {
      return true;
    }
    return false;
  },

  validateCode(code) {
    let regex = /([N][V][-|_])+[0-9]{2,10}$/;
    return regex.test(code);
  },

  validateName(name) {
    return !(name == '');
  },

  validateIdentityNumber(number) {
    let regex = /^\d+$/;
    return regex.test(number);
  },

  validateEmail(email) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  },

  validatePhoneNumber(phone) {
    let regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
    return regex.test(phone);
  },
};
