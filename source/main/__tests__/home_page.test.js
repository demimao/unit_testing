const homePageUrl =
  "http://127.0.0.1:5500/source/main/home_page/home_page.html";
const localhost = "http://127.0.0.1:5500";
const username = "puppeteer_here";
const password = "Password123";
const userNameSelect = "div.login_cred input[id='username']";
const userPassSelect = "div.login_cred input[id='password']";
const expenseSelect = "input[id='name']";

describe("Test cases for the home page", () => {
  beforeAll(async () => {
    await page.goto(localhost + "/source/main/login_page/login_page.html"),
      { waitUntil: ["networkidle0", "domcontentloaded"] };
  });

  // handles alert pop ups
  var alertMsg;
  page.on("dialog", async (dialog) => {
    //get alert message
    alertMsg = dialog.message();
    console.log(dialog.message());
    //accept alert
    await dialog.accept();
  });

  it("Login page reached", async () => {
    console.log("visted page");
    // Add some users and passwords to our database (local storage)te(() => (window.localStorage.getItem('users')));
    await page.evaluate(
      (users) => {
        window.localStorage.setItem("users", JSON.stringify(users));
      },
      [[username, password]]
    );
  });

  it("testing sucessful login", async () => {
    await page.type(userNameSelect, username);
    await page.type(userPassSelect, password);

    // console.log(await page.$(userNameSelect));

    let button = await page.$("#send");
    await button.click();
    // wait if page goes to home page
    await page.waitForNavigation();

    const url = await page.url();
    expect(url).toBe(localhost + "/source/main/home_page/home_page.html");
  });

  // creating an expense
  it("test create an expense", async () => {
    const addExpense = await page.$("input[id='add-row']");
    addExpense.click();

    await page.evaluate((name) => {
      name.value = "testcase";
    }, await page.$("input[id='name']"));

    await page.evaluate((amount) => {
      amount.value = "30";
    }, await page.$("input[id='amount']"));

    await page.select("#category", "Needs");

    await page.focus("#date");
    await page.keyboard.type("12202020");

    const adding = await page.$("#adding");
    adding.click();

    await page.waitForTimeout(1000);
    let localExpenses = await page.evaluate(() =>
      window.localStorage.getItem("puppeteer_here")
    );
    // console.log(localExpenses);
    // expect()
    let expected = `[{"name":"testcase","category":"Needs","value":"30","date":"2020-12-20"}]`;
    expect(localExpenses).toBe(expected);
  });

  // updating expense
  it("testing updating expense", async () => {
    const edit = await page.$("#btnn");
    edit.click();

    await page.focus("#name_update");
    await page.focus("#name_update"); //intentional
    await page.keyboard.type("edited");
    await page.focus("#amount_update");
    await page.keyboard.type("1000000");

    await page.select("#category_update", "Wants");

    await page.focus("#date_update");
    await page.keyboard.type("01012023");

    const update = await page.$("#updating");
    update.click();

    await page.waitForTimeout(1000);
    let localExpenses = await page.evaluate(() =>
      window.localStorage.getItem("puppeteer_here")
    );
    // console.log(localExpenses);

    let expected = `[{"name":"testcaseedited","category":"Wants","value":"301000000","date":"2023-01-01"}]`;
    expect(localExpenses).toBe(expected);
  });

  // deleteing expense
  it("testing deleting expense", async () => {
    const edit = await page.$("#btnn");
    edit.click();

    await page.waitForTimeout(1000);

    const deleting = await page.$("#deleting");
    deleting.click();

    await page.waitForTimeout(1000);

    let localExpenses = await page.evaluate(() =>
      window.localStorage.getItem("puppeteer_here")
    );
    expect(localExpenses).toBe(`[]`);
  });

  // testing searching for items
  it("test searching items", async () => {
    // Adding first expense
    userExpenses = [];
    let expenseValue1 = {
      name: "Test1",
      category: "Wants",
      value: "200",
      date: "2022-12-14",
    };
    //Adding second expense
    let expenseValue2 = {
      name: "Test200",
      category: "Needs",
      value: "50",
      date: "2022-12-20",
    };
    let expenseValue3 = {
      name: "Test100",
      category: "Needs",
      value: "500",
      date: "2002-12-20",
    };
    userExpenses.push(expenseValue1);
    userExpenses.push(expenseValue2);
    userExpenses.push(expenseValue3);

    await page.evaluate((userExpenses) => {
      window.localStorage.setItem(
        "puppeteer_here",
        JSON.stringify(userExpenses)
      );
    }, userExpenses);

    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

    await page.type('[name="e"]', "Test1");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);

    const data = await page.$$eval("table tr", (trs) =>
      trs.map((tr) => {
        // return tr.innerText;
        return window.getComputedStyle(tr).getPropertyValue("display");
      })
    );
    // console.log(data);

    // display property of Test200 is set to none
    let expected = ["table-row", "table-row", "none", "table-row"];
    expect(data).toEqual(expected);
  });

  // filtering for items
  it("testing filter functionality", async () => {
    //clear search text
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await page.select("#filter", "Needs");

    const data = await page.$$eval("table tr", (trs) =>
      trs.map((tr) => {
        return window.getComputedStyle(tr).getPropertyValue("display");
      })
    );
    // console.log(data);

    let expected = ["table-row", "none", "table-row", "table-row"];
    expect(data).toEqual(expected);
  });

  // testing first search then filter
  it("testing search then filter", async () => {
    //clear search text
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await page.type('[name="e"]', "Test1");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);
    await page.select("#filter", "Wants");

    const data = await page.$$eval("table tr", (trs) =>
      trs.map((tr) => {
        return window.getComputedStyle(tr).getPropertyValue("display");
      })
    );
    // console.log(data);

    let expected = ["table-row", "table-row", "none", "none"];
    expect(data).toEqual(expected);
  });

  // testing first filter then search
  it("testing filter then search", async () => {
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });
    await page.select("#filter", "Needs");

    await page.type('[name="e"]', "Test2");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(2000);

    const data = await page.$$eval("table tr", (trs) =>
      trs.map((tr) => {
        return window.getComputedStyle(tr).getPropertyValue("display");
      })
    );
    console.log(data);
    let expected = ["table-row", "none", "table-row", "none"];
    expect(data).toEqual(expected);
  });

  // test log out buttons for redirection back to login screen
  it("test logout navigation", async () => {
    let button = await page.$("#logout");
    await button.click();
    await page.waitForNavigation();
    const url = await page.url();

    expect(url).toBe(localhost + "/source/main/login_page/login_page.html");
  });

  // reading (for now we test that expense stays when logging out)
  it("check if expenses display stays persistent after signing back in", async () => {
    await page.type(userNameSelect, username);
    await page.type(userPassSelect, password);
    let button = await page.$("#send");
    await button.click();
    // wait if page goes to home page
    await page.waitForNavigation();

    const data = await page.$$eval("table tr", (trs) =>
      trs.map((tr) => {
        return window.getComputedStyle(tr).getPropertyValue("display");
      })
    );
    // console.log(data);
    // All expenses display on home page
    let expected = ["table-row", "table-row", "table-row", "table-row"];
    expect(data).toEqual(expected);
  });

  // test login bypass (null user)
  it("testing unauthenticated login", async () => {
    let button = await page.$("#logout");
    await button.click();
    await page.waitForNavigation();

    await page.goto(localhost + "/source/main/home_page/home_page.html", {
      waitUntil: ["networkidle0", "domcontentloaded"],
    });
    expect(alertMsg).toBe("Unauthenticated User... Plz Login");

    // Clear local storage
    await page.evaluate(() => {
      window.localStorage.clear();
    });
  });
});
