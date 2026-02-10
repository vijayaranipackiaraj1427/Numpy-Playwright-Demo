export class Home {

  constructor(page) {
    this.page = page;
    this.registerLink = page.getByRole('link', { name: 'Register' });
    this.signInButton = page.getByRole('link', { name: 'Sign in' });
    this.getStartedButton = page.locator('a[href="data-structures-introduction"]');
  }

  async launchApp() {
    await this.page.goto('https://dsportalapp.herokuapp.com/home');
  }

  async clickRegister() {
    await this.registerLink.click();
  }

  async clickSignInLink() {
    await this.signInButton.click();
  }
  async clickGetstarted() {
    await this.getStartedButton.click();
  }
}

