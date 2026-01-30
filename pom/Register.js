export class Register{

constructor(page){
    this.page = page;
    this.registerButton = page.getByRole('link', { name: 'Register' });
    this.userNameText =   page.getByText('Username:');
    }

    async launchPage() {
    await this.page.goto('https://dsportalapp.herokuapp.com/home');
  }

  async clickRegister() {
  await this.registerButton.click();
  }

}