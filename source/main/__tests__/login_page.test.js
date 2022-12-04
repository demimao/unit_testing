describe("login page test cases", () => {
  // Define localhost, username and password variables
  const localhost = "http://127.0.0.1:5500",
    username = "puppeteer_here",
    password = "Password123";
  const userNameSelect = "div.login_cred input[id='username']";
  const userPassSelect = "div.login_cred input[id='password']";

  // go to webpage
  beforeAll(async () => {
    await page.goto(localhost + "/source/main/login_page/login_page.html");
  });
  // Check to make sure that login page have loaded
  it("Login page reached", async () => {
    console.log("visted page");
    // Add some users and passwords to our database (local storage)te(() => (window.localStorage.getItem('users')));
    await page.evaluate(
      (users) => {
        window.localStorage.setItem("users", JSON.stringify(users));
      },
      [[username, password]]
    );
    // let local = await page.evaluate(() => (window.localStorage.getItem('users')));
    // console.log(local);
  });

  // handles alert pop ups
  var alertMsg;
  page.on("dialog", async (dialog) => {
    //get alert message
    alertMsg = dialog.message();
    // console.log(dialog.message());
    //accept alert
    await dialog.accept();
  });
  // Check for navigation to sign up page
  it("testing for navigation to create account", async () => {
    await Promise.all([page.waitForNavigation(), page.click("#signup")]);
    const url = await page.url();
    // console.log(url);
    expect(url).toBe(
      localhost + "/source/main/create_account/create_account.html"
    );
  });

  // Check blank username is not able to access home page (unsuccesfull login)
  it("testing for blank username", async () => {
    await page.goto(localhost + "/source/main/login_page/login_page.html", {
      waitUntil: ["networkidle0", "domcontentloaded"],
    });
    // await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"]});
    await page.type(userNameSelect, "");
    await page.type(userPassSelect, password);
    let button = await page.$("#send");
    await button.click();
    // check page url doesn't change
    const url = await page.url();
    // let currentUrl =  await page.evaluate(() => {window.location.href}); e.log(url);
    expect(url).toBe(localhost + "/source/main/login_page/login_page.html");
  });

  // check for blank password, should not login
  it("testing for blank password", async () => {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await page.type(userNameSelect, username);
    await page.type(userPassSelect, "");
    let button = await page.$("#send");
    await button.click();
    // check page url doesn't change
    const url = await page.url();
    // let currentUrl =  await page.evaluate(() => {window.location.href}); e.log(url);
    expect(url).toBe(localhost + "/source/main/login_page/login_page.html");
  });

  // valid user incorrect pasword
  it("testing user exists but wrong password", async () => {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

    await page.type(userNameSelect, username);
    await page.type(userPassSelect, "incorrectPassowrd");
    let button = await page.$("#send");
    await button.click();

    expect(alertMsg).toBe("Invalid Password");
  });

  // user does not exist
  it("user doesnt exist", async () => {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

    await page.type(userNameSelect, "IamnotReal");
    await page.type(userPassSelect, password);
    let button = await page.$("#send");
    await button.click();

    expect(alertMsg).toBe("Account under IamnotReal does not exist.");
  });
  // Check if valid username and password would successfully login
  it("testing sucessful login", async () => {
    // Enter the username and password
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    //await page.waitForNavigation();

    await page.type(userNameSelect, username);
    await page.type(userPassSelect, password);
    let button = await page.$("#send");
    await button.click();
    // wait if page goes to home page
    await page.waitForNavigation();

    const url = await page.url();

    // let currentUrl =  await page.evaluate(() => {window.location.href}); e.log(url);
    expect(url).toBe(localhost + "/source/main/home_page/home_page.html");

    // Clear the localstorage
    await page.evaluate(() => {
      window.localStorage.clear();
    });
  });
});
