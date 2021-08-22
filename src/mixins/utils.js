import store from '../store';
import { v4 as uuidv4 } from 'uuid';
import { TOAST_DURATION } from '../resource/const';
export default {
  methods: {
    // ham format ngay thang

    formatDate(date, table) {
      if (date === null) return null;
      let myDate = new Date(date);
      const getDate = myDate.getDate();
      let day = getDate >= 10 ? getDate.toString() : '0' + getDate.toString();
      let month = myDate.getMonth();
      month = month + 1;
      month = month >= 10 ? month.toString() : '0' + month.toString();
      if (!table)
        return myDate.getFullYear().toString() + '-' + month + '-' + day;
      return day + '/' + month + '/' + myDate.getFullYear();
    },

    //ham format tien
    formatCurrency(money) {
      if (money == null) return null;
      money = money.toLocaleString('it-IT', {
        style: 'currency',
        currency: 'VND',
      });
      return money;
    },

    createToast(msg, type) {
      let toast = {
        id: uuidv4(),
        msg: msg,
        type: type,
      };
      store.dispatch('addToast', toast);
      setTimeout(() => {
        store.dispatch('removeToast', toast.id);
      }, TOAST_DURATION);
    },
  },
};
