/* 
Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and 
a password. However, the password must be strong. The website considers a password to be strong if it satisfies 
the following criteria:

Its length is at least 6.
It contains at least one digit.
It contains at least one lowercase English character.
It contains at least one uppercase English character.
It contains at least one special character. The special characters are: !@#$%^&*()-+ */

function minimumNumber(n, password) {
  const c = [/[0-9]/, /[a-z]/, /[A-Z]/, /[!@#$%^&*()\-+]/].filter(
    (r) => !r.test(password)
  ).length;
  return Math.max(c, 6 - n);
}


console.log(minimumNumber(3,'Ab1'));