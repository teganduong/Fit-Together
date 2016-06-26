import $ from 'jquery';

export default class AuthService {
  static signIn(email, password) {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'POST',
        url: '/api/auth/sign-in',
        data: { email, password },
        dataType: 'json',
      }).then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

  static verify() {
    return new Promise((resolve, reject) => {
      $.get('/api/auth/verify').then(
        res => resolve(res),
        err => reject(err)
      );
    });
  }

