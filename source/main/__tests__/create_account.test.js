// Testing list note some are these not tested due to them not being fully implemented
// Check the username is between 8 to 15 characters
// Check username are only composed of letters, numbers, '-', '.', '_'.
// Check the password is between 8 to 15 characters
describe('Create account test cases', () => {

    // Declare constant that we will use repeatedly
    const localhost = "http://127.0.0.1:5500";
    const userNameSelect = "div.create_account_form input[name='username']";
    const userPassSelect = "div.create_account_form input[name='password']";
    const userPassRepeat = "div.create_account_form input[name='repeat_password']";

    var alertMsg;
    // go to webpage
    beforeAll(async () => {
      await page.goto('http://127.0.0.1:5500/source/main/login_page/login_page.html');
      await page.goto('http://127.0.0.1:5500/source/main/create_account/create_account.html');
    });
  
    // Check to make sure that create account page have loaded
    it('create account page reached ', async () => {
        console.log("visted page");
    });


    page.on('dialog', async dialog => {
        // await button.click();
        //get alert message
        alertMsg = dialog.message();
        // console.log(dialog.message());
        //accept alert
        await dialog.accept();

     });
     
    // Check username cannot be empty
    it('empty username', async() => {
        await page.reload();
        console.log("checking empty username won't change local storage")
        await page.type(userNameSelect, "");

        let button  = await page.$("#create");
        await button.click();

        let localUsers = await page.evaluate(() => (window.localStorage.getItem('users')));
        expect(localUsers).toBe(null);
    });

    // Checking for empty passwords
    it('checking empty password wont change local storage', async() => {
        await page.reload();

        await page.type(userNameSelect, "puppeteer_here");
        await page.type(userPassSelect, "");
        let button  = await page.$("#create");
        await button.click();

        let localUsers = await page.evaluate(() => (window.localStorage.getItem('users')));
        expect(localUsers).toBe(null);
    });

    // Checking for matching passwords
    it('check for non matching passwords', async() => {
        await page.reload();

        await page.type(userNameSelect, "puppeteer_here");
        await page.type(userPassSelect, "Password123");
        await page.type(userPassRepeat, "Notmatching123");
        let button  = await page.$("#create");
        await button.click();
        
        let localUsers = await page.evaluate(() => (window.localStorage.getItem('users')));
        expect(localUsers).toBe(null);
    });

    // Check password have at least 1 number, 1 lower case letter, and 1 upper case letter
    it('check for password pattern', async() => {
        await page.reload();
        await page.type(userNameSelect, "puppeteer_here");
        await page.type(userPassSelect, "password");
        await page.type(userPassRepeat, "password");
        let button  = await page.$("#create");
        await button.click();

        let localUsers = await page.evaluate(() => (window.localStorage.getItem('users')));
        expect(localUsers).toBe(null);
    });

    
    // Check if account has been successfully created if pass all requirements
    it('check account has been created', async() => {
        await page.reload();
        await page.type(userNameSelect, "puppeteer_here");
        await page.type(userPassSelect, "Password123");
        await page.type(userPassRepeat, "Password123");

        let button  = await page.$("#create");
        await button.click();
        // refresh page to chech local
        await page.waitForNavigation();
            
        let localUsers = await page.evaluate(() => (window.localStorage.getItem('users')));
        // console.log(localUsers);           
         
        expect(localUsers).toBe(`[["puppeteer_here","Password123"]]`);

    });

    // Check username has not been created before
    it('testing if username already exists',async ()=> {

        await page.goto('http://127.0.0.1:5500/source/main/create_account/create_account.html');
        
        await page.type(userNameSelect, "puppeteer_here");
        await page.type(userPassSelect, "Password123");
        await page.type(userPassRepeat, "Password123");
        
        let button  = await page.$("#create");
        await button.click();
    });
    // Check length of username and password

    // Check when clicked on "cancel", page returns to login page
    it('testing if user presses cancel returns to login page',async ()=>{
        await page.reload();

        let button = await page.$("#cancel");

        await button.click();

        await page.waitForNavigation();

        const url = await page.url();
        // let currentUrl =  await page.evaluate(() => {window.location.href});

        expect(url).toBe(localhost + "/source/main/login_page/login_page.html");
        // Clear local storage
        await page.evaluate(()=>{
            window.localStorage.clear();
        }); 

    });    
});
    