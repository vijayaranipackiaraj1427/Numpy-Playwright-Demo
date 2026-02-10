export class Home {

  constructor(page) {
    this.page = page;
    this.registerLink = page.getByRole('link', { name: 'Register' });
  }

  async launchApp() {
    await this.page.goto('https://dsportalapp.herokuapp.com/home');
  }

  async clickRegister() {
    await this.registerLink.click();
  }
}