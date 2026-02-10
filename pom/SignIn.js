export class SignIn{


    constructor(page) {
        this.usernameTextbox = page.getByRole('textbox', { name: 'Username:' });
        this.passwordTextbox = page.getByRole('textbox', { name: 'Password:' });
        this.signInButton = page.getByRole('button', { name: 'Login' });

    }

    async fillUsername(username) {
    await this.usernameTextbox.fill(username);
  }

  async fillPassword(password) {
    await this.passwordTextbox.fill(password);
  }
    async clickSignInButton() {
    await this.signInButton.click();
  }


}